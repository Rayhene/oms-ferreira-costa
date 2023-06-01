import { Flex, Center, Heading } from '@chakra-ui/react';
import Pie from '../../components/GraphPie/GraphPie';
import Bar from '../../components/GraphBar/GraphBar';

const Home = () => {
  
    return (
        <>
          <Flex minHeight="100vh" alignItems="center" justifyContent="center">
            <Center>
                <Heading as="h1" size="xl">Home</Heading>
                <div style={{height: 200}}><Pie/></div>
                <div style={{height: 200}}><Bar/></div>
            </Center>
          </Flex>
        </>
    );
  };
  
  export default Home;