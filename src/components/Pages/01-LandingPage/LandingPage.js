import Hero from "./components/01-Hero/Hero";
import Infomation from "./components/02-Infomation/Infomation";
import { LandingPageStyled } from "./LandingPage.style";

const LandingPage = () => {

  return ( 
    <LandingPageStyled>
      <Hero/>
      <Infomation/>
    </LandingPageStyled>
   );
}
 
export default LandingPage;