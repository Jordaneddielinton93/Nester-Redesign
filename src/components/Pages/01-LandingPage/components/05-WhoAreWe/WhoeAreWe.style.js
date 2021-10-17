import styled from "styled-components";
import backgroundLeft from "../../../../images/BgRight.svg"
export const WhoAreWeStyled=styled.section`
  width: 100%;
  height: 600px;
  background-color: #8000ff;
background-image: linear-gradient(270deg, #8000ff 35%, #ffffff 36%);



  & .Who{
  display: flex;

    height: 100%;
    width: 1200px;
    margin: 0 auto;
    @media only screen and (max-width: 1200px) {
          width: 100%;
    }
    &_Left{
      position: relative;
      height: 100%;
      width: 40%;
      & .purpleBird{
        height:150px ;
        position: absolute;
        bottom: 0;
      }
    }
    &_Right{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 100%;
      width: 60%;
      background-image: url(${backgroundLeft});
      background-size: cover;
      background-position: left;
      padding-left: 80px;
      padding-right: 10px;
      color: white;
      &--title{
        width: 85%;
        font-size: 3vw;
        @media only screen and (min-width: 1200px) {
          font-size: 3rem;
        }
      }
      &--subtitle{
        width: 85%;
        font-size: 2vw;
        @media only screen and (min-width: 1200px) {
          font-size: 2rem;
        }

      }
      &--paragraph{
        width: 85%;
        font-size: 1.5vw;
        @media only screen and (min-width: 1200px) {
          font-size: 1rem;
        }
      }
    }
  }
`