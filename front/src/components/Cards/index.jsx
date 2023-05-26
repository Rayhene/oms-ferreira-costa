import {
    Box,
    chakra,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    SimpleGrid
  } from '@chakra-ui/react';
  

function StatsCard(props) {
    const { title, stat } = props;
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <StatLabel fontWeight={'medium'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
      </Stat>
    );
}
  
const Cards = () => {
    return (
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'left'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Dashboard
        </chakra.h1>

        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'Anti-fraude'} stat={'48'} />
          <StatsCard title={'Captura'} stat={'354'} />
          <StatsCard title={'Car Problem'} stat={'77'} />
          <StatsCard title={'Picking'} stat={'364'} />
        </SimpleGrid>
      </Box>
    );
}

export default Cards;
  