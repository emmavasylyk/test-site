import { createSlice, createReducer } from '@reduxjs/toolkit';
import actions from '../contacts/contacts-actions';

const initialState = {
  entities: [],
};

export const contactsSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addContact(state, action) {
      state.entities.push(action.payload);
    },
    deleteContact(state, action) {
      state.entities = state.entities.filter(
        contact => contact.id !== action.payload,
      );
    },
  },
});

export const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsSelector = state => state.users.entities;
export const contactsReducer = contactsSlice.reducer;
