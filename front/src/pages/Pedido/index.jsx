import Navbar from "../../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { Flex, Heading, Button, Box } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Example from "../../components/StatusPedido";
import Observations from "../../components/Observations/index";
import Pricing from "../../components/metodo_de_pagamento/index";
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
      
      <Flex w={'1280px'} margin={'auto'} direction={'column'}>
      <Navbar />
        <Flex py={10} align="center" w={'100%'}>
          <Button onClick={handleBackButton} bg="transparent" px="2"><ArrowBackIcon boxSize={6}/></Button>
          <Heading as="h1" size="lg">
            Pedido n° {params.pedidoId}

          </Heading>
        </Flex >

        <Flex justify={'space-between'} gap={'2%'}>

          <Box width={'75%'}>
            <ClientInfos></ClientInfos>
            <BoughtProducts />
            <Observations />
          </Box>

          <Box width={'25%'}>
            <Example />
            <Pricing />
          </Box>

        </Flex>
      </Flex>
      

    </>
  );
};

export default Pedido;
