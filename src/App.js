//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import React from 'react';
import data from './data';
import Tours from './components/Tours';
function App() {

const [tours, setTours]= useState(data)
function removeTour(id){
  const newTours = tours.filter(tour => tour.id!==id);
  setTours(newTours);
}

if (tours.length ===0){
  return (
    <div  className='refresh'> 
    <h2>
      No Tours Left
    </h2>
    <button onClick={ ()=> setTours(data)}  className='btnwhite'>
   Refresh
    </button>
    </div>
  )
}

  return (
   <div className='app'>
   {/* // <h2 className='title'> Tips from Mahima</h2> */}
    <Tours tours ={tours} removeTour={removeTour}></Tours>
   </div>
  );
}

export default App;
