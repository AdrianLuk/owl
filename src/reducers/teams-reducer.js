// import _ from "lodash";
import { FETCH_TEAMS } from "../actions/types";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_TEAMS:
            return action.payload.data.competitors;
        default:
            return state;
    }
};
