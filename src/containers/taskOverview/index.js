import TableComponent from "./table"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import actions from "../../redux/tashOverview/actions"
import taskOverviewData from "../../data/TASK_OVERVIEW.json"
import { Box, BoxWhite } from "../../components/utility/styles"
import TitlePage from "../../components/utility/uielemnts/titlePage"

const TaskOverview = () => {
  const { data, loading } = useSelector(state => state.TaskOverview)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.update({ data: taskOverviewData }))
  }, [dispatch])
  return (
    <Box>
      <TitlePage title="Task Overview" />
      <BoxWhite>
        <TableComponent data={data} loading={loading} />
      </BoxWhite>
    </Box>
  )
}

export default TaskOverview