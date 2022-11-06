import React from "react";
import "./NavigationMobile.css"
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const NavigationMobile = () => {
  return (
    <>
      <div className="nav-mobile">
        <div className="nav-links-mobile">
          <>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#3da8b4" : "",
                padding: isActive ? "8px" : "",
                borderRadius: isActive ? " 4px" : "",
              })}
              to="/"
              className="homeIcon"
            >
              {/* <Icon icon="ant-design:home-filled" width={20} /> */}
              <h3> Home </h3>
            </NavLink>
          </>

          <>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#3da8b4" : "",
                padding: isActive ? "8px" : "",
                borderRadius: isActive ? " 4px" : "",
              })}
              to="/repoList"
              className="homeIcon"
            >
              {/* <Icon icon="mdi:source-repository" width={20} /> */}
              <h3> RepoList </h3>
            </NavLink>
          </>
        </div>
      </div>
    </>
  );
};

export default NavigationMobile;
