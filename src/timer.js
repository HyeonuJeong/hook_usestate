import React, { useEffect } from 'react';



const Timer = (props) => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머...')
        }, 1000);
    
    return () =>{
        clearInterval(timer);
        console.log('timer end')
    }
},[])

    return (  
        <div>
            <span>타이머시작 </span>
        </div>
    );
}

export default Timer;