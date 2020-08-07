import React from "react";
import Projects from "../Projects/Projects";
import MainProjects from "../MainProjects/MainProjects";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
import CallToAction from "../CallToAction/CallToAction";
import Box from "@material-ui/core/Box";

const Home = () => {
  return (
    <Box component="div" style={{ background: "#5f5b60", height: "100vh" }}>
      <CallToAction />
      <MainProjects />
      <Skills />
      <Projects />
      <Footer />
    </Box>
  );
};

export default Home;
