import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./style.css";

const styles = {
  navB: {
    fontFamily: "'Trade Winds', cursive"
  },
  imgB: {
    marginRight: "10px"
  },
  margintop: {
    marginTop: '8%',
    // marginRight: '-10%'
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
  }
}


function StoreBlock(props) {

  // const [temp, setTemp] = useState("")
  // const [icon, setIcon] = useState("")
  // const [desc, setDesc] = useState("")
  // const [city, setCity] = useState({})


  // useEffect(() => {
  //   fetch(``)
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (res) {
  //     // console.log(res)
  
  //   });
  // }, [])
  
  const getStore = () => {
    props.onStore(props.store)
    // localStorage.setItem('clickedCity', props.store);
  };

  return (
    <div className="col-5" style={styles.margintop} onClick={getStore}>
      <div className="card white-text rgba-blue-light mb-3"  style={{maxWidth: '18em'}}>
        <div className="card-header gradient-card-header rgba-blue-light">{props.store.name}</div>
        <div className="card-body row">
          
          <div className="col-6">
            <img src={""}/>
            <p>Full: {props.store.inStore}</p>
          </div>
          <div  className="col-6">
            <p className="card-text text-white" style={styles.todayO}> {props.store.inLine.length}</p>
          </div>
          
        </div>
      </div>
    </div>

  );
}

export default StoreBlock;
