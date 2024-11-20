const DOCUMENT = "TASK_OVERVIEW_";

const actions = {
  FETCH_START: DOCUMENT + "FETCH_START",
  FETCH_SUCCESS: DOCUMENT + "FETCH_SUCCESS",
  FETCH_ERROR: DOCUMENT + "FETCH_ERROR",
  UPDATE: DOCUMENT + "UPDATE",

  fetch: data => ({
    type: actions.LOGIN_REQUEST,
    data,
  }),
  update: data => ({
    type: actions.UPDATE,
    payload: data,
  }),
};
export default actions;
