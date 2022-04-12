import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleClient } from '../redux/client/client-selectors';
// import contactsActions from '../../redux/contacts/contacts-actions';
// import { ImBin } from 'react-icons/im';
// import s from './ContactList.module.css';
import FormItemClient from './FormItemClient';
import styled from 'styled-components';

const Container = styled.table`
  margin: 25px auto;
  width: 700px;
  background-color: #fff;
  box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 3%), 0 2px 5.3px rgb(0 0 0 / 5%),
    0 2px 10px rgb(0 0 0 / 6%), 0 2px 17.9px rgb(0 0 0 / 7%),
    0 2px 33.4px rgb(0 0 0 / 9%), 0 2px 80px rgb(0 0 0 / 12%);
`;

const TableHeader = styled.tr`
  background: #adeae5;

  th {
    text-align: center;
    padding: 10px;
  }
  .item:nth-child(even) {
    background: red;
  }
`;

const FormListClient = () => {
  const clients = useSelector(getVisibleClient);
  //   const dispatch = useDispatch();
  //   const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <Container>
      <thead>
        <TableHeader>
          <th>Bank</th>
          <th>Purchase Price ($)</th>
          <th>Down Payment($)</th>
          <th>Loan Term (years)</th>
          <th>Loan Arp (%)</th>
        </TableHeader>
      </thead>
      <tbody>
        {clients.map(
          ({ id, purchasePrice, downPayment, loanTerm, loanArp, bankName }) => (
            <tr key={id} className="item">
              <FormItemClient
                bankName={bankName}
                purchasePrice={purchasePrice}
                downPayment={downPayment}
                loanTerm={loanTerm}
                loanArp={loanArp}
              />
            </tr>
          ),
        )}
      </tbody>
    </Container>
    // <ul>
    //   {clients.map(
    //     ({ id, purchasePrice, downPayment, loanTerm, loanArp, bankName }) => (
    //       <li key={id}>
    //         <p>
    //           purchasePrice: {purchasePrice} downPayment: {downPayment}
    //           loanTerm: {loanTerm} loanArp: {loanArp} bankName: {bankName}
    //         </p>
    //         <button
    //         className={s.ContactListButton}
    //         type="button"
    //         onClick={() => onDeleteContact(id)}
    //       >
    //         <ImBin className={s.ContactListButtonIcon} />
    //         Delete
    //       </button>
    //       </li>
    //     ),
    //   )}
    // </ul>
  );
};

export default FormListClient;
