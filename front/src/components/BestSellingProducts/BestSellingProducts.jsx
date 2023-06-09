import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Text, Image, Flex } from '@chakra-ui/react'
import lampada from '../../assets/lampada.png';
import panela from '../../assets/panela.png';
import alicate from '../../assets/alicate.png'
import ventilador from '../../assets/ventilador.png'
import mesa from '../../assets/mesa.png'
const BestSellingProducts = () => {
    const products = [
        {
          name: 'Mesa Lateral MDF 50x55cm - Dalla Costa',
          reference: '9281391273',
          sold: '9152 pedidos',
          stockStatus: 'Fora de estoque',
          imageUrl: mesa,
        },
        {
          name: 'Ventilador de Mesa Cadence',
          reference: '9281391273',
          sold: '7532 pedidos',
          stockStatus: 'Em estoque',
          imageUrl: ventilador,
        },
        {
          name: 'Alicate Universal - Tramontina',
          reference: '9281391273',
          sold: '5222 pedidos',
          stockStatus: 'Em estoque',
          imageUrl: alicate,
        },
        {
          name: 'Panela Antiaderente - Alegrete',
          reference: '9281391273',
          sold: '4152 pedidos',
          stockStatus: 'Fora de estoque',
          imageUrl: panela,
        },
        {
          name: 'Lâmpada LED 9w Branca E27 - Save Energy',
          reference: '9281391273',
          sold: '3992 pedidos',
          stockStatus: 'Em estoque',
          imageUrl: lampada,
        },
      ];
    return (
        <TableContainer border='1px' borderColor='#9E9E9E' borderRadius={'7px'}>
            <Text as='h2' fontSize='3xl' p={'22px'} fontWeight={500}>
                Produtos Mais Vendidos
                </Text>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th color={'#1D252F'}>Produto</Th>
                        <Th color={'#1D252F'}>Referência</Th>
                        <Th color={'#1D252F'}>Total vendido</Th>
                        <Th color={'#1D252F'}>Estoque</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {products.map((product) => {
                        return(
                        <Tr key={product.name}>
                            <Td>
                                <Flex align={'center'}>
                                    <Image src={product.imageUrl} alt={product.name} boxSize="30px" mr="10px" />
                                    {product.name}
                                </Flex>
                                
                            </Td>
                            <Td>{product.reference}</Td>
                            <Td>{product.sold}</Td>
                            <Td color={product.stockStatus === 'Em estoque' ? '#32CD32' : '#EC5466'}>
                                {product.stockStatus}
                            </Td>
                      </Tr>    
                      ); 
                    })}
                </Tbody>   
            </Table>
        </TableContainer>
    )
}

export default BestSellingProducts;