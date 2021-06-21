import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section
        id="header"
        className="d-flex align-items-center justify-content-center"
      >
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 order-2 order-lg-2 mt-5 dude">
                  <div className="one ">
                    <h1 className="mt-5">
                      {props.name} <br></br> {props.withs}
                      <strong className="text-info">{props.names}</strong>
                    </h1>

                    <p className="mt-2">
                      Website is made up of pure React JS using Bootstrap 4 for
                      styling parts.
                    </p>

                    <NavLink
                      to={props.visit}
                      className="btn btn-outline-info mt-2 "
                      id="but"
                    >
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-6 pt-5 order-1 order-lg-2 animated imgs">
                  <img src={props.imgsrc} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default Common;
