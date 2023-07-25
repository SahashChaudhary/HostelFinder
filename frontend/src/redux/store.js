import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger'
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hostelSlice from "./reducers/hostelSlice";
import userSlice from "./reducers/userSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["hostel"],
};
const reducer = combineReducers({
  room: hostelSlice,
  user: userSlice,
});
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export const persistor = persistStore(store);
