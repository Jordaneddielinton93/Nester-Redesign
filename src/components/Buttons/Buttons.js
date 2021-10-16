const Buttons = ({text}) => {

  let buttonStyled={

    padding:"20px 10px",
    backgroundColor:"#B66CFF",
    borderRadius:"40px",
    color:"white",
    boxShadow: "grey 0px 20px 30px -10px",
    fontSize:"2rem",
    border:"none",
    width:"400px"
  }

  return ( 
    <button style={buttonStyled}>
      {text}
    </button>
   );
}
 
export default Buttons;