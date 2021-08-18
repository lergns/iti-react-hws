import { loadingReducer } from "./loadingReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { themeReducer } from "../../h12/bll/themeReducer";
import { requestReducer } from "../../h13/bll/requestReducer";
import thunk from "redux-thunk";

export type AppStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  loading: loadingReducer,
  theme: themeReducer,
  requested: requestReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
