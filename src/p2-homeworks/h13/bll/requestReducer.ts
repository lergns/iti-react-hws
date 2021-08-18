import { Dispatch } from "redux";
import { requestsAPI } from "../api/requestsAPI";
import { AppStateType } from "../../h10/bll/store";

type InitStateType = typeof initState;
type ActionsType =
  | ReturnType<typeof setIsCheckedAC>
  | ReturnType<typeof setResMessageAC>;

export const setIsCheckedAC = (isChecked: boolean) =>
  ({
    type: "SET-IS-SUCCESS",
    isChecked,
  } as const);
const setResMessageAC = (resMessage: string) =>
  ({ type: "SET-RES-MESSAGE", resMessage } as const);

export const requestSuccessTC = (isChecked: boolean) => (
  dispatch: Dispatch
) => {
  requestsAPI
    .testPost(isChecked)
    .then((res) => {
      dispatch(setResMessageAC(res.data.errorText));
      console.log({ ...res });
      console.log(res.data.errorText);
    })
    .catch((err) => {
      dispatch(setResMessageAC(err.response.data.errorText));
      console.log({ ...err });
      console.log(err.response ? err.response.data.errorText : err.message);
    });
};

const initState = {
  isChecked: false,
  resMessage: "",
};

export const requestReducer = (
  state = initState,
  action: ActionsType
): InitStateType => {
  switch (action.type) {
    case "SET-IS-SUCCESS": {
      return { ...state, isChecked: action.isChecked };
    }

    case "SET-RES-MESSAGE": {
      return { ...state, resMessage: action.resMessage };
    }

    default:
      return state;
  }
};
