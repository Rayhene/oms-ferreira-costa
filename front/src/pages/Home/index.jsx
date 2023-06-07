<<<<<<< HEAD
import { Flex, Box, Heading } from '@chakra-ui/react';
import Pie from '../../components/ChartErrorPie/GraphPie';
import ChartSalesGroup from '../../components/ChartSalesGroup/ChartSalesGroup';
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
              <ChartSalesGroup />
            </Box>
            <Box w='29%' >
              <ChartProgressError />
            </Box>
=======
import { Flex, Center } from '@chakra-ui/react';
import ChartOrdersModel from '../../components/ChartSelling/GraphSelling';

const Home = () => {
  
    return (
        <>
          <Flex minHeight="100vh" justify="center" flexDir="reverseRow">
            <Center>
                <ChartOrdersModel/>
            </Center>
>>>>>>> 312ff31bc19eeada164928ac460692964757fb3e
          </Flex>
        </Flex>
        <Box width='1280px' p='1em' >
          <Flex align={'center'} justify={'center'} width='100%' border={'1px solid'} borderColor='#9E9E9E' rounded={'md'}>
            <Flex direction='column' alignItems={'left'} width='40%' p={5} >
              <Heading as='h3' size='lg'>API do Anti-Fraude</Heading>
              <Pie />
            </Flex>

            <Flex alignItems={'center'}  p={10}>
              <LogApiTable />
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
