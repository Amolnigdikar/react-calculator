import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [value, setValue] = useState("0");

  const inputNumber = (e) => {
    console.log("Button clincked " + e);
    if (value === "0") {
      setValue(e);
    } else {
      setValue(value + "" + e);
    }
  };

  const inputCharacter = (character) => {
    console.log(character);
    if (
      value.toString().charAt(value.toString().length - 1) !== "/" &&
      value.toString().charAt(value.toString().length - 1) !== "-" &&
      value.toString().charAt(value.toString().length - 1) !== "+" &&
      value.toString().charAt(value.toString().length - 1) !== "*" &&
      value.toString().charAt(value.toString().length - 1) !== "."
    ) {
      setValue(value + "" + character);
    }
  };

  const backspaceFunction = () => {
    if (value !== "0") {
      let updatedValue = value.toString().slice(0, value.length - 1);
      setValue(updatedValue);
    }
  };

  const calculate = () => {
    const answer = eval(value);
    setValue(answer);
  };

  return (
    <div className="container custom-style">
      <div className="row justify-content-center">
        <div className="col-sm-3">
          <input type="text" value={value} className="form-control" />
        </div>
      </div>

      <div className="row justify-content-center">
        <div class="col-md-0">
          <button className="btn btn-light" onClick={(e) => inputNumber(9)}>
            9
          </button>
        </div>
        <div class="col-md-0">
          <button className="btn btn-light" onClick={(e) => inputNumber(8)}>
            8
          </button>
        </div>
        <div class="col-md-0">
          <button className="btn btn-light" onClick={(e) => inputNumber(7)}>
            7
          </button>
        </div>
        <div class="col-md-0">
          <button
            className="btn btn-primary"
            onClick={(e) => inputCharacter("/")}
          >
            /
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div class="col-md-0">
          <button className="btn btn-light" onClick={(e) => inputNumber(6)}>
            6
          </button>
        </div>
        <div class="col-md-0">
          <button className="btn btn-light" onClick={(e) => inputNumber(5)}>
            5
          </button>
        </div>
        <div class="col-md-0">
          <button className="btn btn-light" onClick={(e) => inputNumber(4)}>
            4
          </button>
        </div>
        <div class="col-md-0">
          <button
            className="btn btn-primary"
            onClick={(e) => inputCharacter("-")}
          >
            -
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div class="col-md-0">
          <button className="btn btn-light" onClick={(e) => inputNumber(3)}>
            3
          </button>
        </div>
        <div class="col-md-0">
          <button className="btn btn-light" onClick={(e) => inputNumber(2)}>
            2
          </button>
        </div>
        <div class="col-md-0">
          <button className="btn btn-light" onClick={(e) => inputNumber(1)}>
            1
          </button>
        </div>
        <div class="col-md-0">
          <button
            className="btn btn-primary"
            onClick={(e) => inputCharacter("*")}
          >
            *
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-0">
          <div class="col-md-0">
            <button className="btn btn-light" onClick={() => inputNumber(0)}>
              0
            </button>
          </div>
        </div>

        <div className="col-md-0">
          <button
            className="btn btn-light"
            onClick={(e) => inputCharacter(".")}
          >
            .
          </button>
        </div>

        <div className="col-md-0">
          <button className="btn btn-info" onClick={calculate}>
            =
          </button>
        </div>

        <div>
          <button
            className="btn btn-primary"
            onClick={(e) => inputCharacter("+")}
          >
            +
          </button>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-0">
          <button
            className="btn btn-warning"
            onClick={() => {
              setValue("0");
            }}
          >
            AC
          </button>
        </div>
        <div className="col-md-0">
          <button className="btn btn-danger" onClick={backspaceFunction}>
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
