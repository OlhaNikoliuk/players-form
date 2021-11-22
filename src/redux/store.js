import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import teamsReducer from './teams/teamSlices';
// import playersReducer from './players/playersSlices';

const teamsPersistConfig = {
  key: 'teams',
  storage,
};
// const playersPersistConfig = {
//   key: 'teams',
//   storage,
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

const rootReducer = combineReducers({
  teams: persistReducer(teamsPersistConfig, teamsReducer),
  // players: persistReducer(playersPersistConfig, playersReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
