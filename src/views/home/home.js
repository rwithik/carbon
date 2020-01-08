import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/navbar";
import "./home.css";

import landinggif from "../../public/landing.gif";

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <section className="landing">
          <div className="landing__container">
            <img
              src={landinggif}
              alt="landing gif"
              className="landing__image"
            />
            <div className="landing__text">
              <p>
                Track your footprint and bring your life closer to nature. It is
                not possible to do away emissions at one go but it is possible
                to reduce emissions one step at a time. My Footprint helps you
                track your carbon footprint and suggests measures to bring you
                closer to being carbon neutral.
              </p>
            </div>
          </div>
        </section>
        <section className="process">
          <h1 className="process__title">The Creative Design Process</h1>
          <div className="process__step process__step--dark">
            Step 1: Track your journey.
          </div>
          <div className="process__step process__step--light">
            Step 2: Understand the implications.
          </div>
          <div className="process__step process__step--dark">
            Step 3: Think of the corrective measures.
          </div>
          <div className="process__step process__step--light">
            Step 4: Change and update.
          </div>
        </section>
        <section className="footer">
          <Link to="/login" className="footer__link footer__link--login">
            Login
          </Link>
          <div className="footer__bottom-bar">
            <div className="bottom-bar__item">Privacy/Terms</div>
            <div className="bottom-bar__item">Copyright 2019</div>
          </div>
        </section>
      </div>
    );
  }
}
