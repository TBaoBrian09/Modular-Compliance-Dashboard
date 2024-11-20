import TableComponent from "./table"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import actions from "../../redux/tashOverview/actions"
import taskOverviewData from "../../data/TASK_OVERVIEW.json"

const TaskOverview = () => {
  const { data, total, loading } = useSelector(state => state.TaskOverview)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.update({ data: taskOverviewData }))
  }, [])
  return (
    <div>
      <TableComponent data={data} loading={loading} total={total} />
    </div>
  )
}

export default TaskOverview