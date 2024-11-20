import actions from "./actions"

const initState = {
  token: null,
  use: {},
  routes: [],
  groups: [],
  loading: true,
  signing: false,
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        signing: true,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        idToken: action.token,
        user: action.user,
        signing: false,
      };
    case actions.LOGIN_ERROR:
      return {
        ...state,
        signing: false,
      };
    case actions.LOGOUT:
      return initState;
    case actions.REQUEST_ROUTES_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    default:
      return state;
  }
}