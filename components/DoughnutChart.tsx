'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [1250, 2500, 3300],
                backgroundColor: ['blue', 'pink', 'green']
            }
        ]
    }
  
    return (
        <Doughnut data={[]}/>
    )
}

export default DoughnutChart