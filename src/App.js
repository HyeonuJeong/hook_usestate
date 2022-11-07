import { useEffect, useRef, useState } from 'react';


// input ref={ref}를 통해서 자동으로 편의성에 맞게 포커싱을 맞춰준다 
function App() {
  const inRef=useRef()
  
  useEffect(() => {
    console.log('inRef', inRef)
    inRef.current.focus()
  }, []);

  const login =()=>{
    alert(`환영합니다 ${inRef.current.value}`)
    inRef.current.focus()
  }
  // const increaseref=()=>{
  //   countRef.current=countRef.current+1
  //   console.log('ref:',countRef.current)
  // }

  // console.log(countRef.current)
  return(
    <div>
      <input ref={inRef} placeholder = 'name'></input>
      
      <button onClick={login}> 로그인</button>
    </div>
  )
}

export default App;
