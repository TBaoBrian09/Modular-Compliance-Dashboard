import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="created_date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="low" stackId="a" fill="#8884d8" />
        <Bar dataKey="medium" stackId="a" fill="#82ca9d" />
        <Bar dataKey="high" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent