import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../h10/bll/store";
import { setIsCheckedAC, requestSuccessTC } from "./bll/requestReducer";

export const Request = () => {
  const dispatch = useDispatch();
  const isChecked = useSelector<AppStateType, boolean>(
    (state) => state.requested.isChecked
  );
  const resMessage = useSelector<AppStateType, string>(
    (state) => state.requested.resMessage
  );

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(setIsCheckedAC(event.currentTarget.checked));
  const onClickHandler = () => dispatch(requestSuccessTC(isChecked));

  return (
    <div>
      <button
        onClick={onClickHandler}
        style={{ width: "50px", height: "20px", cursor: "pointer" }}
      >
        x
      </button>
      <input
        type={"checkbox"}
        style={{ width: "15px", height: "15px", cursor: "pointer" }}
        checked={isChecked}
        onChange={onChangeHandler}
      />
      <div style={{ fontWeight: "bold", color: "blueviolet" }}>
        {resMessage}
      </div>
    </div>
  );
};
