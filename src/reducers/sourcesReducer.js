import newslist from "../newslist";
import { SET_SEARCH } from "../types";

const defaultState = {
  sources_list: newslist,
  sources_list_search: newslist
};

const sourcesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      let filteredSources;
      if (action.payload === "") {
        filteredSources = state.sources_list;
      } else {
        filteredSources = state.sources_list.filter(item => {
          return item.name.toLowerCase().includes(action.payload.toLowerCase());
        });
      }
      return { ...state, sources_list_search: filteredSources };
    default:
      return state;
  }
};

export default sourcesReducer;
