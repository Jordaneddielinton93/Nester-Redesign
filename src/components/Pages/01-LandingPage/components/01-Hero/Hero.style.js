import styled from "styled-components";

export const HeroStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  max-width: 100%;
  min-height: 90vh;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 80px;
  & .Hero-title{
    width: 100%;
    height: 300px;
    z-index: 10;
    color: #504c5e;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    &-h1{
      font-size: 3rem;
    }
  }



  & .heroBackground{
    z-index: 10;
    
    & #bodyandbeak{
      
      animation: fly 3s  forwards ;
      @keyframes fly {
      0%  { transform: translate(-300px,-100px) rotate(90deg) }
      30% { opacity: 1; }
      60% { opacity:1 }
      50% { opacity:1 }
      90% { transform: translate(0px,-10px) }
      100% { opacity:1 }
      }
      &:hover{
        animation: shake 2s ease infinite;
        cursor: pointer;
      }

    }

    & #wing{
      animation: shake 2s ease infinite;
      
    }
    @keyframes shake {
      0%, 100% {transform: translateX(0);}
      10%, 30%, 90% {transform: translate(-5px,-2px) rotate(1deg);}
      20%, 40%, 60%, 80% {transform: translateX(10px);}
    }
    
    & #OpenEye{
      
      animation: flash 3s  infinite alternate;
      @keyframes flash {
      30% { opacity: 0; }
      60% { opacity:1 }
      50% { opacity:1 }
      70% { opacity:0 }
      100% { opacity:0 }
      }
    }
    & #ClosedEye{
      animation: dash 3s  infinite alternate;

      @keyframes dash {
      30% { opacity: 1; }
      60% { opacity:0 }
      50% { opacity:0 }
      70% { opacity:1 }
      100% { opacity:1 }
      }
    }
    & #wing{

    }
    
    
  }
`