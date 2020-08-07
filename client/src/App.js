import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const styles = {
  headerB: {
    fontFamily: "'Heebo', sans-serif" 
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive" 
  }
}

function App() {
  return (
    <Router>
      <header style={styles.headerB}>
        <Navbar />
        <Wrapper basename="/">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        {/* <Footer /> */}
      </header>
    </Router>
  );
}

export default App;
