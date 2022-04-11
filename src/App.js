import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
import 'modern-normalize/modern-normalize.css';
import './App.css';
import styled from 'styled-components';
import backgroundImg from './image/background2.jpg';
import FormContainer from './components/FormContainer';
import CardContainer from './components/CardContainer';

// const HomeView = lazy(() =>
//   import('./views/HomeView.js' /* webpackChunkName: "home-page" */),
// );

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
        </Routes>
      </BrowserRouter>
      {/* <Suspense fallback={<p>Загружаем...</p>}> */}
      {/* <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes> */}
      {/* </Suspense> */}
      {/* <FormContainer /> */}
      {/* <CardContainer /> */}
    </Container>
  );
}
