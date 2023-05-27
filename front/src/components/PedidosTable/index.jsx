import { Box, chakra } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { buscarTodosPedidos } from "../../services/api";

const PedidosTable = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    buscarTodosPedidos()
      .then((data) => {
        setPedidos(data);
        console.log('data', data)
      })
      .catch((error) => {
        console.error('Erro ao buscar todos os pedidos:', error);
      });
  }, []);


  return (
    <>
      <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={"left"}
          fontSize={"4xl"}
          py={10}
          fontWeight={"bold"}
        >
          Pedidos
        </chakra.h1>
      </Box>
    </>
  );
};

export default PedidosTable;
