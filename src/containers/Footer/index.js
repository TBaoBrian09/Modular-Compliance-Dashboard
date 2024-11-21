import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer
      style={{
        textAlign: 'center',
      }}
      className='app-footer'
    >
      Modular Compliance Dashboard ©{new Date().getFullYear()} Created by THAIBAO
    </Footer>
  )
}

export default FooterComponent