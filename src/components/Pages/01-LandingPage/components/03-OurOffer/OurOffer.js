import { forAllBird } from "../../../../images/forallbird";
import { OurOfferStyled } from "./OurOffer.style";
import Button from "../../../../Buttons/Buttons"
const OurOffer = () => {
  return ( 
    <OurOfferStyled>
      <div className="OurOffer">
        <section className="OurOffer__Left">
          <h1 className="OurOffer__Left--title" >Our Offer</h1>
          <h3 className="OurOffer__Left--subtitle">
            We aim to simplify property investment…
          </h3>
          <p className="OurOffer__Left--paragraph">
            By creating a transparent environment to share information. We focus on property because it’s what we know best. Technology now allows us to put the power back in the hands of people.
          </p>
          <Button 
          width="200px"
          text="Yes I’m interested!"
          border="solid thick #00D2FF"
          backColor="white"
          Color="#8000FF"
          />
        </section>
        

        <section className="OurOffer__Right">

          {forAllBird}

        </section>

      </div>
      
    </OurOfferStyled>
   );
}
 
export default OurOffer;