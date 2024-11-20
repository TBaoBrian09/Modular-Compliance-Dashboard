import React, { useState } from 'react'
import TopbarDropdownWrapper from './topbarDropdown.style.'
import { Avatar, Menu, Popover, Tooltip } from 'antd'
import { TopbarItem } from './topbar.style'
import authAction from "../../redux/auth/actions";
import { useAuthenticator } from '@aws-amplify/ui-react';

const { logout } = authAction;

const TopbarUser = () => {
  const [visible, setVisible] = useState(false);

  const { signOut } = useAuthenticator();

  const onLogout = () => {
    console.log('out');
    
    logout()
    signOut()
  }

  const items = [
    {
      label: (
        <span className="item" onClick={() => onLogout()}>
          <i className="ion-log-out" />
          Logout
        </span>
      ),
      key: 'logout',
      // icon: <i className="ion-log-out" />,
    },
  ]

  const content = (
    <TopbarDropdownWrapper className='user'>
      <Menu items={items} />
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