import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTeamsList } from '../../services/api';

export const fetchTeams = createAsyncThunk(
  'teams/getTeamsList',
  async ({ page, per_page }) => {
    const teams = await getTeamsList({ page, per_page });
    return teams;
  }
);
