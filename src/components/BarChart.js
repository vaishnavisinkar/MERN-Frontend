import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import '../components/BarChart.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = ({ chartData }) => {
    const labels = chartData.map(item => item.range);
    const dataPoints = chartData.map(item => item.count);
    useEffect(() => {

        console.log("this is barChartData :: ", chartData)
    }, [chartData])
    const data = {
        labels: labels,  
        datasets: [
            {
                label: 'Count',
                data: dataPoints,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderWidth: 1,
            }
        ]
    };

    return (
        
        <div className="bar-chart-container">

    <Bar data={data} />
    </div>);

};

export default BarChart;
