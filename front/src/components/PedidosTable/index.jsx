/* eslint-disable react/no-children-prop */
import { Select, Stack, Switch, Badge, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Tag, Box, Flex, Input, InputGroup, InputLeftElement, Tabs, TabList, Tab, Spacer, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { buscarTodosPedidos } from "../../services/api";
import { SearchIcon } from "@chakra-ui/icons";
import cpfMask from "../Masks/cpfMask";
import Loading from "../Loading";
import { Link }  from 'react-router-dom';
import { Link as LinkChakra} from '@chakra-ui/react'

const PedidosTable = () => {
  const [pedidos, setPedidos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tabSelecionada, setTabSelecionada] = useState("todos");
  const [numeroPedido, setNumeroPedido] = useState("");
  const [exibirApenasComErro, setExibirApenasComErro] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [quantidadePedidos, setQuantidadePedidos] = useState(10);
  const [indexDaPagina, setIndexDaPagina] = useState();


  useEffect(() => {
    buscarTodosPedidos()
      .then((data) => {
        setPedidos(data);
        setIsLoading(false);
        console.log("data", data);
      })
      .catch((error) => {
        console.error("Erro ao buscar todos os pedidos:", error);
      });
  }, []);

  const filtrarPedidosPorStatus = (status) => {

    let pedidosFiltrados = pedidos;

    if (exibirApenasComErro) {
      pedidosFiltrados = pedidosFiltrados.filter((pedido) => pedido.status_erro);
    }

    if (numeroPedido) {
      pedidosFiltrados = pedidosFiltrados.filter(
        (pedido) =>
          pedido.cpf.includes(numeroPedido) ||
          pedido.numeroDoPedido.includes(numeroPedido)
      );
    }

    if (status === "todos") {
      return pedidosFiltrados;
    } else if (status === "captura") {
      return pedidosFiltrados.filter(
        (pedido) => pedido.status_pedido === "CAPTURA"
      );
    } else if (status === "antiFraude") {
      return pedidosFiltrados.filter(
        (pedido) => pedido.status_pedido === "ANTIFRAUDE"
      );
    } else if (status === "faturado") {
      return pedidosFiltrados.filter(
        (pedido) => pedido.status_pedido === "FATURADO"
      );
    } else if (status === "picking") {
      return pedidosFiltrados.filter(
        (pedido) => pedido.status_pedido === "PICKING"
      );
    } else if (status === "transporte") {
      return pedidosFiltrados.filter(
        (pedido) => pedido.status_pedido === "TRANSPORTE"
      );
    } else if (status === "naoEntregue") {
      return pedidosFiltrados.filter(
        (pedido) => pedido.status_pedido === "NAOENTREGUE"
      );
    } else if (status === "entregue") {
      return pedidosFiltrados.filter(
        (pedido) => pedido.status_pedido === "ENTREGUE"
      );
    }

    return []
  };

  const totalPedidosNaTab = filtrarPedidosPorStatus(tabSelecionada).length;

  const handleTabChange = (index) => {
    const tabs = [
      "todos",
      "captura",
      "antiFraude",
      "faturado",
      "picking",
      "transporte",
      "naoEntregue",
      "entregue",
    ];
    setTabSelecionada(tabs[index]);
  };

  const handleInputChange = (event) => {
    setNumeroPedido(event.target.value);
  };

  const handleSwitchChange = () => {
    setExibirApenasComErro(!exibirApenasComErro);
  };

  const indiceUltimoPedido = paginaAtual * quantidadePedidos;
  const indicePrimeiroPedido = indiceUltimoPedido - quantidadePedidos;
  const pedidosDaPagina = filtrarPedidosPorStatus(tabSelecionada).slice(indicePrimeiroPedido, indiceUltimoPedido);

  const proximaPagina = () => {
    setPaginaAtual(paginaAtual + 1);
  };


  const atualizarPedidosDaTab = (event) => {
    setQuantidadePedidos(Number(event));
    setPaginaAtual(1)
  }

  useEffect(() => {
    setPaginaAtual(1)
  }, [numeroPedido, exibirApenasComErro, tabSelecionada])


  useEffect(() => {
    const novoIndexDaPagina = paginaAtual * quantidadePedidos;
    if (novoIndexDaPagina >= totalPedidosNaTab) {
      setIndexDaPagina(totalPedidosNaTab);
    } else {
      setIndexDaPagina(novoIndexDaPagina);
    }
  }, [paginaAtual, quantidadePedidos, pedidos.length, tabSelecionada, totalPedidosNaTab]);

  const paginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  const estiloDoLink = {
    textDecoration: 'underline',
    cursor: 'pointer',
  };

  return (
    <>
      <Box maxW="7xl" mx="auto" pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <Box textAlign="left" fontSize="4xl" py={10} fontWeight="bold">
          Pedidos
        </Box>
        <Tabs width="100%" onChange={handleTabChange}>
          <Flex>
            <TabList width="100%">
              <Tab color="#303030">Todos ({pedidos.length})</Tab>
              <Spacer />
              <Tab color="#303030">Captura ({filtrarPedidosPorStatus("captura").length})</Tab>
              <Spacer />
              <Tab color="#303030">Anti-fraude ({filtrarPedidosPorStatus("antiFraude").length})</Tab>
              <Spacer />
              <Tab color="#303030">Faturado ({filtrarPedidosPorStatus("faturado").length})</Tab>
              <Spacer />
              <Tab color="#303030">Picking ({filtrarPedidosPorStatus("picking").length})</Tab>
              <Spacer />
              <Tab color="#303030">Transporte ({filtrarPedidosPorStatus("transporte").length})</Tab>
              <Spacer />
              <Tab color="#303030">Não entregue ({filtrarPedidosPorStatus("naoEntregue").length})</Tab>
              <Spacer />
              <Tab color="#303030">Entregue ({filtrarPedidosPorStatus("entregue").length})</Tab>
            </TabList>
          </Flex>
        </Tabs>
        <Box py="23px">
          <InputGroup width="55%" alignItems="center">
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
            <Input
              placeholder="Insira o número do pedido ou CPF"
              value={numeroPedido}
              onChange={handleInputChange}
            />
            <Stack ml={2} align='center' direction='row' display='flex' alignItems='center'>
              <Switch isChecked={exibirApenasComErro} onChange={handleSwitchChange} colorScheme="red" size="sm" />
              <Tag size="md" bg='none' textAlign="center" style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                Mostrar apenas pedidos com erro
              </Tag>
            </Stack>
          </InputGroup>
        </Box>
        <TableContainer boxShadow="sm" rounded="md" border={"1px solid"} borderColor={"gray.300"}>
          <Table size="sm" textAlign="center">
            <Thead>
              <Tr>
                <Th py="10px">N° do pedido</Th>
                <Th py="10px">Data de compra</Th>
                <Th py="10px">Nome</Th>
                <Th py="10px">CPF</Th>
                <Th py="10px">Valor Total</Th>
                <Th py="10px">Status do Pedido</Th>
              </Tr>
            </Thead>
            <Tbody>
              {isLoading ? (
                <Tr>
                  <Td colSpan={6} py="10px">
                    <Loading mb={3} mt={3} />
                  </Td>
                </Tr>
              ) : (
                <>
                  {
                    pedidosDaPagina.map((pedido) => (
                      <Tr key={pedido.id}>
                        <Td py="10px">
                          <LinkChakra as={Link} to={`/pedido/${pedido.numeroDoPedido}`}>
                            {pedido.numeroDoPedido}
                          </LinkChakra>
                          </Td>
                        <Td py="10px">{pedido.dataDaCompra}</Td>
                        <Td py="10px">{pedido.nome}</Td>
                        <Td py="10px">{cpfMask(pedido.cpf)}</Td>
                        <Td py="10px">{pedido.valorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Td>

                        <Td py="10px" px='0'>
                          {pedido.status_pedido === "NAOENTREGUE" && pedido.status_erro === true ? (
                            <><Badge bg="red.500" mr={2} rounded="full" boxSize="0.5rem" /><Tag bg="#52B7FF" color="white" rounded="full">Não entregue</Tag></>
                          ) : pedido.status_pedido === "NAOENTREGUE" ? (
                            <Tag ml={4} bg="#52B7FF" color="white" rounded="full">Não entregue</Tag>
                          ) : pedido.status_pedido === "PICKING" && pedido.status_erro === true ? (
                            <><Badge bg="red.500" mr={2} rounded="full" boxSize="0.5rem" /><Tag bg="#52B7FF" color="white" rounded="full">Picking</Tag></>
                          ) : pedido.status_pedido === "PICKING" ? (
                            <Tag ml={4} bg="#52B7FF" color="white" rounded="full">Picking</Tag>
                          ) : pedido.status_pedido === "FATURADO" && pedido.status_erro === true ? (
                            <><Badge bg="red.500" mr={2} rounded="full" boxSize="0.5rem" /><Tag bg="#52B7FF" color="white" rounded="full">Faturado</Tag></>
                          ) : pedido.status_pedido === "FATURADO" ? (
                            <Tag ml={4} bg="#52B7FF" color="white" rounded="full">Faturado</Tag>
                          ) : pedido.status_pedido === "TRANSPORTE" && pedido.status_erro === true ? (
                            <><Badge bg="red.500" mr={2} rounded="full" boxSize="0.5rem" /><Tag bg="#52B7FF" color="white" rounded="full">Transporte</Tag></>
                          ) : pedido.status_pedido === "TRANSPORTE" ? (
                            <Tag ml={4} bg="#52B7FF" color="white">Transporte</Tag>
                          ) : pedido.status_pedido === "ANTIFRAUDE" && pedido.status_erro === true ? (
                            <><Badge bg="red.500" mr={2} rounded="full" boxSize="0.5rem" /><Tag bg="#52B7FF" color="white" rounded="full">Anti-fraude</Tag></>
                          ) : pedido.status_pedido === "ANTIFRAUDE" ? (
                            <Tag ml={4} bg="#52B7FF" color="white" rounded="full">Anti-fraude</Tag>
                          ) : pedido.status_pedido === "CAPTURA" && pedido.status_erro === true ? (
                            <><Badge bg="red.500" mr={2} rounded="full" boxSize="0.5rem" /><Tag bg="#52B7FF" color="white" rounded="full">Captura</Tag></>
                          ) : pedido.status_pedido === "CAPTURA" ? (
                            <Tag ml={4} bg="#52B7FF" color="white" rounded="full">Captura</Tag>
                          ) : pedido.status_pedido === "ENTREGUE" && pedido.status_erro === true ? (
                            <><Badge bg="red.500" mr={2} rounded="full" boxSize="0.5rem" /><Tag bg="#52B7FF" color="white" rounded="full">Entregue</Tag></>
                          ) : pedido.status_pedido === "ENTREGUE" ? (
                            <Tag ml={4} bg="#52B7FF" color="white" rounded="full">Entregue</Tag>
                          ) : null}
                        </Td>
                      </Tr>
                    ))
                  }
                </>)}
            </Tbody>
          </Table>
          <Flex justify="right" py="5px" marginRight={5}>
            <Tag bg="none" color="#B4B4B4">Resultados por página:</Tag>
            <Select
              value={quantidadePedidos}
              onChange={(event) => atualizarPedidosDaTab(event.target.value)}
              width=" 7%">
              <option value={2}>2</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
            </Select>
            <Tag ml={5} mr={1} color="black" bg="none" >{indexDaPagina} de {totalPedidosNaTab}</Tag>
            <Button
              mx="-1" onClick={paginaAnterior}
              isDisabled={paginaAtual === 1}
              color="gray.400" bg="none"
              _hover={{ color: 'black' }}
              _focus={{ boxShadow: 'none' }}
              _active={{ animation: 'none' }}
            >
              {"<"}
            </Button>
            <Button mx="-1" onClick={proximaPagina}
              isDisabled={
                indexDaPagina >= totalPedidosNaTab
              }
              color="gray.400" bg="none"
              _hover={{ color: 'black' }}
              _focus={{ boxShadow: 'none' }}
              _active={{ animation: 'none' }}
            >
              {">"}
            </Button>
          </Flex>
        </TableContainer>
      </Box>
    </>
  );
};

export default PedidosTable;
