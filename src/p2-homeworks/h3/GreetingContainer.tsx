import React, { KeyboardEvent, ChangeEvent, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
  users: Array<UserType>;
  addUserCallback: (name: string) => void;
};

// local state
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
    error && setError(null);
  };

  const onEnterPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") addUser();
  };

  const addUser = () => {
    const trimmedNewName = name.trim();

    if (trimmedNewName) {
      addUserCallback(trimmedNewName);
      alert(`Hello ${trimmedNewName}!`);
    } else setError("Name is required");

    setName("");
  };

  const totalUsers = users.length;

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
      onEnterPress={onEnterPress}
    />
  );
};

export default GreetingContainer;
