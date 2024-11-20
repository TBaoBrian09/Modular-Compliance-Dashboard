import { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Legend } from 'recharts';
import { Box } from "@components/utility/styles"
import { Col, Row } from 'antd';
import styled from 'styled-components';
import _ from 'lodash';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const PieChartComponent = () => {
  const [state, setState] = useState({
    activeIndex: 0
  })

  const onPieEnter = (_, index) => {
    setState({
      activeIndex: index,
    });
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          activeIndex={state.activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
      {/* <Legend
        content={<CustomLegend total={100} />}
        iconSize={14}
        layout="horizontal"
        verticalAlign="bottom"
        align="center"
      /> */}

    </ResponsiveContainer>
  )
}

const CustomLegend = ({ payload, total }) => {
  return (
    <Box>
      <Row gutter={[5, 5]}>
        {payload.map((entry, index) => {
          const percent = ((_.get(entry, "payload.total") / total) * 100).toFixed(2) || 0;
          return (
            <Col span={12} key={`legend-${index}`} style={{ color: entry.color }}>
              <Wrap flex justify="start" gap={5}>
                <div className="box-legand" style={{ backgroundColor: entry.color }} />
                <span className="text-legand">
                  {entry.value} {`(${percent}%)`}
                </span>
              </Wrap>
            </Col>
          );
        })}
      </Row>
    </Box>
  );
};

const Wrap = styled(Box)`
  .box-legand {
    width: 15px;
    height: 15px;
    min-width: 15px;
  }
  .text-legand {
    font-size: 12px;
    font-weight: bold !important;
  }
`;

export default PieChartComponent