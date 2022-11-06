import React from "react";
import "./Navigation.css";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    // <Icon icon="bx:menu" width={50}/>
    <>
      <div className="nav">
        <div className="nav-links">
          <>
            <NavLink
              style={({ isActive }) => ({
                background: isActive ? "#2B2F3B" : "",
                padding: isActive ? "8px" : "",
                borderRadius: isActive ? " 4px" : "",
              })}
              to="/"
              className="homeIcon"
            >
              <Icon icon="ant-design:home-filled" width={20} />
              <h3> Home </h3>
            </NavLink>
          </>

          <>
            <NavLink
              style={({ isActive }) => ({
                background: isActive ? "#2B2F3B" : "",
                padding: isActive ? "8px" : "",
                borderRadius: isActive ? " 4px" : "",
              })}
              to="/repoList"
              className="homeIcon"
            >
              <Icon icon="mdi:source-repository" width={20} />
              <h3> RepoList </h3>
            </NavLink>
          </>
        </div>
      </div>
    </>
  );
};

export default Navigation;
