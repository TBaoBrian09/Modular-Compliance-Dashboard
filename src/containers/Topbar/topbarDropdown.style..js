const { default: styled } = require("styled-components");
const { palette } = require("styled-theme");


const TopbarDropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin: -12px -16px;
  width: 350px;
  min-width: 160px;
  flex-shrink: 0;
  border-radius: 5px;
  ${boxShadow("0 2px 10px rgba(0,0,0,0.2)")};

  @media only screen and (max-width: 767px) {
    width: 310px;
  }

  &.msg {
    @media only screen and (max-width: 500px) {
      right: -69px;
    }
  }

  &.task {
    width: 250px;
  }

  &.user {
    padding: 2px 0;
    width: 200px;
    .ant-menu-vertical {
      .ant-menu-item,
      .ant-menu-submenu-title {
        padding: 0 !important;
        margin-bottom: 0 !important;
      }
    }
    .item {
      cursor: pointer;
      font-size: 14px;
      color: ${palette("text", 1)};
      line-height: 1.1;
      padding: 7px 15px;
      display: flex;
      /* ${transition()}; */
      i {
        margin-right: 6px;
      }
      &:hover {
        background-color: ${palette("secondary", 6)};
      }
    }
  }
`;

export function boxShadow(shadow = "none") {
  return `
      -webkit-box-shadow: ${shadow};
      -moz-box-shadow: ${shadow};
      box-shadow: ${shadow};
  `;
}

export function transition(timing = 0.3) {
  return `
      -webkit-transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      -moz-transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      -ms-transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      -o-transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
  `;
}

export default TopbarDropdownWrapper;

