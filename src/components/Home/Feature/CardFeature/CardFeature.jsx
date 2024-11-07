import React from "react";
import "./CardFeature.css"
const CardFeature = ({ key,img, title, description }) => {
  return (
    <div className=" col-12 col-sm-6 mb-3  col-md-6 col-xl-4 col-xxl-3 p-0" style={{ minHeight:"300px"}}>
      <div className="row m-0 p-0 d-flex justify-content-center align-items-center" >
        <div className="Card col-11 col-md-10 p-3 " style={{ minHeight:"300px"}} >

        <div className="row m-0 p-0">
          <div className=" col-12 p-0">
            <img src={img} height="130px" />
          </div>
        </div>

        <div className="row m-0 p-0 p-1">
          <div className="col-12 p-0">
            <h2>{key}</h2>
          </div>
        </div>

        <div className="row m-0 p-0 mt-3">
          <div className="col-12 p-0">
            <p>{description}</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default CardFeature;
