const { default: styled } = require("styled-components");
const { palette } = require("styled-theme");



const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #d7eef4;
  height: 45px;
`;

const TopbarLeft = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  .logo {
    height: 100%;
    padding: 0 14px;
    display: flex;
    align-items: center;
    background-color: #18b4ca;
  }
  img {
    width: 80px;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const TopbarRight = styled.ul`
  display: flex;
  align-items: center;
  margin: 0px;
  width: 100%;
  justify-content: flex-end;
  @media only screen and (max-width: 767px) {
    margin-right: 0;
  }
`;

const TopbarItem = styled.li`
  margin-left: 0;
  margin-right: 30px;
  cursor: pointer;
  line-height: normal;
  position: relative;
  display: inline-block;
  @media only screen and (max-width: 768px) {
    margin-right: 25px;
  }
  .icon-icon {
    font-size: 24px;
    color: ${palette("text", 0)};
    line-height: 1;
  }
  .icon-number {
    font-size: 11px;
    color: #fff;
    background-color: ${palette("secondary", 1)};
    height: 17px;
    min-width: 17px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -4px;
    left: 14px;
    padding: 0 4px;
    border-radius: 30px;
  }
  .icon {
    position: relative;
    line-height: normal;
  }

  &.error {
    .icon-icon {
      color: ${palette("warning", 0)} !important;
    }
    .icon-number {
      background-color: ${palette("error", 0)};
    }
  }

  &.msg {
    .icon-number {
      background-color: ${palette("color", 3)};
    }
    .icon-icon::before {
      transform: rotateY(180deg);
    }
  }
`;

export default Topbar;
export { TopbarLeft, TopbarRight, TopbarItem };
