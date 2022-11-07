import { useEffect, useState } from 'react';


function App() {
  const [count,setCount] = useState(1)
  const [name,setName] = useState('')

  const handleInputChange = () => {
    setCount(count+1)
  }
  const handleTextChange = (e) => {
    setName(e.target.value)
  }



  useEffect(()=>{
    console.log('모든렌더링')
  })//dependency array
  

  useEffect(()=>{
    console.log('마운트+카운터')
  },[count])//dependency array
  
  useEffect(()=>{
    console.log('마운트+내임')
  },[name])//dependency array


  useEffect(()=>{
    console.log('마운트만')
  },[])//dependency array  
  
  return (
    <div>
     
     <button onClick={handleInputChange}>Update</button>
     <span>count:{count}</span>
     <input type="text" value={name} onChange={handleTextChange}/>
     <span>{name}</span>
    </div>
  )
}

export default App;
