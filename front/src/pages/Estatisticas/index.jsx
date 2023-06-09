import Navbar from '../../components/Navbar'
import Visitantes from '../../components/Visitantes'
import CardsStatistic from '../../components/CardsStatistic'
import ChartSalesGroup from '../../components/ChartSalesGroup/ChartSalesGroup';
import BestSellingProducts from '../../components/BestSellingProducts/BestSellingProducts';
import { Flex, Box, Center } from '@chakra-ui/react'

const Estatisticas = () => {
  return (
    <>
      <Navbar />
      <Flex Flex w='100%' justifyContent="Center" p='1rem'>
        <Center w='1280px'>
          <Flex w='100%' justifyContent="space-between" p='1rem'>
            <Box w='70%'>
              <ChartSalesGroup />
            </Box>
            <Box w='29%' >
              <Visitantes />
            </Box>
          </Flex>

        <Flex w='1280px'>
        <Box w='70%'>
          <BestSellingProducts />
        </Box>
        </Flex>
        
     

      </Flex>

    </>
  )
}

export default Estatisticas
