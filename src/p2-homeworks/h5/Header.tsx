import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "./Routes";
import classes from "./Header.module.css";

function Header() {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to={PATH.PRE_JUNIOR} activeClassName={classes.active}>
          Pre-Junior
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to={PATH.JUNIOR} activeClassName={classes.active}>
          Junior
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to={PATH.JUNIOR_PLUS} activeClassName={classes.active}>
          Junior-Plus
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
