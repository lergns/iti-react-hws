import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { useDispatch, useSelector } from "react-redux";
import { Preloader } from "./Preloader/Preloader";
import { AppStateType } from "./bll/store";
import { loadingAC } from "./bll/loadingReducer";

function HW10() {
  const dispatch = useDispatch();
  const isLoading = useSelector<AppStateType, boolean>(
    (state) => state.loading.isLoading
  );

  const setLoading = () => {
    dispatch(loadingAC(true));
    const id = setTimeout(() => {
      dispatch(loadingAC(false));
      clearTimeout(id);
    }, 2000);
  };

  return (
    <div>
      <hr />
      homework 10
      {isLoading ? (
        <div>
          <Preloader />
        </div>
      ) : (
        <div>
          <SuperButton onClick={setLoading}>set loading...</SuperButton>
        </div>
      )}
    </div>
  );
}

export default HW10;
