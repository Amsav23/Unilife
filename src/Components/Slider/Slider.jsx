import React, {useEffect, useState} from 'react'
import './Slider.css'
import background from '../../assets/cover-img.png'
import SearchIcon from '../../assets/Search-icon.png'
import CompareIcon from '../../assets/Compare-icon.png'
import BillsIcon from '../../assets/Bills-Included-icon.png'
import axios from 'axios';

function Slider() {
  const [query, setQuery] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    //make API call to filter
    console.log("running useEffect")
    axios.get(`https://unilife-server.herokuapp.com/cities/?name=${query}&limit=20`)

    .then(res =>{
      console.log(res.data.response)
      setCities(res.data.response)
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

    }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search")
  }


  console.log("end slider")
  return (
    <div className="slider-container">
      <img src={background} alt="background image"></img>

{/*Search Functionality*/}
      <form className="search-container" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          placeholder="Search by city"
          onChange={(e)=>setQuery(e.target.value)}
        />
      </form>

{/*City Cards*/}
      <h1>Student accomodations in our top cities</h1>
      <div className='top-cities-container'>
        {cities.slice(0, 9).map((city) => (
          <>
            <img src={city.image_url} />
            <p className='city-name'>{city.name}</p>
          </>
        ))}
      </div>

      <button>See All Cities</button>

      <img src={SearchIcon} alt="Search-icon"></img>
      <img src={CompareIcon} alt="Compare-icon"></img>
      <img src={BillsIcon} alt="Bills-icon"></img>
    </div>
  );
}

export default Slider;