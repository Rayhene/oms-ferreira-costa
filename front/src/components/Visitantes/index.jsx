import {
  Stat,
  StatHelpText,
  StatGroup,
  StatLabel,
  Flex,
  StatNumber,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  SimpleGrid,
  Box
} from '@chakra-ui/react'
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'

function Visitantes() {
  return (
    <>
      <Card maxW="sm" height={"sm"} boxShadow="base"
        border="1px" borderColor="gray.300" borderRadius="8" minH='480px' >
        <CardBody>
          <Stack mt="0" spacing="3">
            <Heading size="lg">Visitantes</Heading>
            <Stat size={20}>
              <Flex display="flex" alignItems="center">
                <Heading size={'2xl'} >365.302</Heading>
                <StatHelpText
                  fontSize={15}
                  alignItems={'center'}
                  color="#2CAB40"
                >
                  <ArrowUpIcon type="increase" />
                  <span style={{ fontSize: '20px' }}>+25%</span>
                </StatHelpText>
              </Flex>
              <Text fontSize={'xl'}>Nessa semana</Text>
            </Stat>
          </Stack>
          <SimpleGrid mt={12} columns={2} spacing={8}>
            <Text fontSize={'md'} fontWeight="bold" >Visitantes que compraram</Text>
            <Flex ml={95} justifyContent="space-between">
              <Heading size={'sm'}>250k</Heading>
              <ArrowUpIcon color="#2CAB40" type="increase" />
            </Flex>

            <Text fontSize={'md'} fontWeight="bold" >Novos usuários</Text>
            <Flex ml={95} justifyContent="space-between">
              <Heading size={'sm'}>2.5K</Heading>
              <ArrowUpIcon color="#2CAB40" type="increase" />
            </Flex>

            <Text fontSize={'md'} fontWeight="bold" >Taxa de Rejeição</Text>
            <Flex ml={95} justifyContent="space-between">
              <Heading size={'sm'}>2.5K</Heading>
              <ArrowDownIcon color="#DA0812" type="decrease" />
            </Flex>

            <Text fontSize={'md'} fontWeight="bold">Tempo de uso</Text>
            <Flex ml={95} justifyContent="space-between">
              <Heading size={'sm'}>3.4H</Heading>
              <ArrowUpIcon color="#2CAB40" type="increase" />
            </Flex>
          </SimpleGrid>
        </CardBody>
      </Card>
    </>
  )
}

export default Visitantes
