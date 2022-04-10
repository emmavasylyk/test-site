import React from 'react';
import 'modern-normalize/modern-normalize.css';
import './App.css';
import styled from 'styled-components';
import backgroundImg from './image/background.jpg';
import FormContainer from './components/FormContainer';
import CardContainer from './components/CardContainer';

const Container = styled.div`
  background: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  padding: 2rem 0;
  width: 100vw;
  height: 100vh;
`;

export default function App() {
  return (
    <Container>
      <FormContainer />
      <CardContainer />
    </Container>
  );
}
