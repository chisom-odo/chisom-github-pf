import React from "react";
import "./RepoList.css";
import Navigation from "../../Components/navigation/Navigation";
import Card from "../../Components/card/Card";
const RepoList = () => {
  return (
    <>
      <div className="repos">
        <Navigation />
        <div className="repos-content">
          <Card />
        </div>
      </div>
    </>
  );
};

export default RepoList;
