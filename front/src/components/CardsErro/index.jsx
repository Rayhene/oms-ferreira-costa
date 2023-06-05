import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import img from '../../assets/Vector.png';
import { buscarTodosPedidos } from "../../services/api";
import { useState, useEffect } from "react";

function CardsErro() {

    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        buscarTodosPedidos()
          .then((data) => {
            setPedidos(data);
            console.log("data", data)
            console.log(pedidos);
          })
          .catch((error) => {
            console.error("Erro ao buscar todos os pedidos:", error);
          });
      }, []);

  return (
    <Box marginTop='4rem'>
      <Flex justifyContent='center' padding='1rem' color="#1D252F">
        <Box maxWidth={['100%', '80%', '100%']} margin='auto'>
          <Heading fontStyle="normal" letterSpacing='0.45px' textAlign={['center', 'left']} color='#303030' size="lg" marginBottom='1rem'>
            Erros no Sistema
          </Heading>

          <Flex justifyContent={['center', 'flex-start']} gap='1rem' flexWrap='wrap'>
            <Box height="10vh" width={['100%', '26vh']} border='1.10733px solid rgba(158, 158, 158, 0.7)' borderRadius='6.23432px' padding='5px'>
              <Heading as="h1" size="sm" margin="8px 18px">Anti-Fraude</Heading>
              <Heading as="h1" fontSize="2xl" margin="16px 18px">48</Heading>
              <Image src={img} marginLeft="85%" marginTop="-16%" width="5" />
            </Box>

            <Box height="10vh" width={['100%', '26vh']} border='1.10733px solid rgba(158, 158, 158, 0.7)' borderRadius='6.23432px' padding='5px'>
              <Heading as="h1" size="sm" margin="8px 18px">Captura</Heading>
              <Heading as="h1" fontSize="2xl" margin="16px 18px">354</Heading>
              <Image src={img} marginLeft="85%" marginTop="-16%" width="5" />
            </Box>

            <Box height="10vh" width={['100%', '26vh']} border='1.10733px solid rgba(158, 158, 158, 0.7)' borderRadius='6.23432px' padding='5px'>
              <Heading as="h1" size="sm" margin="8px 18px">Carrinho</Heading>
              <Heading as="h1" fontSize="2xl" margin="16px 18px">77</Heading>
              <Image src={img} marginLeft="85%" marginTop="-16%" width="5"/>
            </Box>

            <Box height="10vh" width={['100%', '26vh']} border='1.10733px solid rgba(158, 158, 158, 0.7)' borderRadius='6.23432px' padding='5px'>
              <Heading as="h1" size="sm" margin="8px 18px">Picking</Heading>
              <Heading as="h1" fontSize="2xl" margin="16px 18px">364</Heading>
              <Image src={img} marginLeft="85%" marginTop="-16%" width="5" />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default CardsErro;