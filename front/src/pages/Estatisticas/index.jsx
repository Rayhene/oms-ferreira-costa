import Navbar from '../../components/Navbar'
import Visitantes from '../../components/Visitantes'
import { Flex, Box } from '@chakra-ui/react'
import CardsStatistic from '../../components/CardsStatistic'

const Estatisticas = () => {
  return (
    <>
      <Navbar />
      <CardsStatistic />
      
        <Box>
          <Flex direction={'column'} alignItems={'flex-end'} mt={20} mr={"16.5%"}>
            <Visitantes />
          </Flex>
        </Box>
    </>
  )
}

export default Estatisticas
