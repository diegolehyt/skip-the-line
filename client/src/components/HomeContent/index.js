import React, { useState, useEffect } from 'react'
import StoreBlock from '../StoreBlock'
import axios from 'axios'
import './style.css'
import storesList from './stores.json'
import Cookies from 'js-cookie'
import userAPI from './userAPI.json'
import { connect } from 'react-redux'
import { getUser } from '../../actions/userActions'
import { getStores, updateStore, deleteStore } from '../../actions/storeActions'
import io from 'socket.io-client'
const socket = io('http://localhost:3001')




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

function HomeContent ({ getUser, users, getStores, stores, updateStore, deleteStore }) {
  const [storesB, setStoresB] = useState([])
  const [line, setLine] = useState([])
  const [storeB, setStoreB] = useState({})
  const [bool, setbool] = useState(false);

  const [userOnline, setOnlineUser] = useState({})
  const [storeAct, setStoreAct] = useState(false)


  const getStoreB = storeData => {
    console.log(storeData._id)
    setStoreB(storeData)
    setLine(storeData.inLine)
    setStoreAct(true)
  }

  const handleLineSubmit = () => {
    // console.log("***********************")
    // console.log(users.user)
    // console.log("***********************")
    // console.log(stores.stores)

    setLine(line.concat(users.user))

    // Update Line
    updateStore(storeB._id)

    getStores()

    socket.emit('event', { 
      message: 'Hello from another browser'
      // updateS: getStores()
    })
  }


  const handleLineCancel = () => {
    // setLine(line.filter(playerZ => playerZ.email !== users.user.email))

    deleteStore(storeB._id)
    getStores()
    if (bool) {
      setbool(false)
    }
    else {
      setbool(true)
    }
    
  }

  useEffect(() => {
   
    console.log("*******************************")
    console.log(storeB.inLine)
    getStoreB(storeB)
    // setStoreB(storeB)
    // setLine(storeB.inLine)
    // setStoreAct(true)
 
  }, [bool])

  useEffect(() => {
    getStores()
 
  }, [])

  useEffect(()=>{
    socket.on('event', event => {
      console.log(event.message)
      getStores()
      // document.location.reload(true) 
    })
  }, [line])

  return (
    <div className='container'>
      <div
        className='scrollbar scrollbar-primary row flex-row flex-nowrap mt-4 pb-4'
        style={styles.cities}
      >
        {stores.stores.map(store => (
          <StoreBlock store={store} onStore={getStoreB} />
        ))}
      </div>

      <div
        className='row d-flex justify-content-center flex-row flex-nowrap mt-4 pb-4'
        style={styles.cities}
      >
        
          {line !== undefined ? (
            <>
              <div className='col-6' style={{ marginTop: '5%' }}>
          
                <div className="card card-cascade white-text rgba-blue-light">

                  <div className="view view-cascade gradient-card-header rgba-orange-strong darken-3 text-white">

                    <h2 className="card-header-title mb-3">Line Info</h2>
                    <p className="card-header-subtitle mb-0">waiting time: {(line.length * 4)}{" "}min</p>

                  </div>

                  <ul class="list-group text-left">
                    {
                      line !== undefined
                      ?
                      line.map(line => (
                        <div class="list-group-item rgba-black-slight">{line.email}</div>
                      ))
                      :
                      null
                    }
                  </ul>
                </div>
              
              </div>
              <div className="col-6" style={{ marginTop: '5%' }}>
                <div className="card card-cascade white-text rgba-blue-light">

                  <div className="view view-cascade gradient-card-header rgba-orange-strong darken-3 text-white">

                    <h2 className="card-header-title mb-3">{storeB.name}</h2>
                    <p className="card-header-subtitle mb-0">Store type:</p>

                  </div>

                  <ul class="list-group text-left">
    
                    <div class="list-group-item rgba-black-slight">
                      <img src={storeB.logo} style={{ height: '140px' }}/>
                      <h6><i className="fas fa-map-marker-alt text-white" aria-hidden="true"></i>{" "}{storeB.address}</h6>
                      <button
                      onClick={handleLineSubmit}
                      href='#!'
                      className='btn btn-outline-white btn-md my-0 ml-sm-2'
                      type='submit'
                      >
                        <i class='fas fa-plus text-white' aria-hidden='true'>
                          {" "}add
                        </i>
                      </button>
                      <button
                        onClick={handleLineCancel}
                        href='#!'
                        className='btn btn-outline-white btn-md my-0 ml-sm-2'
                        type='submit'
                      >
                        <i class='fas fa-minus text-white' aria-hidden='true'>
                          {" "}remove
                        </i>
                      </button>
                    </div>
           
                  </ul>
                </div>
          
              </div>
            </>
            
          ) : null}
        
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

export default connect(mapStateToProps, { getUser, getStores, updateStore, deleteStore })(HomeContent)
