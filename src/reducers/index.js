import { combineReducers } from "redux";
import TeamsReducer from "./teams-reducer";
import ActiveTeam from "./active-team-reducer";
import ScheduleReducer from './schedule-reducer';
import MapsReducer from './maps-reducer';

const rootReducer = combineReducers({
    teams: TeamsReducer,
    activeTeam: ActiveTeam,
    schedule: ScheduleReducer,
    maps: MapsReducer
});

export default rootReducer;
