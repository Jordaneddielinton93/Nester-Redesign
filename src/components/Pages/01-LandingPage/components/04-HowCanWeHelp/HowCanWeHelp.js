import Bubbles from "../01-Hero/components/Bubbles";
import { HowCanWeHelpStyled } from "./HowCanWeHelp.style";

const HowCanWeHelp = () => {
  return ( 
    <HowCanWeHelpStyled 
     data-aos="fade-right">
      <div className="Help">
        <section className="Help_Left">
          <h1 className="Help_Left--title">How can we help? </h1>
          <h3 className="Help_Left--subtitle">Nester believe in the power of people to create prosperity.</h3>
          <p className="Help_Left--paragraph">If you’re anything like us, you’ll be disappointed with average returns in the property investment market. We aim to inspire you to challenge accepted norms and build a lucrative portfolio you can be proud of.</p>
        </section>
        <section className="Help_Right">
        {/* <Bubbles/> */}
        </section>
      </div>
     
    </HowCanWeHelpStyled>
   );
}
 
export default HowCanWeHelp;