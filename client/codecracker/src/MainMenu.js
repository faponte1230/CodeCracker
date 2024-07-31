import React, { useState } from 'react';
import GameCenter from './GameCenter';

function MainMenu() {
  const [start, setStart] = useState(false);
  const [easy, setEasy] = useState(false);
  const [medium, setMedium] = useState(false);
  const [hard, setHard] = useState(false);

  function startClick() {
    setStart((prevStart) => !prevStart);
    setEasy(false)
    setMedium(false)
    setHard(false)
  }

  function easyClick() {
    setEasy(true);
    setMedium(false);
    setHard(false);
  }

  function mediumClick() {
    setEasy(false);
    setMedium(true);
    setHard(false);
  }

  function hardClick() {
    setEasy(false);
    setMedium(false);
    setHard(true);
  }

  return (
    <div>
      <button className='button' onClick={startClick}>{start ? 'Main Menu' : 'Start'}</button>
      <br/>
      <br/>
      {start && (
        <GameCenter
          easy={easy}
          medium={medium}
          hard={hard}
          onEasyClick={easyClick}
          onMediumClick={mediumClick}
          onHardClick={hardClick}
        />
      )}
    </div>
  );
}

export default MainMenu;
