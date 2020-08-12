import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './utils/ProtectedRoute'
import Wrapper from './components/Wrapper'

const styles = {
  headerB: {
    fontFamily: "'Heebo', sans-serif"
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive"
  }
}

function App () {
  return (
    <Router>
      <header style={styles.headerB}>
        <Wrapper>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/signup' component={Signup} />
        </Wrapper>
        {/* <Footer /> */}
      </header>
    </Router>
  )
}

export default App
