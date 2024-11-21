import TitlePage from "../../components/utility/uielemnts/titlePage"
import { Box, BoxWhite } from "../../components/utility/styles"
import PieChartComponent from "./components/pieChart"
import BarChartComponent from "./components/barChart"
import COMPLIANCE_STATUS from "../../data/TASK_OVERVIEW.json"
import PRIORITY_DATA from "../../data/PRIORITY_DATA.json"
import { taskStatusClasify } from "./const"

const ComplianceStatus = () => {
  const dataStatisticStatus = taskStatusClasify(COMPLIANCE_STATUS)
  const dataStatisticPriority = PRIORITY_DATA

  return (
    <Box>
      <TitlePage title="Compliance Status" />
      <Box flex flexColumn gap={10}>
        <BoxWhite>
          <Box height="400px">
            <PieChartComponent data={dataStatisticStatus} />
          </Box>
        </BoxWhite>
        <BoxWhite>
          <Box height="400px">
            <BarChartComponent data={dataStatisticPriority} />
          </Box>
        </BoxWhite>
      </Box>
    </Box>
  )
}

export default ComplianceStatus