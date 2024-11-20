import actions from "./actions";

const initState = {
  data: [],
  loading: false,
  total: 0,
  query: null,
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.FETCH_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actions.FETCH_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoading: false,
      };
    case actions.SET_DATA: {
      return {
        ...state,
        data: { ...state.data, ...payload },
      };
    }
    case actions.UPDATE:
      return {
        ...state,
        ...payload,
        isLoading: true,
      };
    case actions.RESET:
      return initState;
    default:
      return state;
  }
}
