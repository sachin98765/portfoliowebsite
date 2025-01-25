import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Function to handle button clicks
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Function to evaluate the input
  const handleEvaluate = () => {
    try {
      setResult(eval(input).toString()); // Use eval with caution in real-world apps
    } catch (error) {
      setResult('Error');
    }
  };

  // Function to clear input
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div style={styles.container}>
      <div style={styles.result}>
        <div>{input || '0'}</div>
        <div>{result && `= ${result}`}</div>
      </div>
      <div style={styles.buttons}>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
  },
  result: {
    textAlign: 'right',
    fontSize: '2em',
    marginBottom: '20px',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 80px)',
    gap: '10px',
  },
};

export default Calculator;
