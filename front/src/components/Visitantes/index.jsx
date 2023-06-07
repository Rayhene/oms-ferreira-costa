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
} from "@chakra-ui/react";
import { ArrowUpIcon } from '@chakra-ui/icons'

function Visitantes() {
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md">Visitantes</Heading>
              <Stat>
                <Flex>
                  <Heading size={"2xl"}>365.302</Heading>
                  <StatHelpText alignItems={"center"} color="#2CAB40">
                    <ArrowUpIcon type="increase" />
                    25%
                  </StatHelpText>
                </Flex>
              </Stat>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default Visitantes;
