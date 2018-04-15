// import _ from "lodash";
import { FETCH_SCHEDULE } from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_SCHEDULE:
            return action.payload.data;
        default:
            return state;
    }
};
