import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment/moment";
import "./Repo.css";
import { NavLink } from "react-router-dom";

const Repo = () => {
  const { repoId } = useParams();
  const [repo, setRepo] = useState({});

  useEffect(() => {
    const getRepo = async () => {
      const { data } = await axios.get(
        `https://api.github.com/repos/chisom6924536/${repoId}`
      );
      setRepo(data);
    };
    getRepo();
  },[repoId])

  let date = moment(repo.created_at).format("MMMM Do YYYY");
  let updated = moment(repo.updated_at).format("MMMM Do YYYY");
  let pushed = moment(repo.pushed_at).format("MMMM Do YYYY");
  console.log(repo);

  return (
    <>
      <div className="repo--details">
      <h3> Name: <span className="s">{repo.name}</span> </h3>
      <h3>Id : <span className="s">{repo.id}</span></h3>
      <h3>Owner: <span className="s">{repo.owner?.login}</span></h3>
      <h3>Created at: <span className="s"> {date}</span></h3>
      <h3>Updated at: <span className="s">{updated}</span> </h3>
      <h3>Pushed at: <span className="s">{pushed}</span></h3>
      <h3>Language: <span className="s">{repo?.language}</span></h3>
      <h3>Private: <span className="s">{repo?.private}</span></h3>
      <h3>Url : <span className="s">{repo.url}</span></h3>
      <h3>Homepage: <span className="s">{repo?.homepage}</span></h3> 
      <NavLink to="/repoList">
      <button className="repo-btn">RepoList</button>
      </NavLink>
      </div>
      
    </>
  );
};

export default Repo;
