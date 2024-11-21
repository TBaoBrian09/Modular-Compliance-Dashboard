const DOCUMENT = "AUTH_";

const actions = {
  LOGIN_REQUEST: DOCUMENT + "LOGIN_REQUEST",
  LOGOUT: DOCUMENT + "LOGOUT",
  LOGIN_SUCCESS: DOCUMENT + "LOGIN_SUCCESS",
  LOGIN_ERROR: DOCUMENT + "LOGIN_ERROR",
  CHANGE_TOKEN: DOCUMENT + "CHANGE_TOKEN",
  UPDATE: DOCUMENT + "UPDATE",

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
  update: data => ({
    type: actions.UPDATE,
    payload: data,
  }),
};
export default actions;
