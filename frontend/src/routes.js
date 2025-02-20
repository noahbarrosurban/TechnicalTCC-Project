import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Login from "./components/login";
import NavBar from "./components/navbar";
import Equipments from "./components/equipments";
import NewEquipment from "./components/newequipment";
import ViewEquipment from "./components/viewequipment";
import UpdateEquipment from "./components/updateequipment";
import Footer from "./components/footer";

function Layout() {
  const location = useLocation(); 
  const isLoginPage = location.pathname === "/"; 
  return (
    <>
      {!isLoginPage && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/equipamentos" element={<Equipments />} />
        <Route path="/cadastro" element={<NewEquipment />} />
        <Route path="/visualizar/:id" element={<ViewEquipment />} />
        <Route path="/atualizar/:id" element={<UpdateEquipment />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
