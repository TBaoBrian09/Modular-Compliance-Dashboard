import React, { useEffect } from 'react'
import { Layout } from 'antd';
import Topbar from '../Topbar/index';
import AppHolder from './commonStyle';
import AppRouter from './AppRouter';
import Footer from '../Footer/index';
import { getSessionAws } from '../../hooks';
import Sidebar from '../Sidebar/index'
import { Box } from '../../components/utility/styles';
import { useDispatch } from 'react-redux';
import actions from "../../redux/auth/actions"

const { Content } = Layout;

const App = () => {
  const dispath = useDispatch();
  const getTokens = async () => {
    const token = await getSessionAws()
    if (token) {
      dispath(actions.update({
        userInfo: token.idToken.payload
      }))
    }
    return token
  }

  useEffect(() => {
    getTokens()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AppHolder>
      <Layout>
        <Topbar />
        <Box flex="true">
          <Sidebar />
          <Layout className="cz-main-layout">
            <Content className="app-content">
              <AppRouter />
            </Content>
          </Layout>
        </Box>
      </Layout>
      <Footer />
    </AppHolder>
  )
}

export default React.memo(App);