import React, { useState } from 'react'
import TopbarDropdownWrapper from './topbarDropdown.style.'
import { Avatar, Menu, Popover, Tooltip } from 'antd'
import { TopbarItem } from './topbar.style'
import { useDispatch } from 'react-redux'
import authAction from "../../redux/auth/actions";

const { logout } = authAction;

const TopbarUser = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const content = (
    <TopbarDropdownWrapper className='user'>
      <Menu>
        <Menu.Item>
          <span className="item" onClick={() => dispatch(logout())}>
            <i className="ion-log-out" />
            Logout
          </span>
        </Menu.Item>
      </Menu>
    </TopbarDropdownWrapper>
  )

  return (
    <TopbarItem>
      <Popover
        content={content}
        trigger="click"
        open={visible}
        onOpenChange={setVisible}
        // arrowPointAtCenter={true}
        placement="bottomLeft"
      >
        <Tooltip>
          <Avatar size={34} style={{ background: "#18b4c9" }}>
            Bao
          </Avatar>
        </Tooltip>
      </Popover>
    </TopbarItem>
  )
}

export default TopbarUser