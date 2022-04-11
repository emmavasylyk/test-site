import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import numeral from 'numeral';
import { useLocaleStorage } from '../hooks/useLocaleStorage';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import contactsActions from '../redux/contacts/contacts-actions';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0;
  max-width: 900px;
  margin: auto;

  h1 {
    font-size: 35px;
    font-weight: 500;
    color: #2a6279;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
`;

const InputSection = styled.div`
  width: 45%;
  min-width: 350px;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  lable {
    text-transform: uppercase;
    font-weight: 400;
    color: gray;
    margin-bottom: 0.5rem;
  }

  input {
    background: rgba(255, 255, 255, 0.6);
    height: 48px;
    border: none;
    border-radius: 1rem;
    padding: 0 1rem;
    color: #2a6279;
    font-weight: 500;
    box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
      0 6px 6px -1px rgba(8, 11, 14, 0.1);
    transition: all 0.3s ease-in-out;

    &:hover,
    &:focus {
      box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
        0 16px 16px -1px rgba(8, 11, 14, 0.1);
    }
  }
`;

const SubmitButton = styled.button`
display: block;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0 auto;
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
    outline: #fff;
    width: 200px;
    height: 68px;
    box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
      0 6px 6px -1px rgba(8, 11, 14, 0.1);
    transition: all 0.3s ease-in-out;
    border: none;
    color: #fff;
      background-color: #d8a051;

    &:hover,
    &:focus {
      color: #2a6279;
    background-color: #fff;
    border: 1px solid #d8a051
    }
  }
`;

const Error = styled.h4`
  color: red;
  font-size: 13px;
  margin-bottom: 1rem;
`;

const PaymentsSection = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    margin-top: 3rem;
    background: #fff;
    padding: 3rem;
    color: #2a6279;
    box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
      0 6px 6px -1px rgba(8, 11, 14, 0.1);
    border-radius: 1rem;
  }
`;

const FormContactSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 35px;

  div {
    margin-right: 25px;
  }

  button {
    display: block;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0 auto;
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
    outline: #fff;
    width: 200px;
    height: 68px;
    box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
      0 6px 6px -1px rgba(8, 11, 14, 0.1);
    transition: all 0.3s ease-in-out;
    border: none;
    color: #fff;
    background-color: #d8a051;

    &:hover,
    &:focus {
      color: #2a6279;
      background-color: #fff;
      border: 1px solid #d8a051;
    }
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    color: #2a6279;
  }

  input {
    height: 68px;
    font-size: 25px;
    width: 450px;
    padding: 15px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.6);
    border: none;
    color: #2a6279;
    font-weight: 500;
    box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
      0 6px 6px -1px rgba(8, 11, 14, 0.1);
    transition: all 0.3s ease-in-out;
  }
