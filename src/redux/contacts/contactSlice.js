import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const initialContacts = [
  {
    id: 'id-1',
    purchasePrice: 100000,
    downPayment: 10000,
    loanTerm: 5,
    loanArp: 20,
    numberUser: '+38025-459-12-56',
    bank: 'opt',
  },
];

const items = createReducer(initialContacts, {
  [actions.addContact]: (state, { payload }) => {
    console.log('payload', payload);
    console.log('state', state);
    return [...state, payload];
  },
});

export default combineReducers({
  items,
});
