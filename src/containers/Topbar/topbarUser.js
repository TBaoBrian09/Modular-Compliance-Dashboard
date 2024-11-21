import React from 'react'
import _ from "lodash";
import { Avatar, Button } from 'antd'
import { useAuthenticator } from '@aws-amplify/ui-react';
import { LogoutOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import { Box } from '@components/utility/styles';
import authAction from "../../redux/auth/actions";

const { logout } = authAction;

const TopbarUser = () => {
  const { userInfo } = useSelector(state => state.Auth)
  const { signOut } = useAuthenticator();

  const onLogout = () => {
    logout()
    signOut()
  }

  return (
    <Box flex justify="flex-end" gap={10} pr={10}>
      <div style={{display: 'flex', gap: 10, alignItems: 'center'}}>
        {_.get(userInfo, 'name')}
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={34} style={{ background: "#18b4c9" }} />
      </div>
      <Button onClick={() => onLogout()} color='danger' variant='solid' icon={<LogoutOutlined />}>Logout</Button>
    </Box>
  )
}

export default TopbarUser