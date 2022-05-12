import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExistingPatients from '../pages/ExistingPatient';

import Home from '../pages/Home';
import Maps from '../pages/Maps';
import NewPatient from '../pages/NewPatient';

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/home" element={<Home />}></Route>
      <Route exact path="/newpatient" element={<NewPatient />}></Route>
      <Route exact path="/maps" element={<Maps />}></Route>
      <Route
        exact
        path="existingpatients"
        element={<ExistingPatients />}
      ></Route>
    </Routes>
  );
};

export default Main;
