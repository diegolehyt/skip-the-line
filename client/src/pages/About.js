import React from "react";
import Intro from "../components/Intro";
import Video from "../components/Video";
import Mask from "../components/Mask";
import Container from "../components/Container";
import AboutContent from "../components/AboutContent";

function About() {
  return (
    <Intro>
      <Video/>
      <Mask>
        <Container>
          <AboutContent/>
        </Container>
      </Mask>
    </Intro>
  );
}

export default About;
