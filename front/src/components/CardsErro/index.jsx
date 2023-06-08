import { Box, Flex, Heading, Image } from '@chakra-ui/react';
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
    <Flex justifyContent="center" marginTop='4rem'>
      <Flex w='1280px' justifyContent='space-arround' padding='1rem' color="#1D252F">
        <Box width='100%' margin='auto'>
          <Heading fontStyle="normal" letterSpacing='0.45px' textAlign={['center', 'left']} color='#303030' size="lg" marginBottom='1rem'>
            Erros no Sistema
          </Heading>

          <Flex justifyContent={['space-between']} gap='1rem' flexWrap='wrap'>
            <Box minHeight="10vh" width={['100%', '32vh']} border='1.10733px solid rgba(158, 158, 158, 0.7)' borderRadius='6.23432px' padding='5px'>
              <Heading as="h1" size="sm" margin="8px 18px">Anti-Fraude</Heading>
              <Flex alignItems="center" justifyContent={['space-between']} margin="16px 18px">
                <Heading as="h1" fontSize="2xl">{getQuantidadePedidosErro("ANTIFRAUDE")}</Heading>
                <Image src={img} width="20px" height="20px" />
              </Flex>
            </Box>

            <Box minHeight="10vh" width={['100%', '32vh']} border='1.10733px solid rgba(158, 158, 158, 0.7)' borderRadius='6.23432px' padding='5px'>
              <Heading as="h1" size="sm" margin="8px 18px">Captura</Heading>
              <Flex alignItems="center" justifyContent={['space-between']} margin="16px 18px">
                <Heading as="h1" fontSize="2xl">{getQuantidadePedidosErro("CAPTURA")}</Heading>
                <Image src={img} width="20px" height="20px" />
              </Flex>
            </Box>


            <Box minHeight="10vh" width={['100%', '32vh']} border='1.10733px solid rgba(158, 158, 158, 0.7)' borderRadius='6.23432px' padding='5px'>
              <Heading as="h1" size="sm" margin="8px 18px">Carrinho</Heading>
              <Flex alignItems="center" justifyContent={['space-between']} margin="16px 18px">
                <Heading as="h1" fontSize="2xl">{getQuantidadePedidosErro("FATURADO")}</Heading>
                <Image src={img} width="20px" height="20px" />
              </Flex>
            </Box>


            <Box minHeight="10vh" width={['100%', '32vh']} border='1.10733px solid rgba(158, 158, 158, 0.7)' borderRadius='6.23432px' padding='5px'>
              <Heading as="h1" size="sm" margin="8px 18px">Picking</Heading>
              <Flex alignItems="center" justifyContent={['space-between']} margin="16px 18px">
                <Heading as="h1" fontSize="2xl">{getQuantidadePedidosErro("PICKING")}</Heading>
                <Image src={img} width="20px" height="20px" />
              </Flex>
            </Box>

          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

export default CardsErro;
