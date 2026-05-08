import { useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  console.log(isDarkMode);
  return (
    <div className={`theme-box ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2>{isDarkMode ? '영남이형' : '이정우형'}</h2>
      <p>상태값(isDarkMode) : {isDarkMode.toString()}</p>

      <button onClick={toggleTheme} className='toggle-btn'>
        {isDarkMode ? '영남이형' : '너무 영남이형'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
