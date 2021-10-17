import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./FireBase";

const FireUserChecker = () => {
  let [U_id,setU_id]=useState(false)
  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setU_id(uid)
        // ...
      } else {
        // User is signed out
        // ...
        setU_id(false)
      }
    });
    


  })



  return [U_id];
}
 
export default FireUserChecker;