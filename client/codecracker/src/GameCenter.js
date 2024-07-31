import React from 'react';
import Game from './Game';
import GameMedium from './GameMedium';
import GameHard from './GameHard';

function GameCenter({ easy, medium, hard, onEasyClick, onMediumClick, onHardClick }) {
  return (
    <div>
      <button className='button'onClick={onEasyClick}>Easy</button>
      <button className='button'onClick={onMediumClick}>Medium</button>
      <button className='button'onClick={onHardClick}>Hard</button>
      <div>
        <br></br>
        {easy && <Game />}
        {medium && <GameMedium />}
        {hard && <GameHard />}
      </div>
    </div>
  );
}

export default GameCenter;
