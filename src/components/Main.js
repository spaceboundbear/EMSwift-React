import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Maps from '../pages/Maps';
import NewPatient from '../pages/NewPatient';
import ExistingPatient from '../pages/ExistingPatient';

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/home" element={<Home />}></Route>
      <Route exact path="/newpatient" element={<NewPatient />}></Route>
      <Route exact path="/maps" element={<Maps />}></Route>
      <Route
        exact
        path="/existingpatient"
        element={<ExistingPatient />}
      ></Route>
    </Routes>
  );
};

export default Main;
