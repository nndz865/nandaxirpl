import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Price',
                data: data.values,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'minute',
                },
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Financial Chart</h2>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default Chart;