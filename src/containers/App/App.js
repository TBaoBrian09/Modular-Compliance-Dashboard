import Topbar from '../Topbar/index';
import { Layout } from 'antd';
import React, { useEffect } from 'react'
import AppHolder from './commonStyle';
import AppRouter from './AppRouter';
import Footer from '../Footer/index';
import { getSessionAws } from '../../hooks';
import Sidebar from '../Sidebar/index'
import { Box } from '../../components/utility/styles';

const { Content } = Layout;

const App = () => {
  const getTokens = async () => {
    const token = await getSessionAws()
    return token
  }

  useEffect(() => {
    const token = getTokens
  }, [])

  return (
    <AppHolder>
      <Layout>
        <Topbar />
        <Box flex>
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