import theme from "./settings/themes"
import { ConfigProvider } from "antd"
import { ThemeProvider } from "styled-components"
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import PublicRouter from "./router"
import { Amplify } from 'aws-amplify';
import { Provider } from "react-redux"
import store from "./redux/store"
import outputs from "./amplify_outputs.json"
import './App.css';

Amplify.configure(outputs);

function AppContent() {
  const { route } = useAuthenticator((context) => [context.route]);
  
  // Nếu người dùng đang ở trạng thái "authenticated"
  if (route === "authenticated") {
    return <PublicRouter />;
  }

  // Nếu chưa đăng nhập, điều hướng đến "/signin"
  return null; // UI sẽ được tùy chỉnh ở `PublicRouter` hoặc `Signin`
}

function DashApp() {
  return (
    <ConfigProvider locale="en">
      <ThemeProvider theme={theme}>
        <Authenticator>
          <Provider store={store}>
            <AppContent />
          </Provider>
        </Authenticator>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default DashApp;
