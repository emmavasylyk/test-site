import React from 'react';
import styled from 'styled-components';
import Otpbank from './Images/optbank.jpg';

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
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
`;
const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardSection = styled.div`
  min-height: 150px;
  background: #fff;
  border: 1px solid black;

  box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
    0 6px 6px -1px rgba(8, 11, 14, 0.1);
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;

  &:not(:last-child) {
    margin-right: 15px;
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
      0 16px 16px -1px rgba(8, 11, 14, 0.1);
  }
`;
const InfoSection = styled.div`
  padding: 20px 15px;

  img {
    width: 300px;
    display: block;
  }
  h3 {
    font-size: 20px;
    font-weight: 500;
    line-height: 2;
    color: #2a6279;
  }
  p {
    font-size: 20px;
  }
`;

const DetailsSection = styled.div`
  background-color: #2a6279;
  padding: 40px;
  border-radius: 0px 0px 1rem 1rem;

  button {
    display: block;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    color: #fff;
    background-color: #2a6279;
    margin: 0 auto;
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
    outline: #fff

    &:hover {
      color: #2a6279;
      background-color: #fff;
    }
  }
`;

const CardContainer = () => {
  return (
    <Container>
      <h1>Hello worlds!</h1>
      <CardsWrapper>
        <CardSection>
          <InfoSection>
            <img src={Otpbank} alt="Otpbank logo" />
            <h3>Срочный</h3>
            <p>6,00% в гривне</p>
          </InfoSection>

          <DetailsSection>
            <button type="button">Узнать подробнее</button>
          </DetailsSection>
        </CardSection>
        <CardSection>
          <img src={Otpbank} alt="Otpbank logo" />
          <h3>Срочный</h3>
          <h3>6,00% в гривне</h3>
          <div></div>
        </CardSection>
        <CardSection>
          <img src={Otpbank} alt="Otpbank logo" />
          <h3>Срочный</h3>
          <h3>6,00% в гривне</h3>
          <div></div>
        </CardSection>
      </CardsWrapper>
    </Container>
  );
};
export default CardContainer;
