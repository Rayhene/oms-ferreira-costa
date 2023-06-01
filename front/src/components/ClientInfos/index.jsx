import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { buscarPedidoPorNumero } from "../../services/api";
import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import cpfMask from "../Masks/cpfMask";
import phoneMask from "../Masks/phoneMask";

const ClientInfos = () => {
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

    return (
        <Flex direction="row" ml="12" mr="6" py="5" px="7" w="62vw" h="28vh" border='1px solid gray' borderRadius="8">
            <Box w="50%">
                <Box h="55%">
                    <Heading as="h2" fontSize="lg" h="30%">Cliente</Heading>
                    {clientData && (
                        <>
                            <Text h="30%">Nome: {clientData.nome}</Text>
                            <Text>CPF: {cpfMask(clientData.cpf)}</Text>
                        </>
                    )}
                </Box>

                <Box h="45%">
                    <Heading as="h2" fontSize="lg" h="30%">Contato</Heading>
                    {clientData && (
                        <>
                            <Text h="30%">Telefone: {phoneMask(clientData.contato)}</Text>
                            <Text >Email: {clientData.email}</Text>
                        </>
                    )}
                </Box>
            </Box>
            <Box w="50%">
                <Box h="55%">
                    <Heading as="h2" fontSize="lg" h="30%">Endereço</Heading>
                    {clientData && (
                        <Text h="30%">{clientData.endereco}</Text>
                    )}
                </Box>

                <Box h="45%">
                    <Heading as="h2" fontSize="lg" h="30%">Recebedor</Heading>
                    {clientData && (
                        <Text h="30%">{clientData.nome}</Text>
                    )}
                </Box>
            </Box>
        </Flex>
    );
}

export default ClientInfos;