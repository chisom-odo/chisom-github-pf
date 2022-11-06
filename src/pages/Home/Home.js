import React from "react";
import "./Home.css";
import Lottie from "react-lottie";
import meditatingMan from "../../assets/125746-meditating-man.json";
import Navigation from "../../Components/navigation/Navigation";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Home Page of Chisom Odo Esther"
        />
        <link rel="canonical" href="/" />
      </Helmet>

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

    </>
  );
};

export default Home;
