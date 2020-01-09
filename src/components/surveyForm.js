import React, { Component } from "react";

import "./survey.css";

class SurveyForm extends Component {
  state = {
    answers: {
      household: {
        q1: "",
        q2: "",
        q3: "",
        q4: ""
      },
      electronics: {
        q1: ""
      },
      car: {
        q1: "",
        q2: "",
        q3: ""
      },
      flight: {
        q1: "",
        q2: ""
      },
      food: {
        q1: ""
      },
      transport: {
        q1: "",
        q2: "",
        q3: ""
      },
      cycle: {
        q1: ""
      },
      tree: {
        q1: ""
      },
      sharing: {
        q1: ""
      }
    }
  };

  questions = {
    household: [
      "No. Of persons in your house: ",
      "Electricity consumption in kwH: ",
      "LPG consumption in litres: ",
      "Wood in tonnes: "
    ],
    flight: ["Class of Travel(Economy/Business): ", "Total Miles: "],
    transport: [
      "Total miles in a bus: ",
      "Total miles in Train: ",
      "Total miles in tube/subway: "
    ],
    car: [
      "Fuel used(Petro/diesel/CNG): ",
      "Mileage of your vehicle(miles): ",
      "Total Miles: "
    ],
    electronics: ["Amount of Electronics purchased in US$: "],
    food: ["Amount of Red Meat consumed in KG: "],
    cycle: ["No. of miles cycled instead of a car: "],
    tree: ["No. of Saplings planted: "],
    sharing: ["No. of miles car pooled instead of driving alone: "]
  };

  onChangeHandler = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    const questions = this.questions[this.props.category];
    console.log(questions);
    const inputs = questions.map((item, index) => {
      return (
        <div>
          <label htmlFor={`q${index + 1}`}>{questions[index]}</label>
          <input
            name={`q${index + 1}`}
            placeholder="Enter your answer"
            className="form__input"
            value={this.state.answers[this.props.category][`q${index + 1}`]}
            onChange={this.onChangeHandler}
          />
        </div>
      );
    });

    return (
      <div className="survey-container">
        <form className="survey__form">
          {inputs}

          <input
            type="submit"
            value="Submit"
            className="submit__btn"
            onSubmit={this.onSubmit}
          />
        </form>
      </div>
    );
  }
}

export default SurveyForm;
