import { useEffect, useState } from "react";
import { NavBarStyled } from "./NavBar.style";
import { Link } from "react-router-dom";
import { EggImg } from "../images/Egg";
const NavBar = () => {


  const [offSetY,setOffsetY] = useState(0)


  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(()=>{

  window.addEventListener("scroll",handleScroll);

  return () => window.removeEventListener("scroll",handleScroll);

  },[])

  console.log(offSetY)


  return ( 
    <NavBarStyled>
      <div className="Nav">

        <h1 className="Nav__Logo"><Link to="/">nester {EggImg}</Link></h1>

        <ul className="Nav__List">
          <li className="Nav__List--item"><Link to="/">Our Offer</Link></li>
          <li className="Nav__List--item"><Link to="/">Who we are</Link></li>
          <li className="Nav__List--item"><Link to="/">Our Journey</Link></li>
          <li className="Nav__List--item"><Link to="/">Contact</Link></li>

          <li className="Nav__List--signIn"><Link to="/signup">Sign in</Link></li>

        </ul>
      </div>
    </NavBarStyled>
   );
}
 
export default NavBar;