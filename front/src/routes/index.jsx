import { Route, Routes, Navigate } from "react-router-dom";
import Pedidos from "../pages/Pedidos";
import Home from "../pages/Home";
import Pedido from "../pages/Pedido";
import Estatisticas from "../pages/Estatisticas";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      {/* <Route path="home" element={<Home />} /> */}
      <Route path="/pedidos" element={<Pedidos />} />
      <Route path="/pedido/:pedidoId" element={<Pedido />} />
      <Route path="estatisticas" element={<Estatisticas />} />
    </Routes>
  );
};

export default AppRoutes;
