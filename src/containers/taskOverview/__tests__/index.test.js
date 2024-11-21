/* eslint-disable react/display-name */
import { render, screen } from '@testing-library/react';
import TaskOverview from "../index";
import taskOverviewData from "../../../data/TASK_OVERVIEW.json";
import { useDispatch, useSelector } from "react-redux";

// Mock TableComponent để kiểm tra dữ liệu được truyền vào
jest.mock("../table", () => ({
  __esModule: true,
  default: ({ data, loading }) => (
    <div data-testid="table-component">
      {loading ? "Loading..." : JSON.stringify(data)}
    </div>
  ),
}));

// Mock Redux hooks
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

test("should render title and TableComponent with data", async () => {
  // Mock useSelector trả về dữ liệu từ Redux store
  useSelector.mockReturnValue({ data: taskOverviewData, loading: false });

  // Mock useDispatch để kiểm tra việc dispatch
  const dispatch = jest.fn();
  useDispatch.mockReturnValue(dispatch);

  render(<TaskOverview />);

  // Kiểm tra xem TitlePage đã render đúng với title "Task Overview"
  expect(screen.getByText("Task Overview")).toBeInTheDocument();

  // Kiểm tra xem TableComponent có nhận đúng dữ liệu từ Redux store hay không
  expect(screen.getByTestId("table-component")).toHaveTextContent(
    JSON.stringify(taskOverviewData)
  );
});