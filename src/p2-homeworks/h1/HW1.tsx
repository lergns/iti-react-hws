import React from "react";
import { Message } from "./Message";

const messageData = {
  avatar:
    "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
  name: "Artem",
  text: "npm start нажимал?",
  time: "20:00",
};

function HW1() {
  return (
    <div>
      <hr />
      homework 1
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        text={messageData.text}
        time={messageData.time}
      />
    </div>
  );
}

export default HW1;
