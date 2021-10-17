import { WhoAreWeStyled } from "./WhoeAreWe.style";
import { purpleBird } from "../../../../images/whoarebird";
const WhoeAreWe = () => {
  return ( 
    <WhoAreWeStyled 
     data-aos="fade-right">
      <div className="Who">
        <section className="Who_Left">
         {purpleBird}
        </section>
        <section className="Who_Right">
          <h1 className="Who_Right--title">Who are we?</h1>
          <h3 className="Who_Right--subtitle">
          Nester is a community of like-minded investors (our Nesters)
          </h3>
          <p className="Who_Right--paragraph">
            If you’re anything like us, you’ll be disappointed with average returns in the property investment market. We aim to inspire you to challenge accepted norms and build a lucrative portfolio you can be proud of.
          </p>
          
        </section>
      </div>
    </WhoAreWeStyled>
   );
}
 
export default WhoeAreWe;