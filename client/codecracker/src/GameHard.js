import React, { useState } from 'react';

function GameHard() {
  const [guess, setGuess] = useState({ digit1: '', digit2: '', digit3: '', digit4: '', digit5: '' });
  const [result, setResult] = useState({});
  const [message, setMessage] = useState('');
  const [errorsList, setErrorsList] = useState([]);

  const handleInputChange = (attribute, value) => {
    setGuess({ ...guess, [attribute]: value });
  };

  const handleGuess = async () => {
    try {
      const response = await fetch('/hardcheck', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(guess)
      });
      const data = await response.json();
      setResult(data);
      if (data.overall_result) {
        setMessage("You won!");
      } else {
        setMessage("Try again!");
      }
      console.log(data); // Log the received data from the response
    } catch (error) {
      console.error('Error:', error);
      setErrorsList(error.errors); //??
    }
  };

  const handleNewGame = async () => {
    try {
      const response = await fetch('/hardnew', {
        method: 'GET'
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
    setGuess({ digit1: '', digit2: '', digit3: '', digit4: '', digit5: '' });
    setResult(null)
  };

  return (
    <div>
      <button className='button' onClick={handleNewGame}>New Game</button>
      <input type="number" maxLength={1} name='1' value={guess.digit1} onChange={(e) => handleInputChange('digit1', e.target.value)} />
      <input type="number" maxLength={1} name='2' value={guess.digit2} onChange={(e) => handleInputChange('digit2', e.target.value)} />
      <input type="number" maxLength={1} name='3' value={guess.digit3} onChange={(e) => handleInputChange('digit3', e.target.value)} />
      <input type="number" maxLength={1} name='4' value={guess.digit4} onChange={(e) => handleInputChange('digit4', e.target.value)} />
      <input type="number" maxLength={1} name='5' value={guess.digit5} onChange={(e) => handleInputChange('digit5', e.target.value)} />
      <button className='button' onClick={handleGuess}>Submit Guess</button>
      <p>{message}</p>
      {errorsList && errorsList.map((e) => (<ul key={e} style={{color: "red"}}>{e}</ul>))}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {result.result && result.result.map((digitResult, index) => (
          <li key={index}>Digit {digitResult.digit}: {digitResult.status}</li>
        ))}
      </ul>
    </div>
  )
}

export default GameHard;
