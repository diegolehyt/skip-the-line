import React, { useState, useEffect } from "react";
import StoreBlock from "../StoreBlock";
import "./style.css";
import storesList from "./stores.json"
import userAPI from "./userAPI.json"

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
  },
  cities: {
    width: '100%'
  }
}

function HomeContent() {

  const [stores, setStores] = useState([]);
  const [line, setLine] = useState([]);
  const [store, setStore] = useState({});
  const [user, setUser] = useState({});
  const [storeAct, setStoreAct] = useState(false);

  const getStores = () => {
    // fetch("/api/logos")
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (res) {
    //     setLogos(res);
    //     console.log(res);
    //   });
    setUser(userAPI)
    setStores(storesList)
  };

  
  const getStore = (storeData) => {

    console.log(storeData)
    setStore(storeData)
    setLine(storeData.inLine)
    setStoreAct(true)
  };

   
  const handleLineSubmit = () => {

    console.log(user)
    setLine(line.concat(user))
  };

  const handleLineCancel = () => {
    setLine(line.filter(
      (playerZ) => playerZ.username !== user[0].username
    ))
  };

  useEffect(() => {
    getStores();
  }, []);


  return (
    <div className="container">
      

      <div className="scrollbar scrollbar-primary row flex-row flex-nowrap mt-4 pb-4" style={styles.cities}>
        {
          storesList.map(store => (
            <StoreBlock store={store} onStore={getStore}/>
          ))
        }

      </div>

      <div className="row d-flex justify-content-center flex-row flex-nowrap mt-4 pb-4" style={styles.cities}>

        <div className="col-12">
          {
            setStoreAct
            ?
            <>
              <p>{store.name}</p>
              <div>
                <button onClick={handleLineSubmit} href="#!" className="btn btn-outline-white btn-md my-0 ml-sm-2" type="submit">
                  <i class="fas fa-search text-white" aria-hidden="true">Yes</i>
                </button>
                <button onClick={handleLineCancel} href="#!" className="btn btn-outline-white btn-md my-0 ml-sm-2" type="submit">
                  <i class="fas fa-search text-white" aria-hidden="true">No</i>
                </button>
              </div>
              <ul>
                {
                  line.map(line => (
                    <p>{line.username}</p>
                  ))
                }
              </ul>
            </>
            :
            null
          }
          
        </div>
        
      </div>

      <div className="row text-black" style={{ marginTop: "20%" }}>
        <div className="col-md-12 col-lg-12">
          
          <div className="row">

           
          </div>
        
        </div>
        <div className="col-md-12 col-lg-12" style={{ marginTop: "5%" }}>
        
          <div className="row">

          </div>
          <hr className="hr-light my-4 w-75 style-two" />
        </div>
      
      </div>
    </div>
  )

}

export default HomeContent;