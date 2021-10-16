import Hero from "./components/01-Hero/Hero";
import Infomation from "./components/02-Infomation/Infomation";
import OurOffer from "./components/03-OurOffer/OurOffer";
import HowCanWeHelp from "./components/04-HowCanWeHelp/HowCanWeHelp";
import { LandingPageStyled } from "./LandingPage.style";

const LandingPage = () => {

  return ( 
    <LandingPageStyled>
      <Hero />
      <Infomation />
      <OurOffer/>
      <HowCanWeHelp/>
    </LandingPageStyled>
   );
}
 
export default LandingPage;