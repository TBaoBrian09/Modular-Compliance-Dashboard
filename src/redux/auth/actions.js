const DOCUMENT = "AUTH_";

const actions = {
  CHECK_AUTHORIZATION: DOCUMENT + "CHECK_AUTHORIZATION",
  LOGIN_REQUEST: DOCUMENT + "LOGIN_REQUEST",
  LOGOUT: DOCUMENT + "LOGOUT",
  LOGIN_SUCCESS: DOCUMENT + "LOGIN_SUCCESS",
  LOGIN_ERROR: DOCUMENT + "LOGIN_ERROR",
  REQUEST_ROUTES: DOCUMENT + "REQUEST_ROUTES",
  REQUEST_ROUTES_SUCCESS: DOCUMENT + "REQUEST_ROUTES_SUCCESS",
  CHANGE_TOKEN: DOCUMENT + "CHANGE_TOKEN",

  checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),
  login: data => ({
    type: actions.LOGIN_REQUEST,
    data,
  }),
  logout: () => ({
    type: actions.LOGOUT,
  }),
  changeToken: data => ({
    type: actions.CHANGE_TOKEN,
    payload: data,
  }),
  getRoutes: () => ({
    type: actions.REQUEST_ROUTES,
  }),
};
export default actions;
