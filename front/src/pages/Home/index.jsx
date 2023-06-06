import { Flex, Center, Heading } from '@chakra-ui/react';
import Pie from '../../components/ChartPie/GraphPie';
import App from '../../components/ChartSelling/GraphSelling';
import LogApiTable from '../../components/LogApi/LogApiTable';
import CardsErro from '../../components/CardsErro';
import { ChartProgressError } from '../../components/ChartProgressError/ChartProgressError';

const Home = () => {

  return (
    <>
   <CardsErro />
   <ChartProgressError/>
      <Flex direction='column' alignItems={'center'} width='100%'>
        <Flex alignItems="center" justifyContent="center">
          <Center>
            <Heading as="h1" size="xl">Home</Heading>
            <App />
            
          </Center>
        </Flex>

        <Flex align={'center'} justify={'center'} gap='10%' width='80%' border={'1px solid'} borderColor={'gray.300'} rounded={'md'}>
          <Pie />
          <LogApiTable />
        </Flex>
      </Flex>
    </>
  );
};

export default Home;