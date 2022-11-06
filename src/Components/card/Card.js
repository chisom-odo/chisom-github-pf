import React from "react";
import "./Card.css";
import moment from "moment/moment";

const Card = ({ repos }) => {
  return (
    <>
      {repos.map((item) => {
        
        let date = moment(item.created_at).format('MMMM Do YYYY');
        return (
        
          <div className="card" key={item.id}>
            <div className="image">
              <img src="https://avatars.githubusercontent.com/u/108188979?v=4" alt="avatar" />
              <span>
                <h3>chisom69264536</h3>

                <p>{item.name}</p>
              </span>
            </div>

            <p>
              The repository was created on {date} by chisom69264536
            </p>
            <a href={item.html_url} target = "_blank" rel= "noreferrer">
            <button>View Repo</button>
            </a>
          </div>
          
        );
      })}
    </>
  );
};

export default Card;
