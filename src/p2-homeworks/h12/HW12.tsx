import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../h10/bll/store";
import { changeThemeAC, ThemesType } from "./bll/themeReducer";

function HW12() {
  const dispatch = useDispatch();

  const theme = useSelector<AppStateType, ThemesType>(
    (state) => state.theme.theme
  );

  const themes = ["dark", "red", "some"];

  const onChangeCallback = (theme: ThemesType) =>
    dispatch(changeThemeAC(theme));

  return (
    <div className={s[theme]}>
      <hr />
      <span className={s[theme + "-text"]}>homework 12</span>
      <SuperRadio
        name={"radio"}
        options={themes}
        value={theme}
        onChangeOption={onChangeCallback}
      />
      {/*<SuperSelect*/}
      {/*  options={themes}*/}
      {/*  value={theme}*/}
      {/*  onChangeOption={onChangeCallback}*/}
      {/*/>*/}
      <hr />
    </div>
  );
}

export default HW12;
