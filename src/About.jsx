import React from "react";
import web from "../src/images/image2.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to our About Page"
        withs="of "
        names="React App"
        imgsrc={web}
        visit="/contact"
        btname="Wanna Reach us"
      />
    </>
  );
};

export default About;
