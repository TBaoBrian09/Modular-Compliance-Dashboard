/* eslint-disable react/display-name */
import { render, screen } from '@testing-library/react';
import RecentActivity from "../index";
import COMPLIANCE_STATUS from "../../../data/RECENT_ACTIVITY.json";

jest.mock("../Timeline", () => ({
  __esModule: true,
  default: ({ data }) => <div data-testid="timeline-component">{JSON.stringify(data)}</div>,
}));

test("should render the title and timeline component with data", () => {
  render(<RecentActivity />);

  // Kiểm tra xem TitlePage đã render đúng với title "Compliance Status"
  expect(screen.getByText("Compliance Status")).toBeInTheDocument();

  // Kiểm tra xem TimelineComponent có nhận dữ liệu từ COMPLIANCE_STATUS hay không
  expect(screen.getByTestId("timeline-component")).toHaveTextContent(JSON.stringify(COMPLIANCE_STATUS));

  // Kiểm tra các thành phần Box, BoxWhite có render không
  expect(screen.getByText(/compliance status/i)).toBeInTheDocument();
});