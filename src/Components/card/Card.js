import React from "react";
import "./Card.css";
import moment from "moment/moment";
import { Link } from "react-router-dom";
const Card = ({ repos }) => {
  return (
    <>
      {repos.map((item) => {
        let date = moment(item.created_at).format("MMMM Do YYYY");
        const repoId = item.name;
        return (
          <div className="card" key={item.id}>
            <div className="image">
              <img
                src="https://avatars.githubusercontent.com/u/108188979?v=4"
                alt="avatar"
              />
              <span>
                <h3>chisom69264536</h3>

                <p>{item.name}</p>
              </span>
            </div>

            <p>The repository was created on {date} by chisom69264536</p>
            <Link to={`/repos/${repoId}`}>
              <button>View Repo</button>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Card;