`;

const FormContainer = () => {
  // const [purchasePrice, setPurchasePrice] = useState('');
  const [purchasePrice, setPurchasePrice] = useLocaleStorage(
    'purchasePrice',
    '',
  );
  const [downPayment, setDownPayment] = useLocaleStorage('downPayment', '');
  const [loanTerm, setLoanTerm] = useLocaleStorage('loanTerm', '');
  const [loanArp, setLoanArp] = useLocaleStorage('loanArp', '');
  const [monthlyPayment, setMonthlyPayment] = useLocaleStorage(
    'monthlyPayment',
    0.0,
  );
  const [numberUser, setNumberUser] = useLocaleStorage('numberUser', '');
  const [bank, setBank] = useLocaleStorage('bank', '');
  const dispatch = useDispatch();
  const location = useLocation();

  let path = location.pathname.split('/');

  const submitCalculation = async e => {
    e.preventDefault();
    const validatedPrice = await validateField(purchasePrice, setPurchasePrice);
    const validatedPayment = await validateField(downPayment, setDownPayment);
    const validatedLoanTerm = await validateField(loanTerm, setLoanTerm);
    const validatiedLoanArp = await validateField(loanArp, setLoanArp);

    if (
      validatedPrice &&
      validatedPayment &&
      validatedLoanTerm &&
      validatiedLoanArp
    ) {
      calculateValues();
    }
  };

  // const handleDownPayment = e => {
  //   if (
  //     e.target.value > purchasePrice * 0.2 &&
  //     e.target.value < purchasePrice
  //   ) {
  //     setDownPayment(e.target.value);
  //   } else {
  //     return;
  //   }
  // };

  const calculateValues = () => {
    let borrow = purchasePrice - downPayment;
    let monthlyInterestRate = loanArp / 100 / 12;
    let numberOfPayment = loanTerm * 12;
    let mounthlyPrice =
      (borrow *
        [monthlyInterestRate * (1 + monthlyInterestRate) ** numberOfPayment]) /
      [(1 + monthlyInterestRate) ** numberOfPayment - 1];
    setMonthlyPayment(mounthlyPrice);
  };

  const validateField = (field, setValue) => {
    let int = parseFloat(field);

    if (field === '' || field === 0) {
      setValue({ ...field.values, error: 'Please enter a value' });
      return false;
    } else if (isNaN(int)) {
      setValue({ ...field.values, error: 'Please enter a number' });
      return false;
    } else {
      setValue(int);
      return true;
    }
  };

  const hundleChange = e => {
    const { name, value } = e.currentTarget;
    console.log('name', name);

    switch (name) {
      case 'purchasePrice':
        setPurchasePrice(value);
        break;

      case 'downPayment':
        setDownPayment(value);
        break;

      case 'loanTerm':
        setLoanTerm(value);
        break;

      case 'loanArp':
        setLoanArp(value);
        break;

      case 'numberUser':
        setNumberUser(value);
        break;

      default:
        return;
    }
  };

  const hundleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      purchasePrice,
      downPayment,
      loanTerm,
      loanArp,
      numberUser,
      bank: path[2],
    };
    dispatch(contactsActions.addContact(contact));
    reset();
  };

  const reset = () => {
    setPurchasePrice(' ');
    setDownPayment(' ');
    setLoanTerm(' ');
    setLoanArp(' ');
    setMonthlyPayment(0.0);
    setNumberUser(' ');
    document.getElementById('form').reset();
  };

  console.log('bank', bank);

  return (
    <Container>
      <h1>Mortgage Calculator {path[2]}</h1>
      <form id="form" onSubmit={hundleSubmit}>
        <InputSection>
          <label>Purchase Price ($)</label>
          <Error>{purchasePrice.error}</Error>
          <input name="purchasePrice" onChange={hundleChange} type="text" />
        </InputSection>
        <InputSection>
          <label>Down Payment ($)</label>
          <Error>{downPayment.error}</Error>
          <input
            placeholder="Please enter at least 20% of purchase price"
            name="downPayment"
            onChange={hundleChange}
            type="text"
          />
        </InputSection>
        <InputSection>
          <label>Loan Term (years)</label>
          <Error>{loanTerm.error}</Error>
          <input name="loanTerm" onChange={hundleChange} type="text" />
        </InputSection>
        <InputSection>
          <label>APR (%)</label>
          <Error>{loanArp.error}</Error>
          <input name="loanArp" onChange={hundleChange} type="text" />
        </InputSection>
        <SubmitButton onClick={e => submitCalculation(e)}>
          Calculate
        </SubmitButton>
        <PaymentsSection>
          <h3>
            Estimated Monthly Payments:{' '}
            {numeral(monthlyPayment).format('$0,0.00')}
          </h3>
        </PaymentsSection>
        <FormContactSection>
          <div>
            <h3>Введіть номер свого мобільного телефону для консультації</h3>
            <input
              name="numberUser"
              onChange={hundleChange}
              type="tel"
              placeholder="+38(011)-111-11-11"
            />
          </div>
          <button type="submit">Відправити</button>
        </FormContactSection>
      </form>
    </Container>
  );
};

export default FormContainer;
