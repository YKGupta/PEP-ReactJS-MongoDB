import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

// Register required components for Chart.js
ChartJS.register(...registerables);

import data from './ratings_chart.json';

const ChartsExample = () => {
    return (
        <div>
            <Line 
                data={{
                    labels: data.map((val) => new Date(val.date).toDateString()),
                    datasets: [
                        {
                            label: "Rating",
                            data: data.map((val) => val.rating), // Y-axis: Ratings
                            borderColor: "rgba(75,192,192,1)", // Line color
                            backgroundColor: "rgba(75,192,192,0.2)", // Fill color (if needed)
                            tension: 0.4, // Curve smoothness
                        }
                    ]
                }}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                            position: "top",
                        },
                    },
                }}
                height={400}
                width={600}
            />
            <Bar 
                data={{
                    labels: data.map((val) => new Date(val.date).toDateString()),
                    datasets: [
                        {
                            label: "Rating",
                            data: data.map((val) => val.rating), // Y-axis: Ratings
                            backgroundColor: "rgba(75,192,192,1)", // Fill color (if needed)
                            tension: 0.4, // Curve smoothness
                        }
                    ]
                }}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                            position: "top",
                        },
                    },
                }}
                height={400}
                width={600}
            />
        </div>
    )
}

export default ChartsExample;