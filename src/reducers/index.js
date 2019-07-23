import { combineReducers } from "redux";
import TeamsReducer from "./teams-reducer";
import ActiveTeam from "./active-team-reducer";
import ScheduleReducer from "./schedule-reducer";
import MapsReducer from "./maps-reducer";
import NewsReducer from "./news-reducer";
import VideosReducer from "./videos-reducer";
import PlayersReducer from "./players-reducer";

const rootReducer = combineReducers({
    teams: TeamsReducer,
    activeTeam: ActiveTeam,
    schedule: ScheduleReducer,
    maps: MapsReducer,
    news: NewsReducer,
    videos: VideosReducer,
    players: PlayersReducer
});

export default rootReducer;
