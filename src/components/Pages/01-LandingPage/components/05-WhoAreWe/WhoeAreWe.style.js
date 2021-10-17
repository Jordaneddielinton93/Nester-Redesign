import styled from "styled-components";
import backgroundLeft from "../../../../images/BgLeft.svg"
export const WhoAreWeStyled=styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  & .Help_Left{
    
    height: 100%;
    width: 50%;
  }
  & .Help_Right{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    width: 50%;
    background-image: url(${backgroundLeft});
    background-size: cover;
    background-position: right;
    transform: rotate(180deg);
  }
`