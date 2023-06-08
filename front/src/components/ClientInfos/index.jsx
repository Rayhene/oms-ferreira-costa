import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { buscarPedidoPorNumero } from "../../services/api";
import { Box, Text, Heading, Flex, Table, Tr, Td, border } from "@chakra-ui/react";
import cpfMask from "../Masks/cpfMask";
import phoneMask from "../Masks/phoneMask";
import Loading from "../Loading";

const ClientInfos = () => {
    const [clientData, setClientData] = useState(null);
    const params = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        buscarPedidoPorNumero(params.pedidoId)
            .then((data) => {
                console.log('data', data);
                getClientData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Erro ao buscar todos os pedidos:', error);
            });
    }, []);

    const getClientData = (data) => {
        setClientData(data);
    }

    return (
        <Flex 
            justify={'space-between'}
            p="30px"
            boxShadow="base"
            border="1px"
            borderColor="gray.300"
            borderRadius="8"
            >{isLoading ? (
                <Table>
                    <Tr>
                        <Td colSpan={6} py="10px">
                            <Loading mb={3} mt={3} />
                        </Td>
                    </Tr>
                </Table>
            ) : (
                <>
                <Flex  width={'100%'} gap='3vh'>
                    <Flex   direction={'column'} w={'100%'} gap={'30px'} justify={'space-between'}>
                        <Box>
                            <Heading as="h2" fontSize="lg" h="30%">Cliente</Heading>
                            {clientData && (
                                <>
                                    <Text mb='5px'>Nome: {clientData.nome}</Text>
                                    <Text>CPF: {cpfMask(clientData.cpf)}</Text>
                                </>
                            )}
                        </Box>

                        
                        <Box>
                            <Heading as="h2" fontSize="lg" h="30%">Contato</Heading>
                            {clientData && (
                                <>
                                    <Text mb='5px'>Telefone: {phoneMask(clientData.contato)}</Text>
                                    <Text >Email: {clientData.email}</Text>
                                </>
                            )}
                        </Box  > 
                    </Flex>
                    <Flex  direction={'column'} w={'100%'} justify={"space-between"}>
                    <Box>
                            <Heading as="h2" fontSize="lg" h="50%">Endereço</Heading>
                            {clientData && (
                                <>
                                    <Text>{clientData.endereco}</Text>
                                </>
                            )}
                        </Box>

                        <Box>
                            <Heading as="h2" fontSize="lg">Recebedor</Heading>
                            {clientData && (
                                <>
                                    <Text>{clientData.nome}</Text>
                                </>
                            )}
                        </Box>
                    </Flex>
                </Flex>
                    
                </>)}
        </Flex>
    );
}

export default ClientInfos;
