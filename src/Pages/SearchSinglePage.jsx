import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './SearchSinglePage.css'

const SearchedSinglePage = () => {
    const {id} =  useParams();
    const[data,SetData] = useState([]);
    const key ='k_58o3rx8d';
    // k_i78sxhyk another key
    useEffect(()=>{
    fetch(`http://imdb-api.com/en/API/Title/${key}/${id}`).then(data => data.json()).then(data =>{SetData(data)});
    },[])

    return(
        <div>
        <div className='Individual-image'>
        <div>
        <img src={data.image} className='single-images'/>
        </div>
        <div>
        <h1 className='single-title' >{data.title}</h1>
        <div className='inner-child'>
        <h3 className='year'>{data.year}</h3>
        <h3 className='length'>{data.runtimeStr}</h3>
        <h3 className='director'>{data.directors}</h3>
        </div>
        <span className='Cast'>Cast:{data.stars}</span>
        <p className='Description'><span style={{fontSize:'1.2rem',fontWeight:500}}>Movie Description</span>:{data.plot}</p>
        </div>   
         </div>
        
        
        </div>
    )
}
export default SearchedSinglePage;