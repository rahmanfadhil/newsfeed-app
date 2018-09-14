import {
  FETCH_ARTICLES_PENDING,
  FETCH_ARTICLES_FULFILLED,
  FETCH_ARTICLES_REJECTED
} from "../types";

const articlesReducer = (
  state = { loading: false, error: null, data: [] },
  action
) => {
  switch (action.type) {
    case FETCH_ARTICLES_PENDING:
      return { ...state, loading: true };
    case FETCH_ARTICLES_FULFILLED:
      return { ...state, loading: false, data: action.payload };
    case FETCH_ARTICLES_REJECTED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default articlesReducer;
