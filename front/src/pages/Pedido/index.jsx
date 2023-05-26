import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import PedidosTable from "../../components/PedidosTable";
import { useParams } from "react-router-dom";
import { Flex, Center, Heading } from "@chakra-ui/react";

const Pedido = () => {
  const params = useParams();

  return (
    <>
      <Navbar />
      <Flex p={10}>
          <Heading as="h1" size="xl">
            Pedido {params.pedidoId}
          </Heading>
          
      </Flex>
    </>
  );
};

export default Pedido;