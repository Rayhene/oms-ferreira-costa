import { Flex, Center, Heading } from '@chakra-ui/react';
import Pie from '../../components/ChartPie/GraphPie';
import App from '../../components/ChartSelling/GraphSelling';
import LogApiTable from '../../components/LogApi/LogApiTable';
import Navbar from '../../components/Navbar';

const Home = () => {

  return (
    <>
      <Navbar />
      <LogApiTable />
      <Flex minHeight="100vh" alignItems="center" justifyContent="center">
        <Center>
          <Heading as="h1" size="xl">Home</Heading>
          <App />
          <div style={{ height: 200 }}><Pie /></div>
        </Center>
      </Flex>
    </>
  );
};

export default Home;
