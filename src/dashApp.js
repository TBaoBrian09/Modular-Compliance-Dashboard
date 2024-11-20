import './App.css';

import theme from "./settings/themes"
import { ConfigProvider } from "antd"
import { ThemeProvider } from "styled-components"
import { Authenticator } from '@aws-amplify/ui-react';
import PublicRouter from "./router"
import { Amplify } from 'aws-amplify';
import { Provider } from "react-redux"
import store from "./redux/store"
import outputs from "./amplify_outputs.json"

Amplify.configure(outputs);

function DashApp() {
  return (
    <ConfigProvider locale="en">
      <ThemeProvider theme={theme}>
        <Authenticator>
          <Provider store={store}>
            <PublicRouter />
          </Provider>
        </Authenticator>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default DashApp;
