import _ from 'lodash';
import {FETCH_TEAMS} from "../actions";

export default(state = {}, action) => {
    switch (action.type) {
        case FETCH_TEAMS:
            return _.mapKeys(action.payload.data.competitors, 'competitor.id');
        default:
            return state;
    }
};