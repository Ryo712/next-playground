// cookie.js

import Cookies from 'js-cookie';

export function setDarkMode(isDarkMode) {
  Cookies.set('darkMode', isDarkMode);
}

export function getDarkMode() {
  return Cookies.get('darkMode') === 'true';
}
