import styled from "styled-components";

export const OurOfferStyled= styled.section`
  height: 600px;
  width: 100%;
  background-color: #8000FF;

  & .OurOffer{
    display: flex;
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    @media only screen and (max-width: 1200px) {
      width: 100%;
    }
    &__Left{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 100%;
    width: 50%;
    padding: 40px;
    text-align: left;
    color: white;
    &--title{
      font-size: 3vw;
    }
    &--subtitle{
      font-size: 2vw;
    }

    }
    &__Right{
      display: flex;
      align-items: flex-end;
      height: 100%;
      width: 50%;
      & #wing{
      animation: shake 2s ease infinite;
      
      }
      @keyframes shake {
        0%, 100% {transform: translateX(0);}
        10%, 30%, 90% {transform: translate(-2px,0px) rotate(1deg);}
        20%, 40%, 60%, 80% {transform: translateX(5px);}
      }

    }
  }
  
`