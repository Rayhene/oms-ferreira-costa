import { Flex, Box, Heading } from '@chakra-ui/react';
import Pie from '../../components/ChartErrorPie/GraphPie';
import ChartErrorGroup from '../../components/ChartErrorGroup/ChartErrorGroup';
import LogApiTable from '../../components/LogApi/LogApiTable';
import Navbar from '../../components/Navbar';
import CardsErro from '../../components/CardsErro';
import { ChartProgressError } from '../../components/ChartErrorProgressBar/ChartProgressError';

const Home = () => {

  return (
    <>
      <Navbar />
      <CardsErro />

      <Flex direction='column' alignItems={'center'} >
        <Flex w='1280px'>
          <Flex w='100%' justifyContent="space-between" p='1rem'>
            <Box w='70%'>
              <ChartErrorGroup />
            </Box>
            <Box w='29%' >
              <ChartProgressError />
            </Box>
          </Flex>
        </Flex>
        <Box width='1280px' p='1em' >
          <Flex align={'center'} justify={'center'} width='100%' boxShadow="base"
            border="1px" borderColor="gray.300" borderRadius="8" rounded={'md'}>
            <Flex direction='column' alignItems={'left'} width='40%' p={5} >
              <Heading as='h3' size='lg'>API do Anti-Fraude</Heading>
              <Pie />
            </Flex>

            <Flex alignItems={'center'} p={10}>
              <LogApiTable />
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
