// DarkModeToggle.js

import React from 'react';
import { setDarkMode, getDarkMode } from './cookie';

function DarkModeToggle() {
  const darkMode = getDarkMode();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    // ダークモードのUIを切り替える
    document.body.style.backgroundColor = darkMode ? 'white' : 'black';
    document.body.style.color = darkMode ? 'black' : 'white';
  };

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
    </button>
  );
}

export default DarkModeToggle;
