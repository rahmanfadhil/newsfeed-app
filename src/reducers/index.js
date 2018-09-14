import { combineReducers } from "redux";
import sourcesReducer from "./sourcesReducer";
import articlesReducer from "./articlesReducer";

export default combineReducers({
  sources: sourcesReducer,
  articles: articlesReducer
});
