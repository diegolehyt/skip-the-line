import React from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Video from '../components/Video'
import Mask from '../components/Mask'
import Container from '../components/Container'
import ContactContent from '../components/ContactContent'

function Contact () {
  return (
    <>
      <Navbar />
      <Intro>
        <Video />
        <Mask>
          <Container>
            <ContactContent />
          </Container>
        </Mask>
      </Intro>
    </>
  )
}

export default Contact

// const mql = window.matchMedia('(max-width: 400px)');
// const listenerFunc = () => {

//   if (mql.matches) {
//     document.body.style.height = "150%";
//   }
// };

// mql.addListener(listenerFunc);

// document.body.style.height = "150%";
