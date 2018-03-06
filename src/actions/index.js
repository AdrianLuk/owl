import axios from 'axios';

import { FETCH_TEAMS, TEAM_SELECTED } from './types';

const apiUrl = 'https://api.overwatchleague.com';

export function fetchTeams() {
    const request = axios.get(`${apiUrl}/teams`);
    return { type: FETCH_TEAMS, payload: request };
}

export function selectTeam(activeteam) {
    return {
        type: TEAM_SELECTED,
        payload: activeteam
    };
    // console.log(activeteam.competitor.name)
}