import { Box, Center, Text, List, ListItem, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import useSWR from 'swr';
import { buscarPedidoPorNumero } from "../../services/api";
import realMask from '../Masks/realMask';

function Pricing() {
  const [clientData, setClientData] = useState(null);
  const params = useParams();

  const fetcher = (url) => buscarPedidoPorNumero(url);

  const { data: pedidoData, error } = useSWR(
    params.pedidoId,
    fetcher,
    {
      onError: () => {
        console.error("Erro ao buscar o pedido:", error);
      },
      onSuccess: (data) => {
        setClientData(data);
      },
    }
  );

  const calculateValorParcelas = () => {
    if (!clientData || !clientData.parcelas || !clientData.produtos) {
      return 0;
    }

    const somaValores = clientData.produtos.reduce((sum, produto) => {
      return sum + produto.valor_total_produto;
    }, 0);

    const result = somaValores / clientData.parcelas;
    return realMask(result);
  }

  const valorParcelas = calculateValorParcelas();

  return (
    <Center py={6}>
      <Box
        boxShadow="base"
        border="1px"
        borderColor="gray.300"
        borderRadius="10"
        bg={useColorModeValue('white', 'gray.800')}
        rounded={'md'}
        p='20px'
        w='100%'
      >
        <Text fontSize={'20px'} fontWeight={600}>
          Método de Pagamento
        </Text>

        <List spacing={5}>
          <Box>
            <ListItem>
              {pedidoData?.tipo_pagamento}
            </ListItem>
            <ListItem>
              {pedidoData?.parcelas}x {valorParcelas}
            </ListItem>
          </Box>

          <Box>
            <ListItem style={{ fontWeight: 700 }}>
              Id de Transação
            </ListItem>
            <ListItem>
              {pedidoData?.id_transacao}
            </ListItem>
          </Box>
        </List>
      </Box>
    </Center>
  );
}

export default Pricing;
