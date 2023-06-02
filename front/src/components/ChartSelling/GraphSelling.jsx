import { useState } from 'react';
import { Select } from '@chakra-ui/react'
import ReactDOM from 'react-dom';
import Bar from '../ChartBar/GraphBar';
import Line from '../ChartLine/ChartLine';

const ChartDaily = () => (<Line/>);
const ChartWeekly = () => (<Bar/>);
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
            case 'Weekly':
                return <ChartWeekly/>;
            case 'Yearly':
                return <ChartYearly/>;
            default:
                return <ChartDaily/>;
        }
    };

    return (
        <div>
            <Select value={componentSelected} onChange={handleChange}>
                <option value="Daily">Diario</option>
                <option value="Weekly">Semanal</option>
                <option value="Yearly">Anual</option>
            </Select>
            <div>{renderSelectedChart()}</div>
        </div>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
