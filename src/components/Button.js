import React from 'react';

const Button = ({ symbol, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {symbol}
    </button>
  );
};

export default Button;
