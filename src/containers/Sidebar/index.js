

import { Menu } from 'antd'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { createChangeParams } from "../../helpers/func"

import options from './options'
import _ from 'lodash'
import queryString from 'query-string'
import { Box } from '../../components/utility/styles'

const SidebarContainer = () => {
  const [isShowMenu, setIsShowMenu] = useState(true)

  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = useMemo(() => queryString.parse(searchParams.toString()), [searchParams]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeSearchParams = useCallback(createChangeParams(setSearchParams), [setSearchParams]);

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

  const [, path1, path2] = pathname.split("/");
  const path = `/${path1}`
  const selectedKeys = [path, `${path}/${path2}`]

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

  if (!isShowMenu) return null

  return (
    <Box width="256px">
      <Menu style={{ height: '100%' }} mode='vertical' selectedKeys={selectedKeys} items={menuItems} />
    </Box>
  )
}

export default SidebarContainer