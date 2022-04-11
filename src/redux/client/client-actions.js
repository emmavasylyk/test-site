import { createAction } from '@reduxjs/toolkit';

const addClient = createAction('client/add');

const clientsActions = { addClient };
export default clientsActions;
