import { Route, Routes } from 'react-router-dom'
import asyncComponent from "../../helpers/AsyncFunc"

const routes = [
  {
    path: "",
    component: asyncComponent(() => import("../Overview"))
  },
  {
    path: "compliance-status",
    component: asyncComponent(() => import("../complianceStatus"))
  },
  {
    path: "recent-activity",
    component: asyncComponent(() => import("../recentActivity"))
  }
]

const NotFound = asyncComponent(() => import("../Page/404"))
const AppRouter = () => {
  const routeComponents = []
  routes.forEach(({path, exact = true, component: Elem}) => {
    routeComponents.push(<Route key={path} path={exact ? `/${path}` : `/${path}/*`} element={<Elem />} />);
  })

  console.log('routeComponents', routeComponents);
  

  return (
    <Routes>
      {routeComponents}
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter