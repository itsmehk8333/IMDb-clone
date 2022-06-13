import React, { useState,useEffect  } from 'react';
import {useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import "../Pages/Homepage.css"
import star from '../Images/star.png'
import { AddMoviefunction } from '../WishlistRedux/Action';
function Homepage() {
    const key ='k_58o3rx8d';
const[wish, SetWish] = useState({});
const[details,SetDetails] = useState([]);
const dispatch = useDispatch()

console.log(details)
    useEffect(()=>{
       fetch(`http://imdb-api.com/en/API/MostPopularMovies/${key}`).then(data => data.json()).then(data =>{SetDetails(data.items)}); //.items
    },[])

   const firstArray = details.filter(function(e){
    return e.year == 2022 ;
})

const secondArray = details.filter(function(e){
  return e.year == 2021
})

const thirdArray = details.filter(function(e){
  return e.year == 2020;
})


  return (
    <div>
    <h1 className='firstRelease'>Relased on 2022</h1>
    <div className='Image-Container'>
      {
        firstArray.map(e =>(
       
        <div key={e.id} className="inner-div-1">
        <div className='image-div'>
        <Link to={`/${e.id}`}> <img src={e.image} className="image-2"/></Link>
        <p className='name-2'>{e.title}</p>
        </div>


        <div className='rating-div'>
        <img className='star'  src={star}/>
        <p className='rating'>{e.imDbRating}</p>
        </div>
        <button className='Watchlist' onClick={()=>{SetWish({
          title:e.title,
          image:e.image,
          rating:e.imDbRating,
          year:e.year 
        });
        dispatch(AddMoviefunction(wish))
      }} > Add to Watchlist</button>
       </div>
          
        ))
      }
      
      </div>
      <h1 className='firstRelease'>Relased on 2021</h1>
      <div className='Image-Container'>
        {
          secondArray.map(e =>(
         
        <div className='inner-div-1'>

     <div className='image-div'>
     
     <Link to={`/${e.id}`}>
     <img src={e.image} className="image-2"></img>
     </Link>
     
     <p className='name-2'>{e.title}</p>
     </div>
        <div className='rating-div'>
        <img className='star'  src={star}/>
        <p className='rating'>{e.imDbRating}</p>
        </div>
        <button className='Watchlist' onClick={()=>{SetWish({
          title:e.title,
          image:e.image,
          rating:e.imDbRating,
          year:e.year,
          length: e.runtimeStr

        });
        dispatch(AddMoviefunction(wish))
      }} > Add to Watchlist</button>
        </div>

          ))
        }
        
        </div>
        <h1 className='firstRelease'>Relased on 2020</h1>
        <div className='Image-Container'>
          {
            thirdArray.map(e =>(
           
            <div key={e.id} className="inner-div-1">
            
       <div className='image-div'>
       <Link to={`/${e.id}`}>
       <img src={e.image} className="image-2"></img>
       </Link>
    
       
       <p className='name-2'>{e.title}</p>
       </div>
            <div className='rating-div'>
            <img className='star'  src={star}/>
            <p className='rating'>{e.imDbRating}</p>
            </div>
            <button className='Watchlist' onClick={()=>{SetWish({
              title:e.title,
              image:e.image,
              rating:e.imDbRating,   year:e.year 
                                                 });
                  dispatch(AddMoviefunction(wish))                               
                                                }}> Add to Watchlist</button>
           </div>
              
            ))
          }
          
          </div>
    </div>
  )
}

export default Homepage