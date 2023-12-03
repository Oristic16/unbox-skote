import { combineReducers } from "redux";

// Front
import Layout from "./layout/reducer";

//Calendar
import calendar from "./calendar/reducer";

const rootReducer = combineReducers({
  // public
  Layout,
  calendar,
});

export default rootReducer;
