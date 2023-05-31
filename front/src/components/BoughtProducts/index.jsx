import { Box, Heading, Text, Divider, Image, Stack, Card, CardBody, StackItem } from '@chakra-ui/react';
import { buscarPedidoPorNumero } from '../../services/api';
import { useEffect, useState } from 'react';

const BoughtProducts = () => {

  const [pedido, setPedido] = useState([]);
  useEffect(() => {
    buscarPedidoPorNumero(getOrderNumber())
      .then((data) => {
        setPedido(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar o pedido:" + getOrderNumber(), error);
      });
  }, []);

  
  const getOrderNumber = () => {
    let orderNumber = window.location.pathname.split('/');
    return orderNumber[2];
  }

    return (
        // Caixa principal
        <Box 
            w='885px'
            bg='FDFFFE'
            border='1px solid rgba(158, 158, 158, 0.7)'
            borderRadius='8'
            ml='70'
            mb='20'
            overflow='hidden'
            >
                {/* Produtos */}
                <Box
                    pl='25'
                    pt='13'
                    pb='6'
                    >
                    <Heading fontSize='20px'>
                        Produtos({pedido.quantidade})
                    </Heading>
                </Box>
                {/* Produto n */}
                <Box 
                    w='806px'
                    ml='10'
                    pl='6'
                    pr='6'
                    pt='3'
                    pb='3'
                    mb='24px'
                    border='1px solid rgba(158, 158, 158, 0.7)'
                    borderRadius='8'
                    
                    >
                    {/* Pacote 1 */}
                    {/* parte colorida */}
                    <Box 
                      bg='#F2F9FE'
                      ml='-6' 
                      mr='-6'
                      mt='-3'
                      mb='-3'
                      pl='6'
                      pr='6'
                      pt='3'
                      pb='6' 
                      borderTopRadius='8'
                      >
                        <Box display='flex' alignItems='baseline' fontSize='20px' pb='16px'>
                            <Heading fontSize='20px'>
                                Pacote 1
                            </Heading>
                            <Text pl='2' fontWeight='semibold' color='#9E9E9E'>(1 item, {pedido.quantidade} unidades)</Text>  
                        </Box>
                        <Stack spacing={'32px'}  direction={['column', 'row']}>
                            <Box>
                                <Text pb='8px' fontSize='18px' fontWeight='semibold'>Valor do pacote</Text>
                                <Text>{pedido.valor_produto?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
                            </Box>
                            <Box>
                                <Text pb='8px' fontSize='18px' fontWeight='semibold'>Data de entrega</Text>
                                <Text>{pedido.dataDaCompra}</Text>
                            </Box>
                            <Box>
                                <Text pb='8px' fontSize='18px' fontWeight='semibold'>Transportadora</Text>
                                <Text>Correios</Text>
                            </Box>
                            <Box >
                                <Text pb='8px' fontSize='18px' fontWeight='semibold'>Tipo de entrega</Text>
                                <Text>Expressa</Text>
                            </Box>
                        </Stack>
                    </Box>              
                    
                    {/* Parte sem cor */}
                    <Stack mt='16px' spacing={'32px'}  direction={['column', 'row']}>
                        <StackItem>
                          <Text fontSize='18px' fontWeight='semibold'>
                            Produto
                          </Text>
                        </StackItem>
                        <StackItem >
                          <Text fontSize='18px' fontWeight='semibold' ml='268px'>
                            Valor
                          </Text>
                        </StackItem>
                        <StackItem >
                          <Text fontSize='18px' fontWeight='semibold' ml='92px'>
                            Quantidade
                          </Text>
                        </StackItem>
                        <StackItem >
                          <Text fontSize='18px' fontWeight='semibold' ml='8px'>
                            Total
                          </Text>
                        </StackItem>
                    </Stack>

                    <Divider />

                    <Stack mt='8px' spacing={'32px'} direction={['column', 'row']}>
                      <StackItem>
                        <Card
                          direction={{ base: 'column', sm: 'row' }}
                          overflow='hidden'
                          variant='outline'
                          border='none'
                          w='333px'
                          h='84px'
                        >
                          <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '150px' }}
                            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                            alt='Caffe Latte'
                          />

                          <Stack>
                            <CardBody py='2'>
                              <Heading size='sm'>{pedido.produto}</Heading>

                              <Text color='#9E9E9E'>
                                Ref.: {pedido.referencia}
                              </Text>
                            </CardBody>
                          </Stack>
                        </Card>
                      </StackItem>
                      <StackItem>
                        <Text ml='px' w='120px'>
                          {pedido.valor_produto?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                        </Text>
                      </StackItem>
                      <StackItem>
                        <Text ml='16px' w='100px'>
                          {pedido.quantidade}
                        </Text>
                      </StackItem>
                      <StackItem>
                        <Text ml='4px'>
                          {pedido.valor_total_produto?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                        </Text>
                      </StackItem>
                    </Stack>
                        
                </Box>
                {/* Valor total */}
                <Box ml='12'
                    
                    pb='6'>
                    <Text fontSize='18px' fontWeight='bold'>
                      Valor total: {pedido.valor_total_produto?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </Text>
                </Box>
        </Box>
    )
}

export default BoughtProducts;