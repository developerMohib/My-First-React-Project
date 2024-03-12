// import { useState } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Sunglass from './assets/component/sunglass/sunglass';
import Watch from './assets/component/watch/watch';

function App() {

  const [watches, setWatches] = useState([]);

  useEffect( () => {
    // local file
    // fetch('watches.json')

    // live server. shouldnot dot this
    fetch('https://raw.githubusercontent.com/developerMohib/create-json-data/master/create-watcehes.json')
    .then ( res => res.json())
    .then(data => setWatches(data));
  }, [] )


  // const [count, setCount] = useState([]);
// -----------------------------------------------
  // const watches = [
  //   {
  //     name: "Apple Watch Series 8",
  //     id: 1,
  //     color: "Space Gray",
  //     price: 429
  //   },
  //   {
  //     name: "Samsung Galaxy Watch 5",
  //     id: 2,
  //     color: "Mystic Black",
  //     price: 399
  //   },
  //   {
  //     name: "Fitbit Sense 2",
  //     id: 3,
  //     color: "Lunar White",
  //     price: 299
  //   },
  //   {
  //     name: "Amazfit GTR 3 Pro",
  //     id: 4,
  //     color: "Black",
  //     price: 199
  //   },
  //   {
  //     name: "Huawei Watch GT 3",
  //     id: 5,
  //     color: "Active Green",
  //     price: 349
  //   }
  // ]

  return (
    <>
    <h2>My First Project</h2>
    <h4>Hey there</h4>
    <Sunglass> </Sunglass>
    {/* <Watch> </Watch> */}

    {
      // 
      watches.map(watch => (
        <Watch key={watch.id} watch = {watch} > </Watch>
      ))
    }
    
    {
      // watches.map(watch => console.log(watch))
    }
    </>
  )
}

export default App

/*

        color : {watch.color} 
        price : {watch.price} 
*/ 