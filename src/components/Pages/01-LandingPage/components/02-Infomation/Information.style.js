import styled from "styled-components";

export const InformationStyled = styled.section`
  height: 500px;
  width: 1200px;
  margin: 0  auto;
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
  & .Info__Left{
    width: 50%;
    height: 100%;
    background-color: black;
  }

  & .Info__Right{
    width: 50%;
    height: 100%;

}
`