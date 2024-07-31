import React, { useState } from 'react';

function GameMedium() {
  const [guess, setGuess] = useState({ digit1: '', digit2: '', digit3: '', digit4: '' });
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState('');
  const [errorsList, setErrorsList] = useState([]);

  const handleInputChange = (attribute, value) => {
    setGuess({ ...guess, [attribute]: value });
  };

  const handleGuessSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/medcheck', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ medium_code: guess }) // Ensure correct parameter structure
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data);
        console.log(data); // Log the received data from the response
      } else {
        const errorData = await response.json();
        setErrorsList(errorData.errors);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleNewGame = async () => {
    try {
      const response = await fetch('/mednew', {
        method: 'GET'
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
    setGuess({ digit1: '', digit2: '', digit3: '', digit4: '' });
    setResult(null); // Reset the result when starting a new game
  };

  return (
    <div>
      <button className='button' onClick={handleNewGame}>New Game</button>
      
      <input type="number" maxLength={1} name='1' value={guess.digit1} onChange={(e) => handleInputChange('digit1', e.target.value)} />
      <input type="number" maxLength={1} name='2' value={guess.digit2} onChange={(e) => handleInputChange('digit2', e.target.value)} />
      <input type="number" maxLength={1} name='3' value={guess.digit3} onChange={(e) => handleInputChange('digit3', e.target.value)} />
      <input type="number" maxLength={1} name='4' value={guess.digit4} onChange={(e) => handleInputChange('digit4', e.target.value)} />
      <button className='button' onClick={handleGuessSubmit}>Submit Guess</button>
      
      <p>{message}</p>
      {errorsList && errorsList.map((e) => (<ul key={e} style={{color: "red"}}>{e}</ul>))}
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
          <p>Overall Result: {result.overall_result ? "You've won!" : 'Incorrect'}</p>
        </div>
      )}
    </div>
  );
}

export default GameMedium;
