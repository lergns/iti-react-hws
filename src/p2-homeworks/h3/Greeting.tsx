import React, { ChangeEvent, KeyboardEvent } from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
  name: string;
  setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
  error: string | null;
  totalUsers: number;
  onEnterPress: (event: KeyboardEvent<HTMLInputElement>) => void;
};

const Greeting: React.FC<GreetingPropsType> = ({
  name,
  setNameCallback,
  addUser,
  error,
  totalUsers,
  onEnterPress,
}) => {
  const inputClass = error ? s.error : "";

  return (
    <div>
      <input
        value={name}
        onChange={setNameCallback}
        onKeyPress={onEnterPress}
        className={inputClass}
      />
      <span>{error}</span>
      <button onClick={addUser} disabled={!name}>
        add
      </button>
      <span>{totalUsers}</span>
    </div>
  );
};

export default Greeting;
