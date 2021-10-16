import Hero from "./components/01-Hero/Hero";
import Infomation from "./components/02-Infomation/Infomation";
import OurOffer from "./components/03-OurOffer/OurOffer";
import { LandingPageStyled } from "./LandingPage.style";

const LandingPage = () => {

  return ( 
    <LandingPageStyled>
      <Hero/>
      <Infomation/>
      <OurOffer/>
    </LandingPageStyled>
   );
}
 
export default LandingPage;