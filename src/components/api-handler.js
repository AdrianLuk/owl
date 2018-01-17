import axios from 'axios';

const apiUrl = 'api.overwatchleague.com';

export function fetchTeams(team_id) {
    return new Promise((resolve, reject) => {
        let teams_url = `${apiUrl}/teams/${team_id}`;
        axios.get(teams_url).then(data => resolve(data)).catch(err => reject(err));
    })
}