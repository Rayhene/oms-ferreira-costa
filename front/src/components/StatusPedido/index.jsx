import {
  Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle,
  Stepper, useSteps} from '@chakra-ui/react'
import { Box, Heading } from '@chakra-ui/react'
import { WarningTwoIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react'
import { buscarTodosPedidos } from "../../services/api";

const steps = [
  { title: 'Pedido Realizado', description: 'Date & Time' },
  { title: 'Captura', description: 'Date & Time' },
  { title: 'Anti-Fraude', description: 'Date & Time' },
  { title: 'Faturado', description: 'Date & Time' },
  { title: 'E-mail Enviado ao Cliente', description: 'Date & Time' },
  { title: 'Picking', description: 'Date & Time' },
  { title: 'Empacotamento e Designição', description: 'Date & Time' },
  { title: 'Entregue para Transportadora', description: 'Date & Time' },
  { title: 'Produto Não Entregue', description: 'Date & Time' }
]

function Example() {
  const { activeStep } = useSteps({
    index: 7,
    count: steps.length,
  })
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => {
    buscarTodosPedidos()
      .then((data) => {
        setPedidos(data);
        console.log("data", data);
      })
      .catch((error) => {
        console.error("Erro ao buscar todos os pedidos:", error);
      });
  }, []);

  return (
    <Box display="flex" justifyContent='center' alignItems="center" height="100vh" width="100vw"
      border='1px solid gray'>
      <Box display="flex" flexDirection="column" justifyContent='center' alignItems="center" height="85vh" width="45vh"
        border='1px solid gray' marginRight="65px" marginLeft="auto" borderRadius="8px" boxShadow="0 0 10px rgba(0, 0, 0, 0.1)">
        <Heading as="h1" size="sm" marginBottom="20px">Histórico do Status do Pedido</Heading>
        <Stepper index={activeStep} colorScheme='green' orientation='vertical' height='460px' gap='0' size='sm'>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={index < 8 && <StepIcon />}
                  active={<StepNumber />}
                  incomplete={index === 8 && <WarningTwoIcon color="red.500" />}
                  //stepError={index === 8 && <WarningTwoIcon color="red.500" />}
                />
              </StepIndicator>

              <Box flexShrink='0'>
                <StepTitle style={index === 8 ? { color: 'red' } : null} >{step.title}</StepTitle>
                <StepDescription style={index === 8 ? { color: 'red' } : null} >{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  )
}

export default Example;