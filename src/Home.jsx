import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/image1.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Create your first React App "
        withs="with "
        names="Shreyas Shettigar"
        imgsrc={web}
        visit="/service"
        btname="Explore more"
      />
    </>
  );
};

export default Home;
