import React from "react";
import "./Feature.css";
import CardFeature from "./CardFeature/CardFeature";
import concept from "../../../data/Data.jsx";
const Feature = () => {
  return (
    <section className="Feature m-5">
      <div className="row m-0 p-0">
        <div className="col-12 text-center p-0">
          <h2>Core Concepts</h2>
        </div>
        <div className="col-12 text-center p-0 mt-5">
          <div className="row m-0 p-0">
            {concept.map((e) => (
              <CardFeature {...e} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Feature;
