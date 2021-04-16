import React from "react";
import classes from "./Error404.module.css";

function Error404() {
  return (
    <div>
      <div className={classes.error}>404</div>
      <div className={classes.error}>Page not found!</div>
      <div className={classes.error}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
    </div>
  );
}

export default Error404;
