import { createSlice } from '@reduxjs/toolkit';

import { fetchPlayers } from './playersOperations';

const initialState = {
  items: [],
  error: null,
  isLoading: false,
};

const playersSlice = createSlice({
  name: 'players',
  initialState,
  extraReducers: {
    [fetchPlayers.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [fetchPlayers.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },

    [fetchPlayers.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export default playersSlice.reducer;
