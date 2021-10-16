
import Buttons from "../../../../Buttons/Buttons";
import { purplebackground } from "../../../../images/purplebackground";
import Bubbles from "./components/Bubbles";
import { HeroStyled } from "./Hero.style";

const Hero = () => {


  



  return ( 
    <HeroStyled>
      <div className="Hero-title">
        <h1 className="Hero-title-h1">A big egg of an opportunity</h1>
        <Buttons 
        text="Find Out More" 
        width="400px" 
        fontsize="2rem" 
        border="none"
        backColor="#8000FF"
        Color="white"
        />
      </div>
      <Bubbles/>
      {purplebackground}
    </HeroStyled>
   );
}
 
export default Hero;