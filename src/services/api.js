import axios from 'axios';
axios.defaults.baseURL = `https://www.balldontlie.io/api/v1`;

export async function getTeamsList({ page, per_page }) {
  const { data } = await axios.get(`/teams?page=${page}&per_page=${per_page}`);
  return data.data;
}

export async function getPlayersList(page, per_page) {
  const { data } = await axios.get(
    `/players?page=${page}&per_page=${per_page}`
  );
  return data.data;
}
