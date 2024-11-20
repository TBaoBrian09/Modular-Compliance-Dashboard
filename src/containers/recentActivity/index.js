import COMPLIANCE_STATUS from "../../data/RECENT_ACTIVITY.json"
import { BoxWhite } from "@components/utility/styles";
import TimelineComponent from "./Timeline";

const RecentActivity = () => {
  return (
    <BoxWhite>
      <TimelineComponent data={COMPLIANCE_STATUS} />
    </BoxWhite>

  )
}
export default RecentActivity