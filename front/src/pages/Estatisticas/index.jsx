import Navbar from '../../components/Navbar'
import Visitantes from '../../components/Visitantes'
import CardsStatistic from '../../components/CardsStatistic'
import ChartSalesGroup from '../../components/ChartSalesGroup/ChartSalesGroup';
import BestSellingProducts from '../../components/BestSellingProducts/BestSellingProducts';
import { Flex, Box, Center } from '@chakra-ui/react'
import ChartSalesChannels from "../../components/ChartSalesChannels";

const Estatisticas = () => {
  return (
    <>
      <Navbar />
      <CardsStatistic />
      <Flex Flex w='100%' justifyContent="Center" p='1rem'>
        <Center w='1280px'>
          <Flex w='100%' justifyContent="space-between" p='1rem'>
            <Box w='70%'>
              <ChartSalesGroup />
            </Box>
            <Box w='29%' >
              <Visitantes />
              <ChartSalesChannels />
            </Box>
          </Flex>

        <Flex w='1280px'>
        <Box w='70%'>
          <BestSellingProducts />
        </Box>
        </Flex>
        
     
        </Center>
      </Flex>
    </>
  )
}

export default Estatisticas
