import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('contacts/changeFilter');

const contactsActions = { changeFilter };
export default contactsActions;
