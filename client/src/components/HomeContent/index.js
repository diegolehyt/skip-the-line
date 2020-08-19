import React, { useState, useEffect } from 'react'
import StoreBlock from '../StoreBlock'
import axios from 'axios'
import './style.css'
import storesList from './stores.json'
import Cookies from 'js-cookie'
import userAPI from './userAPI.json'
import { connect } from 'react-redux'
import { getUser } from '../../actions/userActions'
import {
  getStores,
  getStore,
  updateStore,
  deleteStore
} from '../../actions/storeActions'
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

function HomeContent ({
  getStore,
  getStores,
  stores,
  currentStore,
  updateStore,
  deleteStore
}) {
  const [bool, setbool] = useState(false)

  socket.on('updateCurrentStoreServer', currentStoreID => {
    if (currentStore && currentStore._id === currentStoreID)
      getStore(currentStore._id)
  })

  const handleLineSubmit = () => {
    // Update Line
    updateStore(currentStore._id)

    socket.emit('updateStoresClient', {
      message: 'Update all stores'
    })
    socket.emit('updateCurrentStoreClient', currentStore._id)
  }

  const handleLineCancel = () => {
    // setLine(line.filter(playerZ => playerZ.email !== users.user.email))

    deleteStore(currentStore._id)
    if (bool) {
      setbool(false)
    } else {
      setbool(true)
    }
    socket.emit('updateStoresClient', {
      message: 'Update all stores'
    })

    socket.emit('updateCurrentStoreClient', currentStore._id)
  }

  useEffect(() => {
    getStores()
  }, [])

  useEffect(() => {
    socket.on('updateStoresServer', event => {
      getStores()
      // document.location.reload(true)
    })
  }, [])

  return (
    <div className='container'>
      <div
        className='scrollbar scrollbar-primary row flex-row flex-nowrap mt-4 pb-4'
        style={styles.cities}
      >
        {stores.stores.map(store => (
          <StoreBlock _id={store._id} store={store} />
        ))}
      </div>

      <div
        className='row d-flex justify-content-center flex-row flex-nowrap mt-4 pb-4'
        style={styles.cities}
      >
        {currentStore ? (
          <>
            <div className='col-6' style={{ marginTop: '5%' }}>
              <div className='card card-cascade white-text rgba-blue-light'>
                <div className='view view-cascade gradient-card-header rgba-orange-strong darken-3 text-white'>
                  <h2 className='card-header-title mb-3'>Line Info</h2>
                  <p className='card-header-subtitle mb-0'>
                    waiting time: {currentStore.inLine.length * 4} min
                  </p>
                </div>

                <ul class='list-group text-left'>
                  {currentStore.inLine.map(user => (
                    <div class='list-group-item rgba-black-slight'>
                      {user.email}
                    </div>
                  ))}
                </ul>
              </div>
            </div>
            <div className='col-6' style={{ marginTop: '5%' }}>
              <div className='card card-cascade white-text rgba-blue-light'>
                <div className='view view-cascade gradient-card-header rgba-orange-strong darken-3 text-white'>
                  <h2 className='card-header-title mb-3'>
                    {currentStore.name}
                  </h2>
                  <p className='card-header-subtitle mb-0'>Store type:</p>
                </div>

                <ul class='list-group text-left'>
                  <div class='list-group-item rgba-black-slight'>
                    <img src={currentStore.logo} style={{ height: '140px' }} />
                    <h6>
                      <i
                        className='fas fa-map-marker-alt text-white'
                        aria-hidden='true'
                      ></i>{' '}
                      {currentStore.address}
                    </h6>
                    <button
                      onClick={handleLineSubmit}
                      href='#!'
                      className='btn btn-outline-white btn-md my-0 ml-sm-2'
                      type='submit'
                    >
                      <i class='fas fa-plus text-white' aria-hidden='true'>
                        {' '}
                        add
                      </i>
                    </button>
                    <button
                      onClick={handleLineCancel}
                      href='#!'
                      className='btn btn-outline-white btn-md my-0 ml-sm-2'
                      type='submit'
                    >
                      <i class='fas fa-minus text-white' aria-hidden='true'>
                        {' '}
                        remove
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
    stores: state.stores,
    currentStore: state.stores.currentStore
  }
}

export default connect(mapStateToProps, {
  getUser,
  getStore,
  getStores,
  updateStore,
  deleteStore
})(HomeContent)
