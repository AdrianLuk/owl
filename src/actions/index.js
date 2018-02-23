import axios from 'axios';

export const FETCH_TEAMS = 'fetch_teams';

const apiUrl = 'https://api.overwatchleague.com';

export function fetchTeams() {
    const request = axios.get(`${apiUrl}/teams`);
    return { type: FETCH_TEAMS, payload: request };
}

