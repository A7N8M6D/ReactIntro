import React from "react";
import logo from "../../../assets/react-core-concepts.png";
import "./Header.css"
const dynaminDescription=['Fundamental', 'Crucial', 'Core']
const randomNumber=(max)=>{
  
  return Math.floor(Math.random()*max)
}
const Header = () => {
 const description=dynaminDescription[randomNumber(3)];  
  return (
    <header className="">

      {/*Logo  */}
      <div className="row m-0 p-0 "
      style={{ backgroundColor: "", padding: "1rem" }}>
        <div
          className="col-12 p-0  d-flex align-items-center justify-content-center align-items-center"
          style={{  }}
        >
          <div className="col-auto p-0" style={{  }}>
            <img className="img-fluid" src={logo} alt="React Logo" style={{height:"170px",padding:"0px",margin:"0px"}} />
          </div>
        </div>
      </div>

      {/* Heading */}
      <div className="row m-0 mt-1 justify-content-center align-items-center" >
         <div className="col-auto p-0 text-center d-flex align-items-center">
           <h1>React Essentials</h1>
         </div>
      </div>

      {/* subHeading */}
      <div className="row m-0 mt-5 justify-content-center align-items-center" >
         <div className="col-auto p-0 text-center">
      <p>{description} React concepts you will need for almost any app you are going to build!</p>
           
         </div>
      </div>
    </header>
  );
};

export default Header;
