const actions = {
  CHECK_AUTHORIZATION: "CHECK_AUTHORIZATION",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGOUT: "LOGOUT",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  REQUEST_ROUTES: "REQUEST_ROUTES",
  REQUEST_ROUTES_SUCCESS: "REQUEST_ROUTES_SUCCESS",

  checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),
  login: data => ({
    type: actions.LOGIN_REQUEST,
    data,
  }),
  logout: () => ({
    type: actions.LOGOUT,
  }),
  getRoutes: () => ({
    type: actions.REQUEST_ROUTES,
  }),
};
export default actions;
