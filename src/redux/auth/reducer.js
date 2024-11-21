import actions from "./actions"

const initState = {
  token: null,
  userInfo: {},
  routes: [],
  groups: [],
  loading: true,
  signing: false,
}

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
  // case actions.LOGIN_REQUEST:
  //   return {
  //     ...state,
  //     signing: true,
  //   };
  // case actions.LOGIN_SUCCESS:
  //   return {
  //     ...state,
  //     idToken: action.token,
  //     user: action.user,
  //     signing: false,
  //   };
  // case actions.LOGIN_ERROR:
  //   return {
  //     ...state,
  //     signing: false,
  //   };
  // case actions.LOGOUT:
  //   return initState;
  case actions.UPDATE:
    return {
      ...state,
      ...payload,
      isLoading: true,
    };
  default:
    return state;
  }
}