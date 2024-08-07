import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MesRDV from "./MesRDV";
import Register from "./Register";
import Login from "./Login";
import PrendreRDV from "./PrendreRDV";
import MonCompte from "./MonCompte";
import DocteurPage from "./DocteurPage";
import PatientPage from "./PatientPage";
import Edt from "./Edt";
import SideMenu from "./Navigation/Menu_horizontale";
import DialogRDV from "./SC_PrendreRDV/DialogRDV";
import DocteurInfo from "./SC_DocteurPage/Docteurinfo";
import Acceuil from '../Component/Acceuil';
import NotFound from "./NotFound";
import { useUsersContext } from './Context/ContextUser';
import PageAcceuil from "./PageAcceuil";
import Sugestion from "./Sugestion";

export default function Routeur() {
  const { user } = useUsersContext();

  const styleMargin = {
    marginLeft: '200px'
  };

  const mainContentStyle = user.length === 1 ? {} : { marginLeft: '15%' };

  return (
    <div style={{ display: "flex" }}>
      {user.length === 1 ? null : <SideMenu />}
      <div style={mainContentStyle}>
        <Routes>

          <Route path="/" >
            <Route index element={<Acceuil />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/rdv" element={<PrendreRDV />} />
            <Route path="/MonCompte" element={<MonCompte />} />
            <Route path="/DocteurPage" element={<DocteurPage />} />
            <Route path="/DocteurInfo" element={<DocteurInfo />} />
            <Route path="/ConfirmerReservarion" element={<DialogRDV />} />
            <Route path="/PatientPage" element={<PatientPage />} />
            <Route path="/Edt" element={<Edt />} />
            <Route path="/Home" element={<Acceuil />} />
            <Route path="/PageAcceuil" element={<PageAcceuil />} />
            <Route path="/Sugestion" element={<Sugestion />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
