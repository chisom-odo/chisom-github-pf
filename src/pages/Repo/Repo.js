import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Repo = () => {
  const { repoId } = useParams();
  const [repo, setRepo] = useState({});
  console.log(repoId);
  useEffect(() => {
    fetch(`https://api.github.com/repos/chisom6924536/${repoId}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then((data) => setRepo(data))
      .catch((err) => console.log(err));
  }, [repoId]);

  return <div>{repo.name}</div>;
};

export default Repo;
