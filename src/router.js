import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import asyncComponent from "./helpers/AsyncFunc";
import { useAuthenticator } from "@aws-amplify/ui-react";

const Signin = asyncComponent(() => import("./containers/Page/signin"))
const App = asyncComponent(() => import("./containers/App/App"))

const PublicRouter = () => {
  const { user, route } = useAuthenticator();

  if (route === "loading") {
    return <div>Loading...</div>
  }

  return (
    <BrowserRouter>
      <Routes>
        {!user ? (
          <>
            <Route path="/signin" element={<Signin />} />
            <Route path="*" element={<Navigate to="/signin" />} />
          </>
        ) :
          <Route path="/*" element={<App />} />
        }
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default PublicRouter