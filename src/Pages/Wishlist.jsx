import React from 'react'
import { useSelector } from 'react-redux';
import star from '../Images/star.png'
import "./Wishlist.css"

function Wishlist() {

    const list = useSelector((store) => store.wishlistreducer.list)
    console.log(list)


  return (
    
<div>

<h1 className='wishlists'>Your Wish List</h1>

<div  className='container'>
{
  list.map((e) =>(
 <div className='mini-contianer'>
 <img src={e.image} className="images" />
 <h1 className='titles'>{e.title}</h1>

 <div className='star-div'>
<img src={star}  className='star'/>
  <h1 className='ratings'>{e.rating}</h1>
 <h1 className='ratings' style={{marginLeft:"1em"}}>{e.year}</h1>
 </div>
 
 </div>

  ))
}


</div>
</div>
  )
}

export default Wishlist