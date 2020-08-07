import React from "react";
import "./style.css";

const styles = {
  headerB: {
    color: "#04375a" 
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive",
    color: '#04375a' 
  },
  headerD: {
    textAlign: "center",
    marginTop: '100px',
    marginBottom: '40px'
  },
  headerE: {
    width: "300px",
    height: '300px'
  }
}

function AboutContent() {
  return (
    <div className="col-12 col-sm-12 col-ms-12 col-lg-12 col-xl-12 testimonial animated fadeInRight" id="Dabout2" style={styles.headerD}>

      <div className="avatar mx-auto mb-4">
        <img src="https://raw.githubusercontent.com/diegolehyt/Portfolio-v2.0/master/images/github3.jpg" className="rounded-circle img-fluid center2"
          alt="First sample avatar" style={styles.headerE}/>
      </div>

      <p className="white-text">
        <i className="fas fa-quote-left"></i>  Hi I'm Diego, I'm from Chile, i moved to Canada about 4 years ago, 
        I'm an engineer and I genuinely enjoy coding. On my free time I like to play the piano, estrategy games
        to keep my brain active and sports like tennis which is one of my passions. 
        I'm a competitive person in terms of mastering new skills to eventually become the best,  
        I have a good balance between logic and creativity, 
        which help me in my career as a web developer and my philosopy is to never stop learning.
      </p>
      <h4 className="font-weight-bold" style={styles.headerC}>Diego Lehyt</h4>
      <h6 className="font-weight-bold my-3" style={styles.headerB}>Full-Stack web developer</h6>

    </div>
  )

}

export default AboutContent;
