import { combineReducers } from "redux";
import TeamsReducer from "./teams-reducer";
import ActiveTeam from "./active-team-reducer";

const rootReducer = combineReducers({
    teams: TeamsReducer,
    activeTeam: ActiveTeam
});

export default rootReducer;
