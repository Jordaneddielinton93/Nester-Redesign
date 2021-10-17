import Hero from "./components/01-Hero/Hero";
import Infomation from "./components/02-Infomation/Infomation";
import OurOffer from "./components/03-OurOffer/OurOffer";
import HowCanWeHelp from "./components/04-HowCanWeHelp/HowCanWeHelp";
import { LandingPageStyled } from "./LandingPage.style";
import meetingImg from "../../images/meetingIMG.png"
import WhoeAreWe from "./components/05-WhoAreWe/WhoAreWe";
import FooterBar from "../../FooterBar/FooterBar";
import Founders from "./components/06-Founders/Founders";

const LandingPage = () => {

  return ( 
    <LandingPageStyled>
      <Hero />
      <Infomation />
      <OurOffer/>
      <HowCanWeHelp/>
      <img alt="" width="100%" srcset={meetingImg}  />
      <WhoeAreWe/>
      <Founders/>
      <FooterBar/>
    </LandingPageStyled>
   );
}
 
export default LandingPage;