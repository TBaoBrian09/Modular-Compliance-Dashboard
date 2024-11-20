

import { Menu } from 'antd'
import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import options from './options'
import _ from 'lodash'

const SidebarContainer = () => {
  const [isShowMenu, setIsShowMenu] = useState(true)

  const navigate = useNavigate()

  const menuItems = useMemo(() => {
    return _.map(options, o => ({
      key: o.key,
      label: (
        <Link to={o.key}>
          {o.label}
        </Link>
      )
    }));
  }, [])

  const selectedKeys = ""

  useEffect(() => {
    if (menuItems.length <= 1) {
      setIsShowMenu(false)
      if (menuItems[0] && menuItems[0].key) {
        navigate(menuItems[0].key)
      }
    } else {
      setIsShowMenu(true)
    }
  }, [menuItems, navigate])

  console.log('menuItems', {menuItems, isShowMenu});
  

  if (!isShowMenu) return null

  return <Menu mode='horizontal' selectedKeys={selectedKeys} items={menuItems} />
}

export default SidebarContainer