import { TEAM_SELECTED } from "../actions/types";

//State argument is not application state, only the state this reducer is responsible for
export default function (state = null, action) {
    switch (action.type) {
        case TEAM_SELECTED:
            return action.payload;
    }
    return state;
}