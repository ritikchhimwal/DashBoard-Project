import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const ReportChart = () => {
    const [data, setData] = useState({
        series: [
            {
                name: 'Sales',
                data: [31, 40, 28, 51, 42, 82, 56],
            },
            {
                name: 'Revenue',
                data: [11, 32, 45, 32, 34, 52, 41], // Changed 'date' to 'data'
            },
            {
                name: 'Customers',
                data: [15, 11, 32, 18, 9, 24, 11], // Changed 'date' to 'data'
            }
        ],
        options: {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false,
                },
            },
            markers: {
                size: 4,
            },
            colors: ['#4154f1', '#2eca6a', '#ff771d'],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.3, // Fixed typo from 'opacityForm' to 'opacityFrom'
                    opacityTo: 0.4,
                    stops: [0, 99, 100],
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2018-09-19T00:00:00.000Z',
                    '2018-09-19T01:30:00.000Z',
                    '2018-09-19T02:30:00.000Z',
                    '2018-09-19T04:30:00.000Z',
                    '2018-09-19T05:30:00.000Z',
                    '2018-09-19T06:30:00.000Z',
                    '2018-09-19T07:30:00.000Z',
                ],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
            },
        },
    });

    return (
        <Chart
            options={data.options}
            series={data.series}
            type={data.options.chart.type}
            height={data.options.chart.height}
        />
    )
}

export default ReportChart
