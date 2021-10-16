const Buttons = ({text,width,fontsize,border,backColor,Color}) => {

  let buttonStyled={

    padding:"20px 10px",
    backgroundColor:backColor,
    borderRadius:"40px",
    boxShadow: "grey 0px 20px 30px -10px",
    fontSize:fontsize,
    border:border,
    width: width,
    color:Color
  }

  return ( 
    <button style={buttonStyled}>
      {text}
    </button>
   );
}
 
export default Buttons;