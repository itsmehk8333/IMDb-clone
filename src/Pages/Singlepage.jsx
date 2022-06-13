import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Singlepage.css"

const Singlepage = () => {
    const {id} =  useParams();
    const[data,SetData] = useState([]);
    const key ='k_58o3rx8d';
    useEffect(()=>{
    fetch(`http://imdb-api.com/en/API/Title/${key}/${id}`).then(data => data.json()).then(data =>{SetData(data)});
    },[])
     console.log(data)
  
  return (
    <div className='Individual-image'>
   <div>
   <img src={data.image} className='imagess'/>
   </div>
   <div>
   <h1 className='title1' >{data.title}</h1>
   <div className='inner-child'>
   <h3 className='year'>{data.year}</h3>
   <h3 className='length'>{data.runtimeStr}</h3>
   <h3 className='director'>{data.directors}</h3>
   </div>
   <span className='Cast'><span style={{marginRight:"10px", letterSpacing:'1px'}}>Cast:</span>{data.stars}</span>
   <p className='Description'><span style={{fontSize:'1.2rem',fontWeight:500, marginRight:"20px"}}>Movie Description :</span>{data.plot}</p>
   </div>   
    </div>
  )
}

export default Singlepage