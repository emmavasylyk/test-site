import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts';
import s from './Filter.module.css';
import contactsActions from '../../redux/contacts';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.LableFilter}>
      Find contacts by name
      <input
        className={s.InputFilter}
        placeholder="Ivan Petrov"
        type="text"
        value={value}
        onChange={e => {
          dispatch(contactsActions.changeFilter(e.target.value));
        }}
      />
    </label>
  );
};

export default Filter;
