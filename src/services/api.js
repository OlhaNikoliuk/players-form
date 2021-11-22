import axios from 'axios';
axios.defaults.baseURL = `https://www.balldontlie.io/api/v1`;

export async function getTeamsList() {
  const { data } = await axios.get(`/teams`);
  return data.data;
}

export async function getPlayersList() {
  const { data } = await axios.get(`/players`);
  return data.data;
}
