import React from "react";
import "./Error.css";
import Lottie from "react-lottie";
import errorAnimation from "../../assets/125702-404-page-not-found.json";
import { NavLink } from "react-router-dom";

const Error = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: errorAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="error">
        <h1>Error Page</h1>
        <p>
          Oops! page not found .
          <br />
          Please revert back to the home page
        </p>
        <div className="anime-err">
          <Lottie options={defaultOptions} height={250} width={400} />
        </div>
        <NavLink to="/" className="home-btn">
          <div>
            <button>Home Page</button>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Error;
