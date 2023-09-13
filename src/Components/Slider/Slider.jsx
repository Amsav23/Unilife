import React, {useEffect, useState} from 'react'
import './Slider.css'
import background from '../../assets/cover-img.png'
import SearchIcon from '../../assets/Search-icon.png'
import CompareIcon from '../../assets/Compare-icon.png'
import BillsIcon from '../../assets/Bills-Included-icon.png'
import axios from 'axios';
import { useParams } from 'react-router-dom'

function Search({setTopCities}) {
  const [query, setQuery] = useState('');
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search")

    useEffect(() => {
    //make API call to filter
    console.log("running useEffect")
    axios.get(`https://unilife-server.herokuapp.com/cities/?name=${query}`)
    .then(res =>{
      console.log(res.data.response)
      setTopCities(res.data.response)
    })


    .catch(err => {
      if (err.response === 404){
        alert(`There is no city named ${query}`)
      }
      else{
        console.log(err)
      }
    })

    //clear textbox
    setQuery('')
  
    }, [])

  //   //make API call to filter
  //   axios.get(`https://unilife-server.herokuapp.com/cities/?name=${query}`)
  //   .then(res =>{
  //     console.log(res.data.response)
  //     setTopCities(res.data.response)
  //   })


  //   .catch(err => {
  //     if (err.response === 404){
  //       alert(`There is no city named ${query}`)
  //     }
  //     else{
  //       console.log(err)
  //     }
  //   })

  //   //clear textbox
  //   setQuery('')
  // }


  //see All cities
  // function CityDetails() {

  //   const {cityId} = useParams();

  //   const [city, setCity] = useState('');
  //   React.useEffect(
  //     ()=> {
  //       axios.get(`https://unilife-server.herokuapp.com/cities/${cityId}`)
  //       .then(res => {
  //         console.log(res)
  //         setCity(res)
  //       })
  //       .catch(err => console.log(err))
  //     }, []
  //   )
  // }



/*
  useEffect(()=>{
    axios(
      `${import.meta.env.VITE_API_BASE_URL}`)

    .then((res) => {
    console.log(res.data.response);
    setTopCities(res.data.response);
  })

    .catch((err) => console.log(err));
  }, []);
*/

/*
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
*/

  console.log("end slider")
  return (
    <div className="slider-container">
      <img src={background} alt="background image"></img>

    <form className="search-container" onSubmit={handleSubmit}>
        <input type="text" value={query}
               placeholder="Search by city"
               onChange={(e)=>setQuery(e.target.value)} />

    </form>

    <h1>Student accomodations in our top cities</h1>
    <div className='top-cities-container'>
      {/*<img src={city.image} />
      <p>Name: {city.name}</p>*/}
    </div>

    <button>See All Cities</button>

      <img src={SearchIcon} alt="Search-icon"></img>
      <img src={CompareIcon} alt="Compare-icon"></img>
      <img src={BillsIcon} alt="Bills-icon"></img>

    </div>
  )
}}

export default Search