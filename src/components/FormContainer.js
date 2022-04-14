import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import numeral from 'numeral';
import { useLocaleStorage } from '../hooks/useLocaleStorage';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import clientsActions from '../redux/client/client-actions';
import { ImArrowLeft } from 'react-icons/im';
import FormListClient from './FormListClient';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 900px;
  margin: auto;

  button.button-goback {
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0 auto;
    padding: 12px;
    border-radius: 5px;
    cursor: pointer;
    width: 200px;
    height: 50px;
    box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
      0 6px 6px -1px rgba(8, 11, 14, 0.1);
    transition: all 0.3s ease-in-out;
    border: none;

      .button-goback-icon{
        margin-right: 15px;
  }

    &:hover,
    &:focus {
      color: #2a6279;
      background-color: #fff;
    }
  }  
  }

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
    margin-bottom: 60px;
  }
  .text-select{
    margin-bottom:15px;
  }
  select{
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
  .wrapper-input{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
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
    padding: 12px;
    border-radius: 5px;
    cursor: pointer;
    outline: #fff;
    width: 200px;
    height: 50px;
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
  margin-top: 2rem;

  h3 {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    margin-top: 3rem;
    background: #fff;
    padding: 1rem;
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
    padding: 12px;
    border-radius: 5px;
    cursor: pointer;
    outline: #fff;
    width: 200px;
    height: 50px;
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
    height: 50px;
    font-size: 25px;
    width: 450px;
    padding: 12px;
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const banks = ['', 'Otpbank', 'Privat 24', 'Raiffeisen'];
  const [bankName, setBankName] = useLocaleStorage('bankName', '');

  const options = banks.map((bank, index) => {
    return (
      <option key={index} value={bank}>
        {bank}
      </option>
    );
  });

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

      case 'bankName':
        setBankName(value);
        break;

      default:
        return;
    }
  };

  const hundleSubmit = e => {
    e.preventDefault();
    const client = {
      id: nanoid(),
      purchasePrice,
      downPayment,
      loanTerm,
      loanArp,
      numberUser,
      bankName,
    };
    dispatch(clientsActions.addClient(client));
    reset();
  };

  const reset = () => {
    setPurchasePrice(' ');
    setDownPayment(' ');
    setLoanTerm(' ');
    setLoanArp(' ');
    setMonthlyPayment(0.0);
    setBankName(' ');
    setNumberUser(' ');
    document.getElementById('form').reset();
  };

  return (
    <Container>
      <button
        className="button-goback"
        type="button"
        onClick={() => navigate(-1)}
      >
        <ImArrowLeft className="button-goback-icon" />
        Go back
      </button>
      <h1>Mortgage Calculator</h1>
      <form id="form" onSubmit={hundleSubmit}>
        <div>
          <p className="text-select">Choose bank: {banks[bankName]}</p>
          <select value={bankName} name="bankName" onChange={hundleChange}>
            {options}
          </select>
        </div>
        <div className="wrapper-input">
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

          <PaymentsSection>
            <SubmitButton onClick={e => submitCalculation(e)}>
              Calculate
            </SubmitButton>
            <h3>
              Estimated Monthly Payments:{' '}
              {numeral(monthlyPayment).format('$0,0.00')}
            </h3>
          </PaymentsSection>
        </div>
        <FormContactSection>
          {/* <div>
            <h3>Enter your phone number for consultation</h3>
            <input
              name="numberUser"
              onChange={hundleChange}
              type="tel"
              placeholder="+38(011)-111-11-11"
            />
          </div> */}
          <button type="submit">Send</button>
        </FormContactSection>
      </form>
      <FormListClient />
    </Container>
  );
};

export default FormContainer;
