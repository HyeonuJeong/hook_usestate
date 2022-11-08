import React,{ useContext } from 'react';
import {ThemeContext} from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';
// import TopicContext from '../context/TopicContext';

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext)

  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
      }}
    >
      <p>context Hook {user}</p>
    </div>
  );
};

export default Content;