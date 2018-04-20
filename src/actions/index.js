import axios from "axios";

import { FETCH_TEAMS, TEAM_SELECTED, FETCH_SCHEDULE, FETCH_MAPS } from "./types";

const apiUrl = "https://api.overwatchleague.com";

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

export function fetchSchedule() {
    const request = axios.get(`${apiUrl}/schedule`);
    return {
        type: FETCH_SCHEDULE,
        payload: request
    };
    // console.log(request);
}

export function fetchMaps() {
    const request = axios.get(`${apiUrl}/maps`);
    return {
        type: FETCH_MAPS,
        payload: request
    };
}