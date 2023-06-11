import { Box, Flex, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import img from '../../assets/Vector.png';
import useSWR from 'swr';
import { buscarTodosPedidos } from "../../services/api";

function CardsErro() {
  const { data: pedidos, error } = useSWR("/api/pedidos", buscarTodosPedidos);

  const getQuantidadePedidosErro = (status) => {
    if (pedidos && pedidos.length > 0) {
      return pedidos.filter(pedido => pedido.status_pedido === status && pedido.status_erro === true).length;
    }
    return 0;
  };

  return (
    <Flex justifyContent="center" marginTop='4rem' >
      <Flex w='1280px' justifyContent='space-arround' color="#1D252F" padding={'16px'}>
        <Box width='100%' margin='auto'>
          <Heading fontStyle="normal" letterSpacing='0.45px' textAlign={['center', 'left']} fontWeight= 'bold' size="xl" marginBottom='2rem'>
            Erros no Sistema
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
            <Box minHeight="10vh" boxShadow="base"
              border="1px" borderColor="gray.300" borderRadius="8" padding='5px'>
              <Heading as="h1" size="sm" margin="8px 18px">Anti-Fraude</Heading>
              <Flex alignItems="center" justifyContent={['space-between']} margin="16px 18px">
                <Heading as="h1" fontSize="2xl">{getQuantidadePedidosErro("ANTIFRAUDE")}</Heading>
                <Image src={img} width="20px" height="20px" />
              </Flex>
            </Box>

            <Box minHeight="10vh" boxShadow="base"
              border="1px" borderColor="gray.300" borderRadius="8" padding='5px'>
              <Heading as="h1" size="sm" margin="8px 18px">Captura</Heading>
              <Flex alignItems="center" justifyContent={['space-between']} margin="16px 18px">
                <Heading as="h1" fontSize="2xl">{getQuantidadePedidosErro("CAPTURA")}</Heading>
                <Image src={img} width="20px" height="20px" />
              </Flex>
            </Box>

            <Box minHeight="10vh" boxShadow="base"
              border="1px" borderColor="gray.300" borderRadius="8" padding='5px'>
              <Heading as="h1" size="sm" margin="8px 18px">Carrinho</Heading>
              <Flex alignItems="center" justifyContent={['space-between']} margin="16px 18px">
                <Heading as="h1" fontSize="2xl">{getQuantidadePedidosErro("FATURADO")}</Heading>
                <Image src={img} width="20px" height="20px" />
              </Flex>
            </Box>

            <Box minHeight="10vh" boxShadow="base"
              border="1px" borderColor="gray.300" borderRadius="8" padding='5px'>
              <Heading as="h1" size="sm" margin="8px 18px">Picking</Heading>
              <Flex alignItems="center" justifyContent={['space-between']} margin="16px 18px">
                <Heading as="h1" fontSize="2xl">{getQuantidadePedidosErro("PICKING")}</Heading>
                <Image src={img} width="20px" height="20px" />
              </Flex>
            </Box>
          </SimpleGrid>

        </Box>
      </Flex>
    </Flex>
  );
}

export default CardsErro;
