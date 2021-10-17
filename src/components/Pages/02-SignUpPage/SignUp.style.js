import styled from "styled-components";

export const SignUpStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100% ;
  height: 100vh;
  
  & .signForm{
    display: flex;
    flex-direction: column;
    width: 500px;
    min-height: 500px;
    align-items: center;
    justify-content: space-evenly;
    background-color:#8E1BFF ;
    z-index: 10;
    border-radius: 10px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    &__label{
      display: flex;
      flex-direction: column;
      width: 300px;

      &--title{
        margin-left: 10px;
      }
      &--input{
        height: 50px;
        width: 100%;
        border-radius: 20px;
        border:inset 3px white;
        text-align: center;
      }
    }
  }

`