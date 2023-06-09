import { useState } from 'react';
import { Flex, Select, Box } from '@chakra-ui/react'
import ReactDOM from 'react-dom';
import ChartSalesDaily from '../ChartSalesDaily/ChartSalesDaily';
import ChartSalesMounthly from '../ChartSalesMonthly/ChartSalesMonthly';
import ChartSalesYerly from '../ChartSalesYerly/ChartSalesYerly';
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    /* StatArrow, */
    StatGroup,
} from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'

const ChartDaily = () => (<ChartSalesDaily />);
const ChartMonthly = () => (<ChartSalesMounthly />)
const ChartYearly = () => (<ChartSalesYerly />);

const ChartSalesGroup = () => {
    const [componentSelected, setComponentSelected] = useState('Daily');

    const handleChange = (event) => {
        setComponentSelected(event.target.value);
    };

    const renderSelectedChart = () => {
        switch (componentSelected) {
            case 'Daily':
                return (
                    <Box style={{ height: 350 }} >
                        <ChartDaily />
                    </Box>
                )
            case 'Monthly':
                return (
                    <Box style={{ height: 350 }} >
                        <ChartMonthly />
                    </Box>
                )
            case 'Yearly':
                return (
                    <Box style={{ height: 350 }} >
                        <ChartYearly />
                    </Box>
                )
            default:
                return (
                    <Box style={{ height: 350 }} >
                        <ChartDaily />
                    </Box>
                )
        }
    };

    return (

        <Flex w='100%' boxShadow="base"
            border="1px" borderColor="gray.300" borderRadius="8" padding='15px' minH='300px' direction={{ base: 'column', xl: 'column' }}>
            <StatGroup paddingLeft='50px' marginBottom='-50px'>
                <Stat>
                    <StatLabel>Vendas</StatLabel>

                    <Flex>
                        <StatNumber>250.000 pedidos</StatNumber>
                        <StatHelpText diplay="flex" color='#2CAB40' >
                            <ArrowUpIcon type='increase' />
                            25%
                        </StatHelpText>
                    </Flex>
                </Stat>
            </StatGroup>
            <Flex padding='15px' direction={{ base: 'column', xl: 'column' }} align="end" >

                <Select width="20%" value={componentSelected} onChange={handleChange}>
                    <option value="Daily">Diario</option>
                    <option value="Monthly">Mensal</option>
                    <option value="Yearly">Anual</option>
                </Select>
                <Box w='100%' h='100%'>{renderSelectedChart()}</Box>
            </Flex>
        </Flex>
    );
};

export default ChartSalesGroup;

ReactDOM.render(<ChartSalesGroup />, document.getElementById('root'));