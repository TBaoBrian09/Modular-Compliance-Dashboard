import { Box, BoxWhite } from "../../components/utility/styles";
import TitlePage from "../../components/utility/uielemnts/titlePage";
import COMPLIANCE_STATUS from "../../data/RECENT_ACTIVITY.json"
import TimelineComponent from "./Timeline";

const RecentActivity = () => {
  return (
    <Box>
      <TitlePage title="Compliance Status" />
      <BoxWhite>
        <Box p="20px 10px">
          <TimelineComponent data={COMPLIANCE_STATUS} />
        </Box>
      </BoxWhite>
    </Box>
  )
}
export default RecentActivity