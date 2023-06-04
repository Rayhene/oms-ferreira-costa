import { useState } from 'react';
import { Flex, Select } from '@chakra-ui/react'
import ReactDOM from 'react-dom';
/* import Bar from '../ChartBar/GraphBar'; */
import Line from '../ChartLine/ChartLine';
import Bar from '../ChartBarWeekly/GraphBarWeekly';
import GraphBar from '../ChartBarYearly/GraphBarYearly';
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    /* StatArrow, */
    StatGroup,
} from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'

const ChartDaily = () => (<Line  /> );
const ChartWeekly = () => (<Bar/>);
const ChartYearly = () => (<GraphBar/>);

const ChartOrdersModel = () => {
    const [componentSelected, setComponentSelected] = useState('Componente1');

    const handleChange = (event) => {
        setComponentSelected(event.target.value);
    };

    const renderSelectedChart = () => {
        switch (componentSelected) {
            case 'Daily':
                return <ChartDaily />;
            case 'Weekly':
                return <ChartWeekly />;
            case 'Yearly':
                return <ChartYearly />;
            default:
                return <ChartDaily />;
        }
    };

    return (
        <Flex border='1px' borderColor='#9E9E9E' borderRadius='6px' padding='15px' direction={{ base: 'column', xl: 'column' }}>
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
            <Flex padding='15px' direction={{ base: 'column', xl: 'column' }} align="end">

                <Select  width="20%" value={componentSelected} onChange={handleChange}>
                    <option value="Daily">Diario</option>
                    <option value="Weekly">Semanal</option>
                    <option value="Yearly">Anual</option>
                </Select>
                <div>
                    <div>{renderSelectedChart()}</div>
                </div>
            </Flex>
        </Flex>
    );
};

export default ChartOrdersModel;

ReactDOM.render(<ChartOrdersModel />, document.getElementById('root'));
