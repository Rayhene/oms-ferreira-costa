import Navbar from '../../components/Navbar'
import Visitantes from '../../components/Visitantes'
import ChartSalesGroup from '../../components/ChartSalesGroup/ChartSalesGroup';
import BestSellingProducts from '../../components/BestSellingProducts/BestSellingProducts';
import { Flex, Box, Center } from '@chakra-ui/react'

const Estatisticas = () => {
  return (
    <>
      <Navbar />
      <Flex w='1280px' justifyContent="Center" align={'center'} margin={'auto'} direction={'column'} gap={'41px'}>
          <Flex justifyContent="space-between" w='1280px'>
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
