import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTeamsList } from '../../services/api';

export const fetchTeams = createAsyncThunk('teams/getTeamsList', async () => {
  const teams = await getTeamsList();
  return teams;
});
