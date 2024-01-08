import { combineReducers, configureStore } from "@reduxjs/toolkit";
import initloadReducer from './reducers/initloadSlice';
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist';

const rootReducer = combineReducers({
  initload : initloadReducer
})

const persistConfig = {
  key : 'root',
  storage : storageSession
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer : persistedReducer
})

export const persistor = persistStore(store)