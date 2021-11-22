import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPlayersList } from '../../services/api';
// import toast from 'react-hot-toast';

export const fetchPlayers = createAsyncThunk(
  'players/getPlayersList',
  async () => {
    const players = await getPlayersList();
    return players;
  }
);
