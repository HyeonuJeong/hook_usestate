import { useEffect, useState } from 'react';
import Timer from './timer';


function App() {
  
  const [showTimer, setShowTimer] = useState(true);

  return(
    <div>
      {showTimer && <Timer/>}
      <button onClick={()=> setShowTimer(!showTimer)}>toggle timer</button>
    </div>
  )
}

export default App;
