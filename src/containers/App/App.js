import Topbar from '../Topbar/index';
import { Layout } from 'antd';
import React from 'react'
import AppHolder from './commonStyle';
import AppRouter from './AppRouter';
import Footer from '../Footer/index';

const { Content } = Layout;

const App = () => {
  return (
    <AppHolder>
      <Layout>
        <Topbar />
        <Layout className="cz-main-layout">
          <Content className="cz-content">
            <AppRouter />
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </AppHolder>
  )
}

export default React.memo(App);