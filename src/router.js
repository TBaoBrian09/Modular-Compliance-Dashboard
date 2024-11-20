import { useSelector } from "react-redux"
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import asyncComponent from "./helpers/AsyncFunc";

const Signin = asyncComponent(() => import("./containers/Page/signin"))
const App = asyncComponent(() => import("./containers/App/App"))

function RestrictedRoute() {
  const isLoggedIn = useSelector(state => !!state.Auth.idToken);
  const location = useLocation()

  if (isLoggedIn) return <App />

  return <Navigate to="/signin" state={{ from: location }} />
}


const PublicRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/*" element={<RestrictedRoute />} />
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default PublicRouter