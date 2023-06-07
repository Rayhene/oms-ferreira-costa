import {
  Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle,
  Stepper, Table, Td, Tr, useSteps
} from '@chakra-ui/react'
import { Box, Heading } from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react'
import { buscarPedidoPorNumero } from '../../services/api'
import Loading from '../Loading'


const steps = [
  { title: 'Pedido Realizado', description: '' },
  { title: 'Captura', description: '' },
  { title: 'Anti-Fraude', description: '' },
  { title: 'Faturado', description: '' },
  { title: 'E-mail Enviado ao Cliente', description: '' },
  { title: 'Picking', description: '' },
  { title: 'Empacotamento e Designição', description: '' },
  { title: 'Entregue para Transportadora', description: '' },
  { title: 'Produto Entregue', description: '' }
]

let indexStatus = 0;

function Example() {

  const [pedido, setPedido] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [statusErro, setStatusErro] = useState(false);
  const [datasDescricao, setdatasDescricao] = useState([]);

  useEffect(() => {
    buscarPedidoPorNumero(buscarNumeroPedido())
      .then((data) => {
        setPedido(data);
        setIsLoading(false);
        setStatusErro(data?.status_erro || false);
        setdatasDescricao(datas);

      })
      .catch((error) => {
        console.error("Erro ao buscar todos os pedidos:", error);
      });
  }, []);

  const buscarNumeroPedido = () => {
    let numeroPedido = window.location.pathname.split('/');
    return numeroPedido[2];
  };

  if (pedido?.status_pedido === "PEDIDO REALIZADO") {
    indexStatus = Number(0);
  }
  else if (pedido?.status_pedido === "CAPTURA") {
    indexStatus = Number(1);
  }
  else if (pedido?.status_pedido === "ANTIFRAUDE") {
    indexStatus = Number(2);
  }
  else if (pedido?.status_pedido === "FATURADO") {
    indexStatus = Number(3);
  }
  else if (pedido?.status_pedido === "E-MAIL ENVIADO AO CLIENTE") {
    indexStatus = Number(4);
  }
  else if (pedido?.status_pedido === "PICKING") {
    indexStatus = Number(5);
  }
  else if (pedido?.status_pedido === "EMPACOTAMENTO E DESIGNAÇÃO") {
    indexStatus = Number(6);
  }
  else if (pedido?.status_pedido === "SINCRONIZACAO") {
    indexStatus = Number(7);
  }
  else if (pedido?.status_pedido === "NAOENTREGUE") {
    indexStatus = Number(8);
  }
  else if (pedido?.status_pedido === "ENTREGUE") {
    indexStatus = Number(9)
  }

  const { activeStep, setActiveStep } = useSteps({
    index: indexStatus,
    count: steps.length,
  })

  useEffect(() => {
    setActiveStep(indexStatus);
  }, [indexStatus]);

  useEffect(() => {
  const datas = steps.map((step, index) => {
    if (index <= indexStatus) {
      return pedido?.dataDaCompra;
    }
    return null;
  });
  setdatasDescricao(datas);
},[pedido, indexStatus]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="20px"
      border="1px"
      borderColor="gray.300"
      boxShadow="base"
      marginRight="9px"
      marginLeft="9px"
      borderRadius="8px"
      gap={'2vh'}
    >
      <Heading as="h1" size="md" marginBottom="20px" fontSize="18px">Histórico do Status do Pedido</Heading>
      {isLoading ? (
        <Table>
          <Tr>
            <Td colSpan={6} py="10px">
              <Loading mb={3} mt={3} />
            </Td>
          </Tr>
        </Table>
      ) : (
        <>
          <Stepper index={activeStep} colorScheme='green' orientation='vertical' height='460px' gap='0' size='sm'>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    active={statusErro || indexStatus === 8 ? <WarningIcon color="red.500" /> : <StepNumber />}
                    incomplete={<StepNumber />}
                  />
                </StepIndicator>

                <Box flexShrink='0'>
                  <StepTitle style={((statusErro && activeStep === index) || (indexStatus === 8 && activeStep === index)) ? { color: 'red' } : null} >{step.title}</StepTitle>
                  <StepDescription >{datasDescricao[index]}</StepDescription>
                </Box>

                <StepSeparator />
              </Step>

            ))}
          </Stepper>
        </>)}
    </Box>
  )
}

export default Example;
