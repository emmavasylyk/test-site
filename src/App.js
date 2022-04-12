import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
import './App.css';
import styled from 'styled-components';
import backgroundImg from './image/background.jpg';
import FormContainer from './components/FormContainer';
import CardContainer from './components/CardContainer';
import FormListClient from './components/FormListClient';

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardContainer />} />
          <Route path="calculator/*" element={<FormContainer />} />
          <Route path="list" element={<FormListClient />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
