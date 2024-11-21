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

  if (route === "authenticated") {
    return <PublicRouter />;
  }
  return null;
}

function DashApp() {

  const formFields = {
    signUp: {
      name: {
        label: 'Full Name',
        placeholder: 'Enter your full name',
        isRequired: true, // Make this field required
      },
    },
  }

  return (
    <ConfigProvider locale="en">
      <ThemeProvider theme={theme}>
        <Authenticator signUpAttributes={['address',
          'birthdate',
          'email',
          'gender',
          'name',
          'phone_number',
          'picture',
          'zoneinfo',]}
          formFields={formFields}
        // socialProviders={['google']}
        >
          <Provider store={store}>
            <AppContent />
          </Provider>
        </Authenticator>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default DashApp;
