import { combineReducers } from "redux";
import { groupTaskReducer } from "./groupTaskReducer";

const rootReducer = combineReducers({
    groupTask: groupTaskReducer,
});

export default rootReducer;
