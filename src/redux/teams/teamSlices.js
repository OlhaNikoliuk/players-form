import { createSlice } from '@reduxjs/toolkit';

import { fetchTeams } from './teamsOperations';

const initialState = {
  items: [],
  error: null,
  isLoading: false,
};

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  extraReducers: {
    [fetchTeams.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [fetchTeams.fulfilled]: (state, { payload }) => {
      state.items = [...state.items, ...payload];
      state.isLoading = false;
    },

    [fetchTeams.rejected]: (state, action) => {
      console.log(action);
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
  reducers: {
    addTeam: (state, { payload }) => {
      console.log(payload);
      state.items = [payload, ...state.items];
    },
  },
});
const { actions } = teamsSlice;

export const { addTeam } = actions;

export default teamsSlice.reducer;
