import React, { useState } from 'react'
import pic from '../Images/search.png'
import "../Pages/Navbar.css"
import {useDispatch } from "react-redux"
import { SeachMovie } from '../SearchRedux/Action'
import { Link } from 'react-router-dom'

const Navbar = () => { 
  const[value,setvalue] = useState("");
  const dispatch = useDispatch()
    return (
      <div>
      <div className='Container'>
    <Link to="/" style={{textDecoration:"none"}} >  <h1 className='imdb' >
    IMDb
    </h1></Link>
      <div className='div2'>
      <input type='text' className='search-box'  placeholder='   Search the movie name'  onChange={(e)=>{setvalue(e.target.value)}} />  
      <Link to='/SearchMovie'><img src={pic} className="image" onClick={()=>{dispatch(SeachMovie(value))}}  /></Link>

   <Link to='/Wishlist'><button className='wishbutton'>Wishlist</button></Link>

      </div>
        
      </div>
      </div>
    )
  }
  
  export default Navbar