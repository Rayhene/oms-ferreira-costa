import { Box, Flex, Input, InputGroup, InputLeftElement, Tabs, TabList, Tab, Spacer } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { buscarTodosPedidos } from "../../services/api";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tag
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const PedidosTable = () => {
  const [pedidos, setPedidos] = useState([]);
  const [tabSelecionada, setTabSelecionada] = useState("todos");
  const [numeroPedido, setNumeroPedido] = useState("");

  useEffect(() => {
    buscarTodosPedidos()
      .then((data) => {
        setPedidos(data);
        console.log("data", data);
      })
      .catch((error) => {
        console.error("Erro ao buscar todos os pedidos:", error);
      });
  }, []);

  const filtrarPedidosPorStatus = (status) => {
    let pedidosFiltrados = pedidos;

    if (numeroPedido) {
      pedidosFiltrados = pedidosFiltrados.filter(
        (pedido) =>
          pedido.cpf.includes(numeroPedido) ||
          pedido.numeroDoPedido.includes(numeroPedido)
      );
    }

    if (status === "todos") {
      return pedidosFiltrados;
    } else if (status === "picking") {
      return pedidosFiltrados.filter(
        (pedido) => pedido.status_pedido === "Picking"
      );
    } else if (status === "naoEntregue") {
      return pedidosFiltrados.filter(
        (pedido) => pedido.status_pedido === "NaoEntregue"
      );
    }

    return [];
  };

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
          <InputGroup width="33%">
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
            <Input
              placeholder="Insira o número do pedido ou CPF"
              value={numeroPedido}
              onChange={handleInputChange}
            />
          </InputGroup>
        </Box>
        <TableContainer boxShadow="sm" rounded="md" border={"1px solid"} borderColor={"gray.300"}>
          <Table size="sm" textAlign="center">
            <Thead>
              <Tr>
                <Th py="10px">CPF</Th>
                <Th py="10px">Nome</Th>
                <Th py="10px">N° do pedido</Th>
                <Th py="10px">Valor Total</Th>
                <Th py="10px">Data de compra</Th>
                <Th py="10px">Status do Pedido</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filtrarPedidosPorStatus(tabSelecionada).map((pedido) => (
                <Tr key={pedido.id}>
                  <Td py="10px">{pedido.cpf}</Td>
                  <Td py="10px">{pedido.nome}</Td>
                  <Td py="10px">{pedido.numeroDoPedido}</Td>
                  <Td py="10px">{pedido.valorTotal}</Td>
                  <Td py="10px">{pedido.dataDaCompra}</Td>
                  <Td py="10px">
                    {pedido.status_pedido === "NaoEntregue" ? (
                      <Tag bg="#E4002B" color="white">Não entregue</Tag>
                    ) : pedido.status_pedido === "Picking" ? (
                      <Tag bg="#EC407A" color="white">Picking</Tag>
                    ) : pedido.status_pedido === "Faturado" ? (
                      <Tag bg="#0583A1" color="white">Faturado</Tag>
                    ) : pedido.status_pedido === "Sincronizacao" ? (
                      <Tag bg="#9E9E9E" color="white">Sincronização</Tag>
                    ) : pedido.status_pedido === "Antifraude" ? (
                      <Tag bg="#E3A400" color="white">Anti-fraude</Tag>
                    ) : pedido.status_pedido === "Captura" ? (
                      <Tag bg="#EC407A" color="white">Captura</Tag>
                    ) : pedido.status_pedido === "Entregue" ? (
                      <Tag bg="#629C1B" color="white">Entregue</Tag>
                    ) : (
                      pedido.status_pedido
                    )}
                  </Td>
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
