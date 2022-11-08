import React from 'react'
import { useContext } from 'react';
import {ThemeContext} from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';


const Header = () => {
  const { isDark } = useContext(ThemeContext);
  const user =useContext(UserContext)

  console.log('user', user)
  
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black',
      }}
    >
      
      <h2>Welcom to {user}</h2>
    </header>
  );
};

export default Header;