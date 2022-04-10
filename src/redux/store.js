import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsReducer } from './users/usersSlice';
import { filterReducer } from './users/usersSlice';
import { contactApi } from './contacts/contactSlice';

export const store = configureStore({
  reducer: {
    contact: contactsReducer,
    filter: filterReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

setupListeners(store.dispatch);
