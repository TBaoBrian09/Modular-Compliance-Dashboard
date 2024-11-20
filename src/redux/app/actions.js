export function getView(width) {
  if (width >= 1200) {
    return "DesktopView";
  } else if (width >= 768) {
    return "TabView";
  }
  return "MobileView";
}

const actions = {
  TOGGLE_ALL: "TOGGLE_ALL",
  toggleAll: ({ windowWidth, windowHeight }) => ({
    type: actions.TOGGLE_ALL,
    view: getView(windowWidth),
    height: windowHeight,
    width: windowWidth
  })
};

export default actions;
