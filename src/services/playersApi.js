import axios from 'axios';
axios.defaults.baseURL = `https://app.sportdataapi.com/api/v1`;

export async function getPlayersList() {
  const { data } = await axios.get(
    `/soccer/players?apikey=5ce181e0-487d-11ec-9ed5-97aa219c9a27&country_id=48&max_age=19`
  );

  return data.data;
}
