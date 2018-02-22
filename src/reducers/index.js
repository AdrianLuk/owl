import {combineReducers} from "redux";
import TeamsReducer from './teams-reducer';

const rootReducer = combineReducers({teams: TeamsReducer});

export default rootReducer;