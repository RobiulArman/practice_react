// import React from 'react';
import { LineChart, Line,XAxis,YAxis } from 'recharts';
const LineCharts = () => {
    const students = [  
        { id: 1, name: 'Alice', marks: 78 },  
        { id: 2, name: 'Bob', marks: 85 },  
        { id: 3, name: 'Charlie', marks: 92 },  
        { id: 4, name: 'David', marks: 70 },  
        { id: 5, name: 'Eva', marks: 88 },  
        { id: 6, name: 'Frank', marks: 64 },  
        { id: 7, name: 'Grace', marks: 95 },  
        { id: 8, name: 'Henry', marks: 76 },  
        { id: 9, name: 'Ivy', marks: 81 },  
        { id: 10, name: 'Jack', marks: 89 },  
    ];  

    return (
        <div>
        <LineChart width={500} height={400} data={students}>
            <XAxis dataKey="name"/>
            <YAxis></YAxis>
          <Line dataKey="marks" stroke='green'></Line>
        </LineChart>
        </div>
    );
};

export default LineCharts;