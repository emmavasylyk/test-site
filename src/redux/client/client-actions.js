import { createAction } from '@reduxjs/toolkit';

const addClient = createAction('client/add');

const deleteClient = createAction('client/delete');

const clientsActions = { addClient, deleteClient };
export default clientsActions;
