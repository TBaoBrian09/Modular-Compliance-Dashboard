/* eslint-disable react/display-name */
import { render, screen } from '@testing-library/react';
import ComplianceStatus from '../index';

// Mock các component con
jest.mock('../../../components/utility/uielemnts/titlePage', () => ({ title }) => <div>{title}</div>);
jest.mock('../components/pieChart', () => () => <div>PieChartComponent</div>);
jest.mock('../components/barChart', () => () => <div>BarChartComponent</div>);

jest.mock('../../../data/TASK_OVERVIEW.json', () => [
  { status: 'completed', count: 10 },
  { status: 'pending', count: 5 },
]);

jest.mock('../../../data/PRIORITY_DATA.json', () => [
  { priority: 'high', count: 7 },
  { priority: 'low', count: 3 },
]);

jest.mock('../const', () => ({
  taskStatusClasify: jest.fn().mockImplementation((data) => data), // Giả sử taskStatusClasify trả về chính dữ liệu truyền vào
}));

describe('ComplianceStatus Component', () => {
  it('renders TitlePage, PieChartComponent, and BarChartComponent with correct data', () => {
    render(<ComplianceStatus />);

     // Check if components are rendered
    expect(screen.getByText('Compliance Status')).toBeInTheDocument();
    expect(screen.getByText('PieChartComponent')).toBeInTheDocument();
    expect(screen.getByText('BarChartComponent')).toBeInTheDocument();
  });
});