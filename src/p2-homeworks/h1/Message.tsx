import React from "react";
import classes from "./Message.module.css";

type MessagePropsType = {
  avatar: string;
  name: string;
  text: string;
  time: string;
};

export function Message(props: MessagePropsType) {
  return (
    <div>
      <img className={classes.avatar} src={props.avatar} alt={"Avatar"}></img>

      <div className={classes.message}>
        <div className={classes.name}>{props.name}</div>
        <br></br>
        <div className={classes.text}>{props.text}</div>
        <br></br>
        <div className={classes.time}>{props.time}</div>
      </div>
    </div>
  );
}
