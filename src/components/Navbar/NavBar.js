import { useContext, useEffect, useState } from "react";
import { NavBarStyled } from "./NavBar.style";
import { Link } from "react-router-dom";
import { EggImg } from "../images/Egg";
import { pageContext } from "../App/App";
import { FcBusinessman } from 'react-icons/fc';
import { auth } from "../FireBase/FireBase";
import { signOut } from "firebase/auth"
const NavBar = () => {

  let userID= useContext(pageContext)
  // const [offSetY,setOffsetY] = useState(0)


  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(()=>{

  // window.addEventListener("scroll",handleScroll);

  // return () => window.removeEventListener("scroll",handleScroll);

  // },[])

  // console.log(offSetY)
  function signout(){
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
  }
  let [onHoverSignOut,setOnHoverSignOut]=useState(false)


  return ( 
    <NavBarStyled>
      <div className="Nav">

        <h1 className="Nav__Logo"><Link to="/">nester {EggImg}</Link></h1>

        <ul className="Nav__List">
          <li className="Nav__List--item"><Link to="/">Our Offer</Link></li>
          <li className="Nav__List--item"><Link to="/">Who we are</Link></li>
          <li className="Nav__List--item"><Link to="/">Our Journey</Link></li>
          <li className="Nav__List--item"><Link to="/">Contact</Link></li>

          
          
            {userID?
            <li className="Nav__List--signIn"
             onClick={signout}
             onMouseEnter={()=>setOnHoverSignOut(!onHoverSignOut)}
             onMouseLeave={()=>setOnHoverSignOut(!onHoverSignOut)}
              style={{
              backgroundColor:"#cfffcf",
              fontSize:!onHoverSignOut&&"1.5rem",
              width:"100px",
              textAlign:"center",
              cursor: "pointer"
            }}>
              {onHoverSignOut?"Sign out ?":<FcBusinessman />}
            
            </li>
            :
              <li className="Nav__List--signIn">
                <Link to="/signin">Sign in</Link>
              </li>
              }
            
            

        </ul>
      </div>
    </NavBarStyled>
   );
}
 
export default NavBar;