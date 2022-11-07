import { useEffect, useRef, useState } from 'react';
import { inc } from 'semver';
import Timer from './timer';

//ref는 렌더링 되기전까지 저장함
//let 변수도 렌더링 되기전까지 저장
//let은 렌더링되면 값이 초기화됨 ref는 언마운트전까지 계속 저장함

function App() {

  const [render,setRender]=useState(0)

  const countRef=useRef(0)

  let countVar=0;

  const doRender=()=>{
    setRender(render+1)
  }

  const increaseref=()=>{
    countRef.current=countRef.current+1
    console.log('ref:',countRef.current)
  }


  const increasevar=()=>{
    countVar=countVar+1
    console.log('var:',countVar)
  }

  const print=()=>{
    console.log(`ref:${countRef.current}, var:${countVar}`)
  }

  // console.log(countRef.current)
  return(
    <div>
      <p>Var:{countVar}</p>
      <p>Ref:{countRef.current}</p>
      <button onClick={doRender}> 렌더링</button>
      <button onClick={increasevar}>+var</button>
      <button onClick={increaseref}>+ref</button>
      <button onClick={print}>ref var</button>
    </div>
  )
}

export default App;
