import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Gigs from './pages/Gigs';

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/gigs" element={<Gigs />}></Route>
    </Routes>
  );
};

export default Main;
