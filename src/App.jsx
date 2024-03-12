// import { useState } from 'react';
import './App.css';
import Sunglass from './assets/component/sunglass/sunglass';
import Watch from './assets/component/watch/watch';

function App() {

  // const [count, setCount] = useState(0);

  const watches = [
    { name : 'Apple', id : 2, color : 'red', price : 300},
    { name : 'samsung', id : 3, color : 'red', price : 400},
  ]

  return (
    <>
    <h2>My First Project</h2>
    <h4>This is test for checking</h4>
    <h4>Hey there</h4>
    <Sunglass> </Sunglass>
    <Watch> </Watch>

    
    {
      watches.map( watch => (
        <Watch key={watch.id}>
        Name : {watch.name} 
        </Watch>
      ) )
    }
    </>
  )
}

export default App
