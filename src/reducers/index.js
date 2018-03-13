import { combineReducers } from "redux";
import TeamsReducer from "./teams-reducer";
import ActiveTeam from "./active-team-reducer";
import ScheduleReducer from './schedule-reducer';

const rootReducer = combineReducers({
    teams: TeamsReducer,
    activeTeam: ActiveTeam,
    schedule: ScheduleReducer
});

export default rootReducer;
