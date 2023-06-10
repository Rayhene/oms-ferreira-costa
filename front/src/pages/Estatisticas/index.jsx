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
        <Center w='1280px' flexDirection={'column'}>
          <Flex w='100%' justifyContent="space-between" p='1rem'>
            <Flex w='70%' direction={'column'} gap={'40px'}>
              <ChartSalesGroup />
              <BestSellingProducts />
            </Flex>

            <Flex w='29%' direction={'column'} justify={'space-between'} gap={'40px'}>
              <Visitantes />
              <ChartSalesChannels />
            </Flex>
          </Flex>
        
     
        </Center>
      </Flex>
    </>
  )
}

export default Estatisticas
