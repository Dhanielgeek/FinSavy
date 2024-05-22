import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

interface DataItem {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const data: DataItem[] = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  // Add more data items as needed
];

const RenderLineChart: React.FC = () => (
  <LineChart width={550} height={200} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#00a6fb" />
    <CartesianGrid stroke="#ff6700" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
);

export default RenderLineChart;
