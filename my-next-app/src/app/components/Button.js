// components/Button.js

import React from 'react';

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {text}
    </button>
  );
}

export default Button;
