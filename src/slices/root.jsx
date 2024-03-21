import { combineReducers } from "redux";
import authReducer from "./auth";

const rootReducer = combineReducers({
  // The key names here will define the structure of your state
  auth: authReducer,
  // Add other reducers here
});

export default rootReducer;
