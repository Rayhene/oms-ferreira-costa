import { useState } from 'react';
import { Flex, Select, Box, Heading } from '@chakra-ui/react'
import ReactDOM from 'react-dom';
import ChartErrorDaily from '../ChartErrorDaily/ChartErrorDaily';
import ChartErrorMonthly from '../ChartErrorMonthly/ChartErrorMonthly';
import ChartErrorYerly from '../ChartErrorYerly/ChartErrorMonthly';


const ChartDaily = () => (<ChartErrorDaily />);
const ChartMonthly = () => (<ChartErrorMonthly />)
const ChartYearly = () => (<ChartErrorYerly />);

const ChartErrorGroup = () => {
    const [componentSelected, setComponentSelected] = useState('Daily');

    const handleChange = (event) => {
        setComponentSelected(event.target.value);
    };

    const renderSelectedChart = () => {
        switch (componentSelected) {
            case 'Daily':
                return (
                    <Box style={{ height: 400 }} >
                        <ChartDaily />
                    </Box>
                )
            case 'Monthly':
                return (
                    <Box style={{ height: 400 }} >
                        <ChartMonthly />
                    </Box>
                )
            case 'Yearly':
                return (
                    <Box style={{ height: 400 }} >
                        <ChartYearly />
                    </Box>
                )
            default:
                return (
                    <Box style={{ height: 400 }} >
                        <ChartDaily />
                    </Box>
                )
        }
    };

    return (

        <Flex w='100%' boxShadow="base"
            border="1px" borderColor="gray.300" borderRadius="8" padding='15px' minH='610px' direction={{ base: 'column', xl: 'column' }}>
            <Flex>
                <Heading ml='1em' size="xl">Histórico de erros</Heading>
            </Flex>

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

export default ChartErrorGroup;

ReactDOM.render(<ChartErrorGroup />, document.getElementById('root'));
