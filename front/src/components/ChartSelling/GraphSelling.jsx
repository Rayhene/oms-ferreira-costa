import { useState } from 'react';
import { Select } from '@chakra-ui/react'
import ReactDOM from 'react-dom';
import Bar from '../ChartBar/GraphBar';
import Line from '../ChartLine/ChartLine';
import LineMonthly from '../ChartLineMonthly/ChartLine';


const ChartDaily = () => (<Line/>);
const ChartMonthly = () => (<LineMonthly/>)
const ChartYearly = () => (<Bar/>);

const App = () => {
    const [componentSelected, setComponentSelected] = useState('Componente1');

    const handleChange = (event) => {
        setComponentSelected(event.target.value);
    };

    const renderSelectedChart = () => {
        switch (componentSelected) {
            case 'Daily':
                return <ChartDaily/>;
            case 'Yearly':
                return <ChartYearly/>;
            case 'Monthly':
                return <ChartMonthly/>;
            default:
                return <ChartDaily/>;
        }
    };

    return (
        <div>
            <Select value={componentSelected} onChange={handleChange}>
                <option value="Daily">Semanal</option>
                <option value="Yearly">Anual</option>
                <option value="Monthly">Mensal</option>
            </Select>
            <div>{renderSelectedChart()}</div>
        </div>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
