import PieChartComponent from "./components/pieChart"
import { Box } from "../../components/utility/styles"
import BarChartComponent from "./components/barChart"

const ComplianceStatus = () => {
  return (
    <Box>
      <Box height="400px">
        <PieChartComponent />
      </Box>
      <Box height="400px">
        <BarChartComponent />
      </Box>
    </Box>
  )
}

export default ComplianceStatus