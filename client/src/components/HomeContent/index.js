import React, { useState, useEffect } from 'react'
import StoreBlock from '../StoreBlock'
import axios from 'axios'
import './style.css'
import storesList from './stores.json'
import Cookies from 'js-cookie'
import userAPI from './userAPI.json'
import { connect } from 'react-redux'
import { getUser } from '../../actions/userActions'
import { getStores } from '../../actions/storeActions'
import io from 'socket.io-client'
const socket = io('http://localhost:3001')
socket.on('event', event => {
  console.log(event.message)
})

const styles = {
  headerB: {
    color: '#04375a'
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive",
    color: '#04375a'
  },
  headerD: {
    textAlign: 'center',
    marginTop: '100px',
    marginBottom: '40px'
  },
  headerE: {
    width: '300px',
    height: '300px'
  },
  cities: {
    width: '100%'
  }
}

function HomeContent ({ getUser, users, getStores, stores }) {
  const [storesB, setStoresB] = useState([])
  const [line, setLine] = useState([])
  const [storeB, setStoreB] = useState({})
  // const [user, setUser] = useState({});

  const [userOnline, setOnlineUser] = useState({})
  const [storeAct, setStoreAct] = useState(false)

  const getStoresB = () => {
    // fetch("/api/logos")
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (res) {
    //     setLogos(res);
    //     console.log(res);
    //   });

    // setUser(userAPI)
    setStoresB(storesList)
  }

  const getStoreB = storeData => {
    console.log(storeData)
    setStoreB(storeData)
    setLine(storeData.inLine)
    setStoreAct(true)
  }

  const handleLineSubmit = () => {
    console.log("***********************")
    console.log(users)
    console.log("***********************")
    console.log(stores)

    setLine(line.concat(users.user))
    socket.emit('event', { message: 'Hello from another browser' })
  }

  const handleLineCancel = () => {
    setLine(line.filter(playerZ => playerZ.email !== users.user.email))
  }

  useEffect(() => {
    getStores()
 
  }, [])

  // useEffect(() => {
  //   axios.get('/api/auth/user').then(res => {
  //     console.log("********* USER *************")
  //     console.log(res.data)
  //     setUser(res.data)
  //   })
  // }, [])

  return (
    <div className='container'>
      <div
        className='scrollbar scrollbar-primary row flex-row flex-nowrap mt-4 pb-4'
        style={styles.cities}
      >
        {storesList.map(store => (
          <StoreBlock store={store} onStore={getStoreB} />
        ))}
      </div>

      <div
        className='row d-flex justify-content-center flex-row flex-nowrap mt-4 pb-4'
        style={styles.cities}
      >
        <div className='col-12'>
          {setStoreAct ? (
            <>
              <p>{storeB.name}</p>
              <div>
                <button
                  onClick={handleLineSubmit}
                  href='#!'
                  className='btn btn-outline-white btn-md my-0 ml-sm-2'
                  type='submit'
                >
                  <i class='fas fa-search text-white' aria-hidden='true'>
                    Yes
                  </i>
                </button>
                <button
                  onClick={handleLineCancel}
                  href='#!'
                  className='btn btn-outline-white btn-md my-0 ml-sm-2'
                  type='submit'
                >
                  <i class='fas fa-search text-white' aria-hidden='true'>
                    No
                  </i>
                </button>
              </div>
              <ul>
                {line.map(line => (
                  <p>{line.email}</p>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </div>

      <div className='row text-black' style={{ marginTop: '20%' }}>
        <div className='col-md-12 col-lg-12'>
          <div className='row'></div>
        </div>
        <div className='col-md-12 col-lg-12' style={{ marginTop: '5%' }}>
          <div className='row'></div>
          <hr className='hr-light my-4 w-75 style-two' />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users,
    stores: state.stores
  }
}

export default connect(mapStateToProps, { getUser, getStores })(HomeContent)
