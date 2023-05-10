import React, {useState} from 'react';
import './App.css';
import Restaurant from './Restaurant';
import Nav from './Nav';

function App() {

const  [restaurant, setRestaurants] = useState ([]);

  return (
   <div className="restaurants">
<Nav   restaurant={restaurant}  setRestaurants={setRestaurants}/>
{restaurant.map(rt => <Restaurant restaurant={rt}/> )}

   </div>
  );
}

export default App;
