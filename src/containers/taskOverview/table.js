import React, { useState } from 'react'
import { Table } from "antd"

const TableComponent = ({ data, total, loading }) => {
  const [selectionType, setSelectionType] = useState('checkbox');

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Assigned person',
      dataIndex: 'assign_person',
      key: 'assign_person',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <Table
      rowKey="_id"
      columns={columns}
      dataSource={data}
      rowSelection={{
        type: selectionType,
        ...rowSelection
      }}
    />
  )
}

export default TableComponent