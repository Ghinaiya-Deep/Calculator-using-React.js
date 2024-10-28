import React, { useState } from 'react';
import Display from './components/Display';
import Button from './components/Button';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  
  const handleClick = (value) => {
    if (value === '=') {
      try {
        // eslint-disable-next-line
setDisplayValue(eval(displayValue).toString());
      } catch {
        setDisplayValue('Error');
      }
    } else if (value === 'C') {
      setDisplayValue('');
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  return (
    <div className="calculator">
        <h2 style={{textAlign:'center'}}>Deep's Calculator</h2>
        <br/>
      <Display value={displayValue} />
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((symbol) => (
          <Button key={symbol} symbol={symbol} onClick={() => handleClick(symbol)} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
