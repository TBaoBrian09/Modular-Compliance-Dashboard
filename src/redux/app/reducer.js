import actions, { getView } from "./actions";

const initState = {
  view: getView(window.innerWidth),
  height: window.innerHeight,
  width: window.innerWidth,
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actions.TOGGLE_ALL:
      if (state.view !== action.view || action.height !== state.height || state.width !== action.width) {
        const height = action.height ? action.height : state.height;
        return {
          view: action.view,
          height,
          width: action.width,
        };
      }
      break;
    default:
      return state;
  }
  return state;
}

export const selectViewDevice = (state) => state.App.view === "MobileView" || state.App.view === "TabView";

export default reducer;
