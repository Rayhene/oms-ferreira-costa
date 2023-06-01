import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'
import { buscarPedidoPorNumero } from "../../services/api";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

function Pricing() {
  const [clientData, setClientData] = useState(null);
  const params = useParams();
  useEffect(() => {
    buscarPedidoPorNumero(params.pedidoId)
      .then((data) => {
        console.log('data', data);
        getClientData(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar todos os pedidos:', error);
      });
  }, []);

  const getClientData = (data) => {
    setClientData(data);
  }

  const calculateValorParcelas = () => {
    if (!clientData || !clientData.parcelas || !clientData.produtos) {
      return 0;
    }

    const somaValores = clientData.produtos.reduce((sum, produto) => {
      return sum + produto.valor_total_produto;
    }, 0);

    return somaValores / clientData.parcelas;
  }

  const valorParcelas = calculateValorParcelas();

  return (
    <Center py={6}>
      <Box
        boxShadow="base"
        border="1px"
        borderColor="gray.300"
        borderRadius="10"
        maxW={'364px'}
        height={'227px'}
        w={'full'}
        position={'relative'}
        top={'350px'} // ajuste a posição verticalmente conforme necessário
        left={'500px'}  // ajuste a posição horizontalmente conforme necessário
        bg={useColorModeValue('white', 'gray.800')}
        rounded={'md'}
        overflow={'hidden'}
      >

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="100%"
          gap="10px"
          pl="25px"
        >
          <Text fontSize={'20px'} fontWeight={600}>
            Método de Pagamento
          </Text>
          <List spacing={5}>
            <Box>
              <ListItem>
                {clientData?.tipo_pagamento}
              </ListItem>
              <ListItem>
                {clientData?.parcelas}x R${valorParcelas}
              </ListItem>
            </Box>

            <Box>
              <ListItem style={{ fontWeight: 700 }}>
                Id de Transação
              </ListItem>
              <ListItem>
              {clientData?.id_transacao}
              </ListItem>
            </Box>
          </List>
        </Box>
      </Box>
    </Center>
  );
}

export default Pricing;