import React from "react";
import { LinkProps, NavLink } from "react-router-dom";
import st from "./style.module.css";

function Menu() {
  const navLinkStyles = ({ isActive }: any) => {
    return {
      fontWeight: isActive ? "800" : "normal",
      color: isActive ? "brown" : "black",
      letterSpacing: isActive ? "2px" : "normal",
    };
  };
  return (
    <div className={st.myMenu}>
      <div className={st.myMenuUl}>
        <ul>
          <li>
            <NavLink style={navLinkStyles} to={"/"}>
              Show All
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to={"/add-food"}>
              Add New Food
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to={"/add-set"}>
              Add New Set
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
