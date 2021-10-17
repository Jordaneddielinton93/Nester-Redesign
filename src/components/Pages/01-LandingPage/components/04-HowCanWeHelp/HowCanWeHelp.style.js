import styled from "styled-components";
import backgroundLeft from "../../../../images/BgLeft.svg"
export const HowCanWeHelpStyled=styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  background-color: #8000ff;
background-image: linear-gradient(90deg, #8000ff 45%, #ffffff 47%);


  & .Help{
    width: 1200px;
    margin: 0px auto;
    &_Left{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 100%;
      width: 50%;
      background-image: url(${backgroundLeft});
      background-size: cover;
      background-position: right;
      padding-left: 40px;
      z-index: 11;
      color: white;
      @media only screen and (max-width: 900px) {
          width: 65%;
      }
      @media only screen and (max-width: 600px) {
          width: 85%;
      }

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
    &_Right{
      height: 100%;
      width: 50%;
      @media only screen and (max-width: 900px) {
          width: 35%;
      }
      @media only screen and (max-width: 600px) {
          width: 15%;
      }
      
    }
  }
`