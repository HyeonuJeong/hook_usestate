import { useEffect, useRef, useState } from 'react';
import { inc } from 'semver';
import Timer from './timer';

//ref는 렌더링 되기전까지 저장함

function App() {
  
  const [count, setCount] = useState(0);
  const countRef=useRef(0)

  const increase =()=>{
    setCount(count+1)
  }

  const increaseref =()=>{
    countRef.current=countRef.current+1
    console.log(countRef.current)
  }
  // console.log(countRef.current)
  return(
    <div>
      <p>state:{count}</p>
      <p>Ref:{countRef.current}</p>
      <button onClick={increase}>+</button>
      <button onClick={increaseref}>+ref</button>
      
    </div>
  )
}

export default App;
