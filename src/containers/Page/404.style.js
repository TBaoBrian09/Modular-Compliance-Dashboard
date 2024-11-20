import styled from "styled-components";
import { palette } from "styled-theme";

const FourZeroFourStyleWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  .content-404 {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;

    h1 {
      font-size: 84px;
      font-weight: 700;
      color: ${palette("secondary", 2)};
      line-height: 1;
      margin: 0 0 25px;
    }

    h3 {
      font-size: 24px;
      font-weight: 400;
      color: ${palette("text", 1)};
      margin: 0 0 10px;
      line-height: 1.2;
    }

    p {
      color: ${palette("text", 3)};
      margin: 0 0 20px;
    }

    button {
      font-weight: 500;
      text-align: center;
      border: 0;
      line-height: 1.5;
      padding: 0 30px;
      font-size: 13px;
      height: 36px;
      cursor: pointer;
      color: #ffffff;
      background-color: ${palette("primary", 0)};
      border-radius: 18px;

      a {
        color: #ffffff;
        text-decoration: none;
      }

      &:focus {
        outline: 0;
        box-shadow: none;
      }
    }
  }

  .artwork-404 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 100px;
    height: 500px;
    img {
      max-height: 100%;
    }
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    .content-404 {
      order: 2;
      margin-top: 20px;
      align-items: center;
      text-align: center;
      flex-direction: column;
    }
    .artwork-404 {
      height: 250px;
      margin-left: 0;
    }
  }
`;

export default FourZeroFourStyleWrapper;
