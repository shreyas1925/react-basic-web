import React from "react";
import Cards from "./Cards";
import Sdata from "./Sdata";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid nav_bg mb-5">
        <div className="row">
          <div className="col-md-12 mb-5 mx-auto">
            <div className="row mb-5">
              {Sdata.map((val) => {
                return <Cards img={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
