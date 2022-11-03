import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="card-desc">
          <div className="image">
            <img src="" className="avatar" />
          </div>

          <h3 className="card-title">chisom69264536</h3>
          <h4>ChisomOdoE-Altschool-Assg2</h4>
        </div>

        <p>The repository was created on 20th June 2022 by chisom69264536 </p>
        <Link to="">
          <button>View Repo</button>
        </Link>
      </div>
    </>
  );
};

export default Card;
