import styled from "styled-components";

export const InformationStyled = styled.section`
    display: flex;
  width: 1200px;
  margin: 0  auto;
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
  & .Info__Left{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    text-align: left;
  }

  & .Info__Right{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
    height: 350px;
    text-align: left;
    @media only screen and (max-width: 800px) {
      height: 200px;
    }
    &--title{
      font-size: 3rem;
      color:#9326FF ;
      @media only screen and (max-width: 1200px) {
        font-size: 3vw;
      }
    }
    &--paragraph{
      font-size: 1.5rem;
      @media only screen and (max-width: 1200px) {
        font-size: 1.5vw;
      }
    }
}
`