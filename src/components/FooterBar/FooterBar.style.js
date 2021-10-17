import styled from "styled-components";

export const FooterBarStyled = styled.footer`
  width: 100%;
  height: 400px;
  background-color: #504C5E;
  & .Founders{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    max-width: 1200px;
    width: 1200px;
    height: 100%;
    color: white;
    @media only screen and (max-width: 1199px) {
      width: 100%;
    }
    &__TopNav{
      display: flex;
      justify-content:space-between;
      align-items: center;
      width: 90%;
      & a{
        color: #00CFEB;
      }

      &--Logo{
        font-size: 2rem;
        color: #00CFEB;
        font-size: 3rem;
        font: bold 200px;
        text-shadow: 2px 2px 3px black;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
      
      }
      &__List{
        display: flex;
        &--item{
          margin-right: 15px;
        }
      }
    }
    &__Paragraph{

      width: 90%;
    }

    &__Contact{
      width: 90%;
      display: flex;
      justify-content: space-between;
      &--Links{
        color: #00CFEB;
        font-size: 2rem;
        cursor: pointer;
      }
    }
  }
`