import { TagsTask } from "@components/utility/styles";
import { Table } from "antd"

const TableComponent = ({ data, loading }) => {
  // Hàm chuyển đổi từ chuỗi ngày tháng thành đối tượng Date
  const parseDate = (dateStr) => {
    return new Date(dateStr);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      onFilter: (value, record) => record.title.indexOf(value) === 0,
      sorter: (a, b) => a.title.length - b.title.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Assigned person',
      dataIndex: 'assign_person',
      key: 'assign_person',
      onFilter: (value, record) => record.assign_person.indexOf(value) === 0,
      sorter: (a, b) => a.assign_person.length - b.assign_person.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => <TagsTask className={status}>{status}</TagsTask>,
      filters: [
        { value: 'overdue', text: 'overdue' },
        { value: 'progress', text: 'progress' },
        { value: 'pending', text: 'pending' },
        { value: 'completed', text: 'completed' }
      ],
      onFilter: (value, record) => record.status === value,  // So sánh chính xác với giá trị của status
      sorter: (a, b) => a.status.length - b.status.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => parseDate(a.date) - parseDate(b.date),  // Sắp xếp theo giá trị Date
      sortDirections: ['descend', 'ascend'],
    },
  ];

  return (
    <Table
      rowKey="_id"
      loading={loading}
      columns={columns}
      dataSource={data}
    />
  )
}

export default TableComponent