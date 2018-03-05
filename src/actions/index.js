import axios from 'axios';

import { FETCH_TEAMS } from './types';

const apiUrl = 'https://api.overwatchleague.com';

export function fetchTeams() {
    const request = axios.get(`${apiUrl}/teams`);
    return { type: FETCH_TEAMS, payload: request };
}

