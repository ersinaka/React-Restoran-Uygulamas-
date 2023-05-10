import React from 'react'

export default function Nav({restaurant, setRestaurants}) {

const fetchRestaurant = async () =>{
     
    const res = await 
    fetch("https://random-data-api.com/api/restaurant/random_restaurant");
    const data = await res.json();
    console.log(data)
    setRestaurants([...restaurant, data])
 
}


  return (
    <div className='navbar'>
        <button onClick={fetchRestaurant}>Add New Restaurant</button>
    </div>
    )
}
