import { Flex, Center, Heading } from '@chakra-ui/react';
import Pie from '../../components/ChartPie/GraphPie';
import App from '../../components/ChartSelling/GraphSelling';
import LogApiTable from '../../components/LogApi/LogApiTable';
import Navbar from '../../components/Navbar';
import CardsErro from '../../components/CardsErro';
import { ChartProgressError } from '../../components/ChartProgressError/ChartProgressError';

const Home = () => {

  return (
    <>
   <Navbar />
   <CardsErro />
   <ChartProgressError/>
      <Flex direction='column' alignItems={'center'} width='100%'>
        <Flex alignItems="center" justifyContent="center">
          <Center>
            <Heading as="h1" size="xl">Home</Heading>
            <App />
            
          </Center>
        </Flex>

        <Flex align={'center'} justify={'center'}  width='80%' border={'1px solid'} borderColor={'gray.300'} rounded={'md'}>
          <Flex direction='column' alignItems={'left'} width='40%' p={5} >
            <Heading as='h3' size='lg'>API do Anti-Fraude</Heading>
            <Pie />
          </Flex>
          
          <Flex alignItems={'center'} width='100%' p={10}>
            <LogApiTable />
          </Flex>

        </Flex>
      </Flex>
    </>
  );
};

export default Home;
