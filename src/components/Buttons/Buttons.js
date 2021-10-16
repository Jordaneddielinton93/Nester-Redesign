const Buttons = ({text}) => {

  let buttonStyled={

    padding:"20px 80px",
    backgroundColor:"#B66CFF",
    borderRadius:"40px",
    color:"white",
    boxShadow: "grey 0px 20px 30px -10px",
    marginTop:"75px",
    fontSize:"2rem",
    border:"none"
  }

  return ( 
    <button style={buttonStyled}>
      {text}
    </button>
   );
}
 
export default Buttons;