import React, {useEffect, useState} from 'react'
import './Slider.css'
import background from '../../assets/cover-img.png';
import axios from 'axios';

function Slider() {
  const [topCities, setTopCities] = useState([]);


  useEffect(()=>{
    axios(
      `${import.meta.env.VITE_API_BASE_URL}`)

    .then((res) => {
    console.log(res.data.response);
    setTopCities(res.data.response);
  })

    .catch((err) => console.log(err));
  }, []);


  const sliderStyle = {
    backgroundImage: `url(${import.meta.env.VITE_API_BASE_URL}${topCities[0]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "60vh",
    width: "50%",
    position: "relative",
    zIndex: 0
  };



  return (
    <div style={sliderStyle}>Slider</div>

    /*
    <div className="slider-container">
        <div style={{ backgroundImage: `url(${background})` }}></div>
    </div>*/
  )
}

export default Slider