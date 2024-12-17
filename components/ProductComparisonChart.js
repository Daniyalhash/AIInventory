"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ProductComparisonChart = () => {
  const data = [
    { name: 'Jan', ProductA: 4000, ProductB: 2400 },
    { name: 'Feb', ProductA: 3000, ProductB: 1398 },
    { name: 'Mar', ProductA: 2000, ProductB: 9800 },
    { name: 'Apr', ProductA: 2780, ProductB: 3908 },
    { name: 'May', ProductA: 1890, ProductB: 4800 },
    { name: 'Jun', ProductA: 2390, ProductB: 3800 },
    { name: 'Jul', ProductA: 3490, ProductB: 4300 },
    { name: 'Aug', ProductA: 4000, ProductB: 2400 },
    { name: 'Sep', ProductA: 3000, ProductB: 1398 },
    { name: 'Oct', ProductA: 2000, ProductB: 9800 },
    { name: 'Nov', ProductA: 2780, ProductB: 3908 },
    { name: 'Dec', ProductA: 1890, ProductB: 4800 },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
      <LineChart width={700} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="ProductA" stroke="#8884d8" strokeWidth={2} />
        <Line type="monotone" dataKey="ProductB" stroke="#82ca9d" strokeWidth={2} />
      </LineChart>
    </div>
  );
};

export default ProductComparisonChart;
