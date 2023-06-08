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
      <Card maxW="sm" height={"sm"}>
        <CardBody>
          <Stack mt="5" spacing="3">
            <Heading size="md">Visitantes</Heading>
            <Stat size={20}>
              <Flex display="flex" alignItems="center">
                <Heading size={'2xl'}>365.302</Heading>
                <StatHelpText
                  fontSize={15}
                  alignItems={'center'}
                  color="#2CAB40"
                >
                  <ArrowUpIcon type="increase" />
                  <span style={{ fontSize: '15px' }}>25%</span>
                </StatHelpText>
              </Flex>
              <Text>Nessa semana</Text>
            </Stat>
          </Stack>
          <SimpleGrid mt={6} columns={2} spacing={5}>
            <Text fontSize={'sm'}>Visitantes que compraram</Text>
            <Flex ml={95} justifyContent="space-between">
              <Heading size={'sm'}>250k</Heading>
              <ArrowUpIcon color="#2CAB40" type="increase" />
            </Flex>

            <Text fontSize={'sm'}>Novos usuários</Text>
            <Flex ml={95} justifyContent="space-between">
              <Heading size={'sm'}>2.5K</Heading>
              <ArrowUpIcon color="#2CAB40" type="increase" />
            </Flex>

            <Text fontSize={'sm'}>Taxa de Rejeição</Text>
            <Flex ml={95} justifyContent="space-between">
              <Heading size={'sm'}>2.5K</Heading>
              <ArrowDownIcon color="#DA0812" type="decrease" />
            </Flex>

            <Text fontSize={'sm'}>Tempo de uso</Text>
            <Flex ml={95} justifyContent="space-between">
              <Heading size={'sm'}>3.4H</Heading>
              <ArrowUpIcon ml={2} color="#2CAB40" type="increase" />
            </Flex>
          </SimpleGrid>
        </CardBody>
      </Card>
    </>
  )
}

export default Visitantes
