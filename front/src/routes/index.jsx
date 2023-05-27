import { Route, Routes, Navigate } from "react-router-dom";
import Pedidos from "../pages/Pedidos";
import Home from "../pages/Home";
import Pedido from "../pages/Pedido";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Home/>} />  
      <Route path="home" element={<Home/>} />  
      <Route path="/pedidos" element={<Pedidos />} />
      <Route path="/pedido/:pedidoId" element={<Pedido />} />
    </Routes>
  );
};

export default AppRoutes;