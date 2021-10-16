import styled from "styled-components";
import backgroundLeft from "../../../../images/BgLeft.svg"
export const HowCanWeHelpStyled=styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  & .Help_Left{
    height: 100%;
    width: 50%;
    background-image: url(${backgroundLeft});
    background-size: cover;
    background-position: right;
  }
  & .Help_Right{
    height: 100%;
    width: 50%;
  }
`