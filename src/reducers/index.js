import { combineReducers } from "redux";
import sourcesReducer from "./sourcesReducer";

export default combineReducers({
  sources: sourcesReducer
});
