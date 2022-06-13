import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect,useState} from 'react';
import './Seachpage.css';
import star from '../Images/star.png'

function Searchpage() {

  const Searchvalue = useSelector((store)=>store.Inputreducer.input);

  const [searchdata, SeatSearchData] = useState([])
const key ='k_58o3rx8d' 
useEffect(()=>{
  fetch(`https://imdb-api.com/en/API/Search/${key}/${Searchvalue}>`).then( data => data.json()).then(data  => SeatSearchData(data.results))
},[])
console.log(searchdata);
  return (
    <div>
    
    <div className='Image-Container'>
    {
      searchdata.map(e =>(
        <div key={e.id }  className="search-div">
  
        
  <Link to={`/SearchMovie/${e.id}`}><img src={e.image} className='Images'/></Link>
  <h1 className='Search-title'>{e.title}</h1>
 
  
        </div>
      ))
    }
    </div>
    
    
    </div>
  )
}

export default Searchpage