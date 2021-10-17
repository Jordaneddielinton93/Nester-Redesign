import "./Button.css"

const Buttons = ({text,width,fontsize,border,backColor,Color,backImage,fireOnClick}) => {

  let buttonStyled={

    padding:"20px 10px",
    backgroundColor:backColor,
    borderRadius:"40px",
    boxShadow: "grey 0px 20px 30px -10px",
    fontSize:fontsize,
    border:border,
    width: width,
    color:Color,
    backgroundImage:backImage,
    cursor:"pointer",
    zIndex:20
  }

  return ( 
    <button style={buttonStyled} id="animatedButton" onClick={fireOnClick}>
      {text}
    </button>
   );
}
 
export default Buttons;