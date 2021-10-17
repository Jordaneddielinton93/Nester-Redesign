import styled from "styled-components";

export const FounderStyled = styled.section`
display: flex;
justify-content: center;
  height: 400px;
  width: 100%;
  background-color:#8000FF ;
  & .Founders{
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    color: white;
    @media only screen and (max-width: 1199px) {
      width: 100%;
    }
    &--quote{
      width: 90%;
      font-size: 1.3vw;
      @media only screen and (min-width: 1199px) {
        font-size: 1rem;
      }
    }
    &--names{
      width: 90%;
      font-size: 1.5vw;
      @media only screen and (min-width: 1199px) {
        font-size: 2rem;

      }

    }
  }
`