import React from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Video from '../components/Video'
import Mask from '../components/Mask'
import Container from '../components/Container'
import AboutContent from '../components/AboutContent'

function About () {
  return (
    <>
      <Navbar />
      <Intro>
        <Video />
        <Mask>
          <Container>
            <AboutContent />
          </Container>
        </Mask>
      </Intro>
    </>
  )
}

export default About
