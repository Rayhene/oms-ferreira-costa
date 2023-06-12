import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
    ChakraProvider,
    Heading,
} from "@chakra-ui/react";
import { buscarTodosPedidos } from "../../services/api";
import Loading from "../Loading";
import useSWR from "swr";


const LogApiTable = () => {
    const { data: pedidos, isLoading } = useSWR('/api/pedidos', buscarTodosPedidos);

    return (
        <Box>
            <Heading as="h2" size="md" mb={5}>
                Historico de requisições
            </Heading>
            <Table boxShadow="base" borderRadius="8px" width='100%'>
                <ChakraProvider>
                    <Box padding={4}>
                        <Box maxHeight="300px" overflowY='auto' overflowX='auto'>
                            {isLoading ? (
                                <Tr>
                                    <Td colSpan={6} py="10px">
                                        <Loading />
                                    </Td>
                                </Tr>
                            ) : (
                                <>
                                    <Thead position="sticky" bg="white">
                                        <Tr fontSize="12" >
                                            <Th p={3} pl={5}>N° Pedido</Th>
                                            <Th p={3} pl={5}>Timestamp</Th>
                                            <Th p={3} pl={5}>Status</Th>
                                            <Th p={3} pl={5}>Message</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {pedidos.map((item) => (
                                            <Tr key={item.id} fontSize="12px">
                                                <Td p={3} pl={5}>{item.numeroDoPedido}</Td>
                                                <Td p={3} pl={5} wordBreak={"keep-all"}>{item.timestempDataDaCompra}</Td>
                                                <Td p={3} pl={5}>{item.status_erro === true && item.status_pedido === "ANTIFRAUDE" ? 503 : 201}</Td>
                                                <Td p={3} pl={5}>{item.status_erro === true && item.status_pedido === "ANTIFRAUDE" ? "Service Unavailable" : "Order created success"}</Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </>)}
                        </Box>
                    </Box>
                </ChakraProvider>
            </Table>
        </Box>


    );
};
export default LogApiTable;

