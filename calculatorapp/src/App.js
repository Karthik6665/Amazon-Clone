import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0); // eslint-disable-line no-unused-vars
  const [operatorEntered, setOperatorEntered] = useState(false);

  const handleButtonClick = value => {
    if (value === 'back') {
      setInput(prevInput => prevInput.slice(0, -1)); // eslint-disable-line no-unused-vars
      if (input.slice(-1).match(/[+\-*/]/)) {
        setOperatorEntered(false); // Reset operatorEntered state when backspace removes an operator
      }
    } else if (value === '%') {
      const percentageValue = parseFloat(input) / 100;
      setInput(percentageValue.toString());
    } else if (value === '+/-') {
      setInput(prevInput => {
        if (parseFloat(prevInput) > 0) {
          return '-' + prevInput;
        } else if (parseFloat(prevInput) < 0) {
          return prevInput.slice(1);
        } else {
          return prevInput;
        }
      });
    } else if (!operatorEntered || !value.match(/[+\-*/]/)) {
      // Check if an operator is already entered
      setInput(prevInput => prevInput + value);
      if (value.match(/[+\-*/]/)) {
        setOperatorEntered(true); 
      }
    }
  };

  const clearInput = () => {
    setInput('');
    setResult(0);
    setOperatorEntered(false); // Reset operatorEntered when input is cleared
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(input); // eslint-disable-line no-eval
      setInput(calculatedResult.toString());
      setResult(calculatedResult);
    } catch (error) {
      console.error('Error occurred while evaluating input:', error);
      setResult('Error');
    }
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'black', border: '1px solid black', borderRadius: '15px', alignItems: 'center', padding: '20px' }}>
        <input type="text" value={input} readOnly style={{ marginBottom: '10px', border: 'none', borderRadius: '10px', backgroundColor: 'black', color: 'white' }} />
        <div style={{ backgroundColor: 'black', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          <button className="calculator-button" style={{ backgroundColor: 'D4D4D2', color: 'black', border: 'none', borderRadius: '20px' }} onClick={clearInput}>
            AC
          </button>
          <button className="calculator-button" style={{ backgroundColor: 'D4D4D2', color: 'black', border: 'none', borderRadius: '20px' }} onClick={() => handleButtonClick('1')}>
            1
          </button>
          <button className="calculator-button" style={{ backgroundColor: 'D4D4D2', color: 'black', border: 'none', borderRadius: '20px' }} onClick={() => handleButtonClick('2')}>
            2
          </button>
          <button className="calculator-button" style={{ backgroundColor: '#FF5900', color: 'white', border: 'none', borderRadius: '20px' }} onClick={() => handleButtonClick('back')}>
            ←
          </button>
          <button className="calculator-button" style={{ backgroundColor: '#505050', color: 'white', border: 'none', borderRadius: '20px' }} onClick={() => handleButtonClick('3')}>
            3
          </button>
          <button className="calculator-button" style={{ backgroundColor: '#505050', color: 'white', border: 'none', borderRadius: '20px' }} onClick={() => handleButtonClick('4')}>
            4
          </button>
          <button className="calculator-button" style={{ backgroundColor: '#505050', color: 'white', border: 'none', borderRadius: '20px' }} onClick={() => handleButtonClick('5')}>
            5
          </button>
          <button className="calculator-button" style={{ backgroundColor: '#FF5900', color: 'white', border: 'none', borderRadius: '20px' }} onClick={() => handleButtonClick('+')}>
            +
          </button>
          <button className="calculator-button" style={{ backgroundColor: '#505050', color: 'white', border: 'none', borderRadius: '20px' }} onClick={() => handleButtonClick('6')}>
            6
          </button>
          <button className="calculator-button" style={{ backgroundColor: '#505050', color: 'white', border: 'none', borderRadius: '20px' }} onClick={() => handleButtonClick('7')}>
            7
          </button>
          <button className="calculator-button" style={{ backgroundColor: '#505050', color: 'white', border: 'none', borderRadius: '20px' }} onClick={() => handleButtonClick('8')}>
            8
          </button>
          <button className="calculator-button" style={{ backgroundColor: '#FF5900', color: 'white', border: 'none', borderRadius: '20px' }} onClick={() => handleButtonClick('-')}>
            -
          </button>
          <button className="calculator-button" style={{ backgroundColor: '#505050', color: 'white', border: 'none', borderRadius: '20px' }} onClick={() => handleButtonClick('9')}>
            9
          </button>
          <button className="calculator-button" style={{ backgroundColor: '#505050', color: 'white', border: 'none', borderRadius: '20px' }} onClick={() => handleButtonClick('0')}>
            0
          </button>
          <button className="calculator-button" style={{ backgroundColor: '#505050', color: 'white', border: 'none', borderRadius: '20px' }} onClick={() => handleButtonClick('.')}>
            .
          </button>
          <button className="calculator-button" style={{ backgroundColor: '#FF5900', color: 'white', border: 'none', borderRadius: '20px' }} onClick={() => handleButtonClick('*')}>
            ×
          </button>
          <button className="calculator-button" style={{ backgroundColor: '#FF5900', color: 'white', border: 'none', borderRadius: '20px' }} onClick={() => handleButtonClick('/')}>
            ÷
          </button>
          <button className="calculator-button" style={{ backgroundColor: '#FF5900', color: 'white', border: 'none', borderRadius: '20px' }} onClick={calculateResult}>
            =
          </button>
          <button className="calculator-button" style={{ backgroundColor: '#FF5900', color: 'white', border: 'none', borderRadius: '20px' }} onClick={() => handleButtonClick('%')}>
            %
          </button>
          <button className="calculator-button" style={{ backgroundColor: '#FF5900', color: 'white', border: 'none', borderRadius: '20px' }} onClick={() => handleButtonClick('+/-')}>
            +/-
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
