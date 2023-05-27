import { Box, chakra, Flex, Input, Tabs, TabList, Tab, Spacer, TabPanels, TabPanel, InputGroup, Stack, InputLeftElement} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { buscarTodosPedidos } from "../../services/api";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import {SearchIcon} from "@chakra-ui/icons"

const PedidosTable = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    buscarTodosPedidos()
      .then((data) => {
        setPedidos(data);
        console.log('data', data)
      })
      .catch((error) => {
        console.error('Erro ao buscar todos os pedidos:', error);
      });
  }, []);


  return (
    <>
      <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={"left"}
          fontSize={"4xl"}
          py={10}
          fontWeight={"bold"}
        >
          Pedidos
        </chakra.h1>
        <Tabs width='100%'>
          <Flex>
              <TabList width='100%' >
                <Tab>One</Tab>
                <Spacer />
                <Tab>Two</Tab>
                <Spacer />
                <Tab>Three</Tab>
                <Spacer />
                <Tab>Four</Tab>
                <Spacer />
                <Tab>Five</Tab>
                <Spacer />
                <Tab>Six</Tab>
                <Spacer />
                <Tab>Seven</Tab>
              </TabList>
            </Flex>
        </Tabs>
        
        <Box py='23px'>
          <InputGroup width='33%'>
            <InputLeftElement>
              <SearchIcon color='gray.300' />
            </InputLeftElement>
            <Input placeholder='Insira o número do pedido' />
          </InputGroup>
        </Box>
        
          <TableContainer boxShadow='sm' rounded='md' border={'1px solid'} borderColor={'gray.100'}>
            <Table size='sm' textAlign='center'  >
              <Thead>
                <Tr>
                  <Th py='10px'>CPF</Th>
                  <Th py='10px'>Nome</Th>
                  <Th py='10px'>N° do pedido</Th>
                  <Th py='10px'>Valor Total</Th>
                  <Th py='10px'>Data de compra</Th>
                  <Th py='10px'>Status Do Pedido</Th>
                </Tr>
              </Thead>
              <Tbody>
                {pedidos.map((pedido) => (
                  <Tr key={pedido.id}>
                    <Td py='10px'>{pedido.cpf}</Td>
                    <Td py='10px'>{pedido.nome}</Td>
                    <Td py='10px'>{pedido.numeroDoPedido}</Td>
                    <Td py='10px'>{pedido.valorTotal}</Td>
                    <Td py='10px'>{pedido.dataDaCompra}</Td>
                    <Td py='10px'>{pedido.status_pedido}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
      </Box>
    </>
  );
};

export default PedidosTable;
