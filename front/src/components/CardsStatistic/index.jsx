import { Box, Flex, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import img from '../../assets/Vector.png';
import { buscarTodosPedidos } from "../../services/api";
import { useState, useEffect } from "react";

function CardsStatistic() {

  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    buscarTodosPedidos()
      .then((data) => {
        setPedidos(data);
        console.log("data", data)
        console.log(pedidos);
      })
      .catch((error) => {
        console.error("Erro ao buscar todos os pedidos:", error);
      });
  }, []); 0

  const getQuantidadePedidosErro = (status) => {
    return pedidos.filter(pedido => pedido.status_pedido === status && pedido.status_erro === true).length;
  };


  return (
    <Flex justifyContent="center" marginTop='4rem' >
      <Flex w='1280px' justifyContent='space-arround' color="#1D252F" padding={'16px'}>
        <Box width='100%' margin='auto'>
          <Heading fontStyle="normal" letterSpacing='0.45px' textAlign={['center', 'left']} color='#303030' size="lg" marginBottom='1rem'>
            Estatísticas
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
            <Box minHeight="10vh" boxShadow="base"
              border="1px" borderColor="gray.300" borderRadius="8" padding='5px'>
              <Heading as="h1" size="sm" margin="8px 18px">Produtos Avariados</Heading>
              <Flex alignItems="center" justifyContent={['space-between']} margin="16px 18px">
                <Heading as="h1" fontSize="2xl">13</Heading>
                <Image src={img} width="20px" height="20px" />
              </Flex>
            </Box>

            <Box minHeight="10vh" boxShadow="base"
              border="1px" borderColor="gray.300" borderRadius="8" padding='5px'>
              <Heading as="h1" size="sm" margin="8px 18px">Produtos em Atraso</Heading>
              <Flex alignItems="center" justifyContent={['space-between']} margin="16px 18px">
                <Heading as="h1" fontSize="2xl">42</Heading>
                <Image src={img} width="20px" height="20px" />
              </Flex>
            </Box>


            <Box minHeight="10vh" boxShadow="base"
              border="1px" borderColor="gray.300" borderRadius="8" padding='5px'>
              <Heading as="h1" size="sm" margin="8px 18px">Produtos Fora de Estoque</Heading>
              <Flex alignItems="center" justifyContent={['space-between']} margin="16px 18px">
                <Heading as="h1" fontSize="2xl">27</Heading>
                <Image src={img} width="20px" height="20px" />
              </Flex>
            </Box>


            <Box minHeight="10vh" boxShadow="base"
              border="1px" borderColor="gray.300" borderRadius="8" padding='5px'>
              <Heading as="h1" size="sm" margin="8px 18px">Produtos Devolvidos</Heading>
              <Flex alignItems="center" justifyContent={['space-between']} margin="16px 18px">
                <Heading as="h1" fontSize="2xl">38</Heading>
                <Image src={img} width="20px" height="20px" />
              </Flex>
            </Box>
          </SimpleGrid>

        </Box>
      </Flex>
    </Flex>
  );
}

export default CardsStatistic;
