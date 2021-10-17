import { Link } from "react-router-dom";
import { EggImg } from "../images/Egg";
import { FooterBarStyled } from "./FooterBar.style";
import { AiFillFacebook ,AiFillLinkedin,AiFillInstagram,AiFillTwitterSquare} from 'react-icons/ai';

const FooterBar = () => {
  return ( 
    <FooterBarStyled>
      <div className="Founders">
        <nav className="Founders__TopNav">

          <h1 className="Founders__TopNav--Logo"><Link to="/">nester {EggImg}</Link></h1>
          <ul className="Founders__TopNav__List">
            <li className="Founders__TopNav__List--item"><Link to="/">Our Offer</Link></li>
            <li className="Founders__TopNav__List--item"><Link to="/">Who we are</Link></li>
            <li className="Founders__TopNav__List--item"><Link to="/">Our Journey</Link></li>
            <li className="Founders__TopNav__List--item"><Link to="/">Contact</Link></li>
            <li className="Founders__TopNav__List--item"><Link to="/signin">sign in</Link></li>
            
          </ul>
        </nav>
        
        <p className="Founders__Paragraph">
          Nester Platform Ltd is authorised and regulated by the Financial Conduct Authority, registration number 915346, and is a limited company registered in England and Wales (No. 12097430) with its registered office at 20-22 Wenlock Road, London, N1 7GU. Nester® is a registered trademark of Nester Holdings Ltd, a limited company registered in England and Wales (No. 11475486 ) with its registered office at 20-22 Wenlock Road, London, England, N1 7GU.
        </p>
        <nav className="Founders__Contact">
          <h4>Nester Holdings Ltd. Copyright 2019 . All rights reserved.</h4>
          <AiFillFacebook className="Founders__Contact--Links"/>
          <AiFillLinkedin className="Founders__Contact--Links"/>
          <AiFillInstagram className="Founders__Contact--Links"/>
          <AiFillTwitterSquare className="Founders__Contact--Links"/>
        </nav>
      </div>
    </FooterBarStyled>
   );
}
 
export default FooterBar;