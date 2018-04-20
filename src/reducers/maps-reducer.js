import { FETCH_MAPS } from "../actions/types";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_MAPS:
            return action.payload.data;
        default:
            return state;
    }
};