import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import allReducers from './reducers';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducers = persistReducer(persistConfig, allReducers);

export const store = createStore(persistedReducers);
export const persistor = persistStore(store);
