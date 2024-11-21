import { Avatar, Pagination, Timeline } from 'antd';
import { useState } from 'react'

import { Box } from '@components/utility/styles';
import { CsTimelineItem, WrapTimeLineContent } from './styles';

const TimelineComponent = ({ data }) => {
  const [current, setCurrent] = useState(1);
  const pageSize = 10; // Số item trên mỗi trang

  // Hàm để lấy dữ liệu theo trang
  const getDataForPage = (page) => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return data.slice(start, end);
  };

  // Hàm để cập nhật trang hiện tại
  const onPageChange = (page) => {
    setCurrent(page);
  };

  return (
    <Box flex flexColumn center>
      <Timeline mode="left">
        {getDataForPage(current).map((item, index) => (
          <CsTimelineItem
            key={index}
          >
            <WrapTimeLineContent flex gap={5}>
              <Box flex flexColumn width="100px">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Box style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  width: '100px'
                }}>
                  <strong>{item.user_involved}</strong>
                </Box>
              </Box>
              <Box flex flexColumn>
                <Box>
                  <strong>{item.action_description}</strong>
                </Box>
                <Box flex justify="flex-end" style={{ fontSize: 12, fontStyle: 'italic' }}>
                  {item.timestamp}
                </Box>
              </Box>
            </WrapTimeLineContent>
          </CsTimelineItem>
        ))}
      </Timeline>
      <Pagination
        current={current}
        total={data?.length || 0}
        pageSize={pageSize}
        onChange={onPageChange}
        showSizeChanger={false}
        style={{ marginTop: 16 }}
      />
    </Box>
  )
}

export default TimelineComponent