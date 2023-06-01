import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import PedidosTable from "../../components/PedidosTable";
import { useParams, useNavigate } from "react-router-dom";
import { Flex, Center, Heading, Button, Box } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Example from "../../components/StatusPedido";
import Observations from "../../components/Observations/index";
import ClientInfos from "../../components/ClientInfos";
import BoughtProducts from "../../components/BoughtProducts";

const Pedido = () => {
  const params = useParams();
  const navigateTo = useNavigate();

  const handleBackButton = () => {
    navigateTo("/pedidos");
  }

  return (
    <>
      <Navbar />
      <Flex p={10} align="center">
        <Button onClick={handleBackButton} bg="transparent" px="2" mr="5"><ArrowBackIcon boxSize={6}/></Button>
        <Heading as="h1" size="lg">
          Pedido n°{params.pedidoId}
          
        </Heading>
      </Flex>

      <Flex w="100vw">
        <Box h="100vh" pr="3px">
          <ClientInfos></ClientInfos>
          
          <BoughtProducts />

          <Observations />
        </Box>
        <Box pl="3px">
          <Example />
          { /* metodo de pagamento vem aqui */ }
        </Box>
      </Flex>

    </>
  );
};

export default Pedido;
