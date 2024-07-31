import React, { useState } from 'react';

function Game() {
  const [guess, setGuess] = useState({ digit1: '', digit2: '', digit3: '' });
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState('');

  const handleInputChange = (attribute, value) => {
    setGuess({ ...guess, [attribute]: value });
  };

  const handleGuess = async () => {
    try {
      const response = await fetch('/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ secret_code: guess }),
      });
      const data = await response.json();
      setResult(data); // Update the state with the response data
      console.log(data); // Log the received data from the response
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleNewGame = async () => {
    try {
      const response = await fetch('/new', {
        method: 'GET',
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
    setGuess({ digit1: '', digit2: '', digit3: '' });
    setResult(null); // Reset the result when starting a new game
  };

  return (
    <div>
      <button className='button' onClick={handleNewGame}>New Game</button>
      <input type="number" maxLength={1} name='1' value={guess.digit1} onChange={(e) => handleInputChange('digit1', e.target.value)} />
      <input type="number" maxLength={1} name='2' value={guess.digit2} onChange={(e) => handleInputChange('digit2', e.target.value)} />
      <input type="number" maxLength={1} name='3' value={guess.digit3} onChange={(e) => handleInputChange('digit3', e.target.value)} />
      <button className='button' onClick={handleGuess}>Submit Guess</button>
      <p>{message}</p>
      {result && (
        <div>
          <h3>Result:</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {result.result.map((res, index) => (
              <li key={index}>
                Digit {res.digit}: {res.status}
              </li>
            ))}
          </ul>
          <p>{result.overall_result ? "You've won!" : 'Try Again'}</p>
        </div>
      )}
    </div>
  );
}

export default Game;