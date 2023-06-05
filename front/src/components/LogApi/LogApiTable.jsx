import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
    ChakraProvider,
    Flex
} from "@chakra-ui/react";
import { buscarTodosPedidos } from "../../services/api";
import { useState, useEffect } from "react";
import Loading from "../Loading";


const LogApiTable = () => {
    const [pedidos, setPedidos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
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


    return (
        <Flex direction="row"
            ml="12"
            mr="6"
            py="5"
            px="7"
            w="62vw"
            h="28vh">
            <Table boxShadow="base" border="1px" borderColor="gray.300" borderRadius="8">
                <ChakraProvider>
                    <Box padding={4}>
                        <Box overflowY="auto" maxHeight="200px">
                            {isLoading ? (
                                <Tr>
                                    <Td colSpan={6} py="10px">
                                        <Loading />
                                    </Td>
                                </Tr>
                            ) : (
                                <>
                                    <Thead position="sticky" top={0} bg="white">
                                        <Tr fontSize="12">
                                            <Th>N° Pedido</Th>
                                            <Th>Timestamp</Th>
                                            <Th>Status</Th>
                                            <Th>Message</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {pedidos.map((item) => (
                                            <Tr key={item.id} fontSize="10px">
                                                <Td>{item.numeroDoPedido}</Td>
                                                <Td>{item.timestempDataDaCompra}</Td>
                                                <Td>{item.status_erro === true && item.status_pedido === "ANTIFRAUDE" ? 404 : 201}</Td>
                                                <Td>{item.status_erro === true && item.status_pedido === "ANTIFRAUDE" ? "Not Found" : "Order created success"}</Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </>)}
                        </Box>
                    </Box>
                </ChakraProvider>
            </Table>
        </Flex>
    );
};
export default LogApiTable;

