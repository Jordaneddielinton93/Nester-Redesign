import { InformationStyled } from "./Information.style";
import FamilyImg from "../../../../images/family.png"
const Information = () => {
  return ( 
    <InformationStyled>
      <section className="Info__Left">
        <img alt="" width="100%" srcset={FamilyImg} />
      </section>
      <section  className="Info__Right">
        <h1 className="Info__Right--title">What do investors want?</h1>
        <p className="Info__Right--paragraph">To invest securely. To receive better returns. To deal with helpful, smart people (that’s us), who have looked at the property investment world and have decided to shake things up.</p>
      </section>

    </InformationStyled>
   );
}
 
export default Information;