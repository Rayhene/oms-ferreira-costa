import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import PedidosTable from "../../components/PedidosTable";
import { useParams } from "react-router-dom";
import { Flex, Center, Heading } from "@chakra-ui/react";
<<<<<<< HEAD
import Example from "../../components/StatusPedido";
=======
import Observations from "../../components/Observations/index";
>>>>>>> 984abbb93f4da8eaf2f4c728e0fb70800416a848

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
<<<<<<< HEAD
      <Example />
=======

      <Observations />
>>>>>>> 984abbb93f4da8eaf2f4c728e0fb70800416a848
    </>
  );
};

export default Pedido;
