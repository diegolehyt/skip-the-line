import React from "react";
import "./style.css";

const styles = {
  viddeo: {
    position: 'fixed',
    minHeight: '100%',
    minWidth: '100%'
  }
}

function Video() {
  return (
    <video className="video-intro" style={styles.viddeo} poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" playsInline
      autoPlay muted loop>
      <source src="https://cdn.videvo.net/videvo_files/video/free/2012-09/small_watermarked/hd0535_preview.webm" type="video/mp4"/>
      {/* <source src="https://static.videezy.com/system/resources/previews/000/035/225/original/Vivid_blue_sky.mp4" type="video/mp4"/> */}
    </video>
  )
    
  

}

export default Video;
