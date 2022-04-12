import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './client-actions';

const initialClient = [
  {
    id: 'id-1',
    purchasePrice: 100000,
    downPayment: 10000,
    loanTerm: 5,
    loanArp: 20,
    numberUser: '+38025-459-12-56',
    bankName: 'opt',
  },
];

const items = createReducer(initialClient, {
  [actions.addClient]: (state, { payload }) => {
    return [...state, payload];
  },
});

export default combineReducers({
  items,
});
