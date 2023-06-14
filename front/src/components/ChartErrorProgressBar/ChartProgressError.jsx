import { Box, Flex, Stack, Progress, Text } from '@chakra-ui/react';
import useSWR from 'swr';
import { buscarTodosPedidos } from '../../services/api';

export const ChartProgressError = () => {
  const { data: pedidos, error } = useSWR("/api/pedidos", buscarTodosPedidos);

  if (error) {
    console.error("Erro ao buscar todos os pedidos:", error);
  }

  const calcularPorcentagem = (status) => {
    if (!pedidos) {
      return {
        porcentagemProblemasResolvidos: 0,
        porcentagemStatusErro: 0
      }
    }
    const totalPedidos = pedidos.filter(pedido => pedido.problemaResolvido === true && pedido.status_pedido === status
      || pedido.status_erro === true && pedido.status_pedido === status).length;
    const problemasResolvidos = pedidos.filter(pedido => pedido.problemaResolvido && pedido.status_pedido === status).length;
    const statusErro = pedidos.filter(pedido => pedido.status_erro && pedido.status_pedido === status).length;

    const porcentagemProblemasResolvidos = ((problemasResolvidos / totalPedidos) * 100).toFixed(0);
    const porcentagemStatusErro = ((statusErro / totalPedidos) * 100).toFixed(0);

    return {
      porcentagemProblemasResolvidos,
      porcentagemStatusErro
    };
  }

  return (

    <Flex justifyContent="flex-end">
      <Box boxShadow="base" border="1px" borderColor="gray.300" borderRadius="8" w='100%' height={546} marginLeft="auto" minH='610px'>
        <Flex direction="column" height="100%" paddingLeft={4} paddingTop={6} paddingBottom={2}>
          <Text as="h1" fontWeight="bold" fontSize={30} textAlign="left" marginBottom={2}>
            Problemas resolvidos
          </Text>
          <Flex justifyContent="center" alignItems="center" height="100%">
            <Stack w='100%' spacing={15} marginRight={3}>
              <Box >
                <Text as="h3" fontSize={19} textAlign="left" marginBottom={2}>
                  Antifraude
                </Text>
                <Progress colorScheme="yellow" w='100%' height="20px" borderRadius={20} value={calcularPorcentagem("ANTIFRAUDE").porcentagemProblemasResolvidos}>
                  <Box width={`${20}%`} bg="#E3A400" height="100%" />
                </Progress>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Text as="p" fontWeight="bold" fontSize={17} textAlign="left" marginTop={2} marginLeft={2}>
                    {calcularPorcentagem("ANTIFRAUDE").porcentagemProblemasResolvidos}%
                  </Text>
                </Box>
              </Box>
              <Box>
                <Text as="h3" fontSize={19} textAlign="left" marginBottom={2}>
                  Carrinho
                </Text>
                <Progress colorScheme="blue" w='100%' height="20px" borderRadius={20} value={calcularPorcentagem("SINCRONIZACAO").porcentagemProblemasResolvidos}>
                  <Box width={`${20}%`} bg="#00B2FF" height="100%" />
                </Progress>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Text as="p" fontWeight="bold" fontSize={17} textAlign="left" marginTop={2} marginLeft={2}>
                    {calcularPorcentagem("SINCRONIZACAO").porcentagemProblemasResolvidos}%
                  </Text>
                </Box>
              </Box>
              <Box>
                <Text as="h3" fontSize={19} textAlign="left" marginBottom={2}>
                  Captura
                </Text>
                <Progress colorScheme="purple" w='100%' height="20px" borderRadius={20} value={calcularPorcentagem("CAPTURA").porcentagemProblemasResolvidos}>
                  <Box width={`${20}%`} bg="#7003C6" height="100%" />
                </Progress>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Text as="p" fontWeight="bold" fontSize={17} textAlign="left" marginTop={2} marginLeft={2}>
                    {calcularPorcentagem("CAPTURA").porcentagemProblemasResolvidos}%
                  </Text>
                </Box>
              </Box>
              <Box>
                <Text as="h3" fontSize={19} textAlign="left" marginBottom={2}>
                  Picking
                </Text>
                <Progress colorScheme="red" w='100%' height="20px" borderRadius={20} value={calcularPorcentagem("PICKING").porcentagemProblemasResolvidos}>
                  <Box width={`${20}%`} bg="#EC5466" height="100%" />
                </Progress>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Text as="p" fontWeight="bold" fontSize={17} textAlign="left" marginTop={2} marginLeft={2}>
                    {calcularPorcentagem("PICKING").porcentagemProblemasResolvidos}%
                  </Text>
                </Box>
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </Flex >

  );
};
