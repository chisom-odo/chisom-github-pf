import React from "react";
import "./Navigation.css";
import { Icon } from "@iconify/react";

const Navigation = () => {
  return (
    // <Icon icon="bx:menu" width={50}/>
    <>
      <div className="nav">
        <div className="nav-links">
          <div className="homeIcon">
            <Icon icon="ant-design:home-filled" width={20} />
            <h3>Home</h3>
          </div>

          <div className="homeIcon">
            <Icon icon="mdi:source-repository" width={20} />
            <h3>RepoList</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
