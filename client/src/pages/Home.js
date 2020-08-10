import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Video from '../components/Video'
import Mask from '../components/Mask'
import Container from '../components/Container'
import HomeContent from '../components/HomeContent'
import { connect } from 'react-redux'
import { getUser } from '../actions/userActions'
import { useHistory } from 'react-router-dom'

const styles = {
  headerB: {
    fontFamily: "'Heebo', sans-serif"
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive"
  },
  view: {
    position: 'relative',
    overflow: 'hidden'
  },
  vidddeo: {
    position: 'fixed',
    maxHeight: '100%',
    minWidth: '100%'
  },
  sec: {
    marginTop: '20%',
    height: '100%'
  },
  sic: {
    maxHeight: '100%'
  },
  margintop: {
    marginTop: '8%'
  },
  buttonS: {
    marginLeft: '20px',
    marginTop: '0px',
    fontWeight: 'bold',
    width: '10px'
  },
  searchS: {
    color: 'gold',
    fontWeight: 'bold',
    fontSize: '20px'
  },
  formS: {
    // marginLeft: '80px',
    marginTop: '10%'
  },
  todayT: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '200px',
    marginBottom: '-50px'
  },
  todayO: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '50px'
  },
  cities: {
    width: '100%'
  }
}

function Home ({ getUser, users }) {
  let history = useHistory()
  useEffect(() => {
    getUser()
  }, [])
  return (
    <>
      <Navbar />
      <Intro>
        <Video />
        <Mask>
          <Container>
            <HomeContent />
          </Container>
        </Mask>
      </Intro>
      {!users.loading && !users.user.isAuthenticated ? history.push('/') : null}
    </>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, { getUser })(Home)
