import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReduser from "./contacts/contact.redusers";

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: 'filter',
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReduser)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development'
});
const persistor = persistStore(store);

export { store, persistor };