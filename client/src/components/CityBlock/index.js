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


function CityBlock(props) {

  const [temp, setTemp] = useState("")
  const [icon, setIcon] = useState("")
  const [desc, setDesc] = useState("")
  const [city, setCity] = useState({})
  const [cityName, setCityName] = useState("")

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=a20945d7ff2c1d7b2d2fb96e4f52ee9f`)
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      // console.log(res)
      setTemp(Math.round((res.main.temp) - 273))
      setIcon(res.weather[0].icon)
      setDesc(res.weather[0].main)
      setCityName(res.name)
      setCity(res)
    });
  }, [])
  
  const getCity = () => {
    props.onCity(props.city)
    localStorage.setItem('clickedCity', props.city);
  };

  return (
    <div className="col-4" style={styles.margintop} onClick={getCity}>
      <div className="card white-text rgba-blue-light mb-3"  style={{maxWidth: '18em'}}>
        <div className="card-header gradient-card-header rgba-blue-light">{cityName}</div>
        <div className="card-body row">
          
          <div className="col-6">
            <img src={"https://openweathermap.org/img/wn/" + icon + ".png"}/>
            <p>{desc}</p>
          </div>
          <div  className="col-6">
            <p className="card-text text-white" style={styles.todayO}>{temp}°</p>
          </div>
          
        </div>
      </div>
    </div>

  );
}

export default CityBlock;
