import { Flex, Center, Heading } from '@chakra-ui/react';

const Dashboard = () => {
  
  return (
    <>
    <Flex minHeight="100vh" alignItems="center" justifyContent="center">
      <Center>
        <Heading as="h1" size="xl">
          Dashboard
        </Heading>
      </Center>
    </Flex>
    </>
  );
};

export default Dashboard;