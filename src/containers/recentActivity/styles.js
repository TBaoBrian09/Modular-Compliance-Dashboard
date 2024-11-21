import styled from "styled-components";
import { Box } from "@components/utility/styles";
import { Timeline } from "antd";

export const WrapTimeLineContent = styled(Box)`
  border-radius: 8px;
  padding: 2px 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
  max-height: 120px;
  /* overflow-x: scroll; */
`

export const CsTimelineItem = styled(Timeline.Item)`
  max-height: 100px;

`