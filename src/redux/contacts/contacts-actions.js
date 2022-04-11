import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add');

const contactsActions = { addContact };
export default contactsActions;
