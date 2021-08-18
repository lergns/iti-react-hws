import { UserType } from "../HW8";

type ActionTypes =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: Array<UserType>,
  action: ActionTypes
): Array<UserType> => {
  switch (action.type) {
    case "sort": {
      const stateCopy = [...state].sort((a, b) => {
        if (a.name > b.name) return 1;
        else if (a.name < b.name) return -1;
        else return 0;
      });

      return action.payload === "up" ? stateCopy : stateCopy.reverse();
    }

    case "check": {
      return state.filter((person) => person.age >= action.payload);
    }

    default:
      return state;
  }
};
