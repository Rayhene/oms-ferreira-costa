import { Flex, Center } from '@chakra-ui/react';
import ChartOrdersModel from '../../components/ChartSelling/GraphSelling';

const Home = () => {
  
    return (
        <>
          <Flex minHeight="100vh" justify="center" flexDir="reverseRow">
            <Center>
                <ChartOrdersModel/>
            </Center>
          </Flex>
        </>
    );
  };
  
  export default Home;