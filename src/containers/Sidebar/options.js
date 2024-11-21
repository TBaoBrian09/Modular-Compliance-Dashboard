import { ContainerOutlined, FundOutlined, PieChartOutlined } from "@ant-design/icons"

const options = [
  {
    key: "/",
    label: "Task Overview",
    icon: <ContainerOutlined />
  },
  {
    key: "/compliance-status",
    label: "Compliance Status",
    icon: <PieChartOutlined />
  },
  {
    key: "/recent-activity",
    label: "Recent Activity",
    icon: <FundOutlined />
  }
]

export default options