import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/navbar";
import Equipments from "./components/equipments";
import NewEquipment from "./components/newequipment";
import ViewEquipment from "./components/viewequipment";
import UpdateEquipment from "./components/updateequipment";
import Footer from "./components/footer";

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Equipments />} />
        <Route path="/cadastro" element={<NewEquipment />} />
        <Route path="/visualizar" element={<ViewEquipment />} />
        <Route path="/atualizar" element={<UpdateEquipment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}