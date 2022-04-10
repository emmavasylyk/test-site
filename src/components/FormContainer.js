import React, { useState } from 'react';
import styled from 'styled-components';
import numeral from 'numeral';

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
    background: rgba(255, 255, 255, 0.3);
    height: 35px;
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
  background-color: #d8a051;
  border: none;
  color: #fff;
  width: 150px;
  height: 36px;
  font-size: 14px;
  letter-spacing: 0.03em;
  line-height: 36px;
  border-radius: 2px;
  box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
    0 6px 6px -1px rgba(8, 11, 14, 0.1);
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
      0 16px 16px -1px rgba(8, 11, 14, 0.1);
  }
`;

const Error = styled.h4`
  color: red;
  font-size: 13px;
  margin-bottom: 1rem;
`;

const FormContainer = () => {
  const [purchasePrice, setPurchasePrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [loanArp, setLoanArp] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0.0);

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

  const handleDownPayment = e => {
    if (
      e.target.value > purchasePrice * 0.2 &&
      e.target.value < purchasePrice
    ) {
      setDownPayment(e.target.value);
    } else {
      return;
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

  return (
    <Container>
      <h1>Mortgage Calculator</h1>
      <form>
        <InputSection>
          <label>Purchase Price ($)</label>
          <Error>{purchasePrice.error}</Error>
          <input
            onChange={e => {
              setPurchasePrice(e.target.value);
            }}
            type="text"
          />
        </InputSection>
        <InputSection>
          <label>Down Payment ($)</label>
          <Error>{downPayment.error}</Error>
          <input
            placeholder="Please enter at least 20% of purchase price"
            onChange={handleDownPayment}
            // onChange={e => {
            //   setDownPayment(e.target.value);
            // }}
            type="text"
          />
        </InputSection>
        <InputSection>
          <label>Loan Term (years)</label>
          <Error>{loanTerm.error}</Error>
          <input
            onChange={e => {
              setLoanTerm(e.target.value);
            }}
            type="text"
          />
        </InputSection>
        <InputSection>
          <label>APR (%)</label>
          <Error>{loanArp.error}</Error>
          <input
            onChange={e => {
              setLoanArp(e.target.value);
            }}
            type="text"
          />
        </InputSection>
        <SubmitButton onClick={e => submitCalculation(e)}>
          Calculate
        </SubmitButton>
      </form>
      <h3>
        Estimated Monthly Payments: {numeral(monthlyPayment).format('$0,0.00')}
      </h3>
    </Container>
  );
};

export default FormContainer;
