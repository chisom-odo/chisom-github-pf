import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import meditatingMan from "../../assets/125746-meditating-man.json";
import Navigation from "../../Components/navigation/Navigation";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: meditatingMan,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="home">
        <Navigation />

        <div className="home-content">
          <h1>Chisom Repo Portfolio </h1>
          <p>
            Hello ! My name is <span>Chisom Odo</span>. I am an aspiring
            Frontend Developer at <span>Altschool Africa</span>. This is my
            first Exam Project for the Second Semester. Enjoy!!!
          </p>
          <div className="anime">
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>

      {/* <Link to="/error">error</Link> */}
    </>
  );
};

export default Home;
