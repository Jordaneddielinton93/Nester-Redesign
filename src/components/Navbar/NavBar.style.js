import styled from "styled-components";

export const NavBarStyled= styled.nav`
  position: absolute;
  top: 0;
  width: 100vw;
  height:80px;
  background-color: #504c5e;
  z-index: 20;
  & .Nav{
    display: flex;
    justify-content: space-between;
    width: 1200px;
    height: 100%;
    margin: 0px auto;
    @media only screen and (max-width: 1200px) {
      width: 100%;
      
    }
    & a{
        color:#00CFEB ;
      }

    &__Logo{
      position: relative;
      display: flex;
      align-items: center;
      margin-left: 20px;
      font-size: 3rem;
      font: bold 200px;
      color: transparent;
      text-shadow: 2px 2px 3px black;
      -webkit-background-clip: text;
        -moz-background-clip: text;
              background-clip: text;
      
      
    }

    &__List{
      display: flex;
      align-items: center;
      height: 100%;
      &--item{
        margin-right: 30px;
      }
      &--signIn{
        margin-right: 20px;
        border:#00CFEB solid 3px ;
        padding: 2px 20px;
        border-radius:10px ;
        background-color: white;
        & a{
          color: #504c5e;
          font-weight: 500;
        }
      }
    }
  }
`