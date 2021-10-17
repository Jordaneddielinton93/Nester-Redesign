import Buttons from "../../Buttons/Buttons";
import Bubbles from "../01-LandingPage/components/01-Hero/components/Bubbles";
import { SignUpStyled } from "./SignUp.style";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FireBase/FireBase";
import { useRef, useState} from "react";

const SignUp = () => {
  
let email = useRef()
let password = useRef()
let [errorMsg,setErrorMsg]=useState(false)
  
function validateUser(e){

  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  
    .then((userCredential) => {
      console.log(userCredential)

      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // setShowSate(user)
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      if(errorMessage.includes("already-in-use")){
        setErrorMsg("email already in use")
      }else if(errorMessage.includes("auth/weak-password")){
        setErrorMsg("weak password minimum 6 characters")
      }else if(errorMessage.includes("auth/invalid-email")){
        setErrorMsg("invalid-email")
      }else{
        setErrorMsg(errorMessage)
      }

      
      // ..
    });

}


  return ( 
    <SignUpStyled>

      <div className="signForm">

        <label 
        className="signForm__label"
        htmlFor="email">
          <h1 className="signForm__label--title">Email</h1>
          <input className="signForm__label--input" ref={email}
           type="email" />

        </label>

        <label 
        className="signForm__label"
        htmlFor="Password">
          <h1 className="signForm__label--title" >Password</h1>

          <input className="signForm__label--input" ref={password}
           type="password" />
          {errorMsg && <h3 style={{
            textAlign:"center",
            color:"red",
            marginTop:"10px"
            }}>{errorMsg}</h3>}

        </label>
      {/* <button onClick={(e)=>validateUser(e)}>signup</button> */}
        <Buttons 
           text="Sign Up"
           width="300px"
           fontsize="1rem"

           border={`inset 3px ${errorMsg?"red":"white"}`}
            backColor="#8000FF"
            backImage="linear-gradient(to right, #bd7aff 0%, white  51%, #870fff  100%)"
            Color="white"
            fireOnClick={validateUser}
           />

        <h2>Dont have an account ? Sign up</h2>
      </div>
      <Bubbles/>
    </SignUpStyled>
   );
}
 
export default SignUp;