import React, {useState} from 'react'
import './Slider.css'
import background from '../../assets/cover-img.png'
import SearchIcon from '../../assets/Search-icon.png'
import CompareIcon from '../../assets/Compare-icon.png'
import BillsIcon from '../../assets/Bills-Included-icon.png'
import axios from 'axios';

function Search({setTopCities}) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query)

    //make API call to filter
    axios.get(`https://unilife-server.herokuapp.com/cities/?name=${query}`)
    .then(res =>{
      console.log(res.data.response)
      setTopCities(res.data.response)
    })


    .catch(err => {
      if (err.response.status === 404){
        alert(`There is no city named ${query}`)
      }
      else{
        console.log(err)
      }
    })

    //clear textbox
    setQuery('')
  }



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


  return (
    <div className="slider-container">
      <h1>Slider</h1>
      <img src={background} alt="background image"></img>

    <form className="search-container" onSubmit={handleSubmit}>
        <input type="text" value={query}
               placeholder="Search by city"
               onChange={(e)=>setQuery(e.target.value)} />

    </form>

      <img src={SearchIcon} alt="Search-icon"></img>
      <img src={CompareIcon} alt="Compare-icon"></img>
      <img src={BillsIcon} alt="Bills-icon"></img>

    </div>
  )
}

export default Search