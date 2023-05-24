import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Pedidos from "../pages/Pedidos";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Home/>} />  
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pedidos" element={<Pedidos />} />
    </Routes>
  );
};

export default AppRoutes;