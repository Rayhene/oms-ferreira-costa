import { Flex, Center, Heading } from '@chakra-ui/react';

const Pedidos = () => {
  
    return (
        <>
          <Flex minHeight="100vh" alignItems="center" justifyContent="center">
            <Center>
                <Heading as="h1" size="xl">Pedidos</Heading>
            </Center>
          </Flex>
        </>
    );
  };
  
  export default Pedidos;