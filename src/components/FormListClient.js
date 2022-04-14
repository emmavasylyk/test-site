import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleClient } from '../redux/client/client-selectors';
import clientsActions from '../redux/client/client-actions';
import { ImBin } from 'react-icons/im';
import styled from 'styled-components';

const Container = styled.div`
  width: 900px;
  background-color: #fff;
  box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 3%), 0 2px 5.3px rgb(0 0 0 / 5%),
    0 2px 10px rgb(0 0 0 / 6%), 0 2px 17.9px rgb(0 0 0 / 7%),
    0 2px 33.4px rgb(0 0 0 / 9%), 0 2px 80px rgb(0 0 0 / 12%);
`;

const ListHeader = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  height: 48px;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background-color: #d8a051;
`;

const ListBody = styled.ul`

  li {
    display: flex;
    justify-content: space-around;
    height: 40px;
    align-items: center;
    color: #2a6279;
  }
  .purchasePrice {
    width: 100px;
    margin-left: 48px;
  }
  .downPayment {
    width: 100px;
    margin-left: 46px;
}
  }
  .loanTerm {
    width: 100px;
    margin-left: 34px;
  }
  .loanArp {
    width: 72px;
  }
  li:nth-child(even) {
    background: #e7e7e7;
  }

  button {
    display: block;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: none;
    color: #d8a051;

    &:hover,
    &:focus {
      color: #2a6279;
    }
  }
`;

const FormListClient = () => {
  const clients = useSelector(getVisibleClient);
  const dispatch = useDispatch();
  const onDeleteClient = id => dispatch(clientsActions.deleteClient(id));

  return (
    <Container>
      <ListHeader>
        <li>Purchase Price</li>
        <li>Down Payment</li>
        <li>Loan Term</li>
        <li>Loan Arp</li>
        <li>Bank</li>
        <li></li>
      </ListHeader>
      <ListBody>
        {clients.map(
          ({ id, purchasePrice, downPayment, loanTerm, loanArp, bankName }) => (
            <li key={id}>
              <div className="purchasePrice">{purchasePrice}</div>
              <div className="downPayment">{downPayment}</div>
              <div className="loanTerm">{loanTerm}</div>
              <div className="loanArp">{loanArp}</div>
              <div className="bankName">{bankName}</div>
              <button type="button" onClick={() => onDeleteClient(id)}>
                <ImBin />
              </button>
            </li>
          ),
        )}
      </ListBody>
    </Container>
  );
};

export default FormListClient;
