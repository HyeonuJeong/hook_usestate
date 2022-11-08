
import { useState } from 'react';
import Page from './components/Page';
import './App.css';
import {ThemeContext} from './context/ThemeContext';
import { UserContext } from './context/UserContext';


//컨텍스트 사용
//프롭 드릴링 방지 효과
// .provider 로 랩핑


function App() {
  const [isDark, setIsDark] = useState(false);

  
  return (
    <UserContext.Provider value={'사용자'}>
    <ThemeContext.Provider value={{isDark,setIsDark}}>
    <Page/>
    </ThemeContext.Provider>
    </UserContext.Provider>
  );
}


export default App;