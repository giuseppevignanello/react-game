import React, { useEffect, useState } from 'react';

const App = () => {
  const [playerPosition, setPlayerPosition] = useState([random_multiple_5(0, 90), random_multiple_5(0, 90)]);
  const [applePosition, setApplePosition] = useState([random_multiple_5(0, 90), random_multiple_5(0, 90)]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        setPlayerPosition((prevPosition) => [prevPosition[0] - 5, prevPosition[1]]);
        break;
      case 'ArrowDown':
        setPlayerPosition((prevPosition) => [prevPosition[0] + 5, prevPosition[1]]);
        break;
      case 'ArrowLeft':
        setPlayerPosition((prevPosition) => [prevPosition[0], prevPosition[1] - 5]);
        break;
      case 'ArrowRight':
        setPlayerPosition((prevPosition) => [prevPosition[0], prevPosition[1] + 5]);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const respawnAppleAndUpdateScore = () => {
      if (playerPosition[0] === applePosition[0] && playerPosition[1] === applePosition[1]) {

        //increase the score 
        setScore((prevScore) => prevScore + 1);
        //respawn apple 
        setApplePosition([random_multiple_5(0, 90), random_multiple_5(0, 90)]);
      }
    };

    respawnAppleAndUpdateScore();
  }, [playerPosition, applePosition]);

  useEffect(() => {
    if (playerPosition[0] > 90 || playerPosition[0] < 0 || playerPosition[1] > 90 || playerPosition[1] < 0) {
      alert('You Lose');
      // Reset score
      setScore(0);
      //Re-spawn player and apple 
      setPlayerPosition([random_multiple_5(0, 90), random_multiple_5(0, 90)]);
      setApplePosition([random_multiple_5(0, 90), random_multiple_5(0, 90)]);
    }
  }, [playerPosition]);

  //random function 
  function random_multiple_5(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 5) * 5;
  }

  return (
    <div className='appWrapper'>
      <div className="container">
        <h3 className='text-center'>Score: {score}</h3>
        <div className="game_arena position-relative">
          <div className="player cube position-absolute"
            style={{ top: `${playerPosition[0]}%`, left: `${playerPosition[1]}%` }}
          >
            <img src="../../public/stevejobs.png" alt="" />
          </div>
          <div className='apple cube position-absolute'
            style={{ top: `${applePosition[0]}%`, left: `${applePosition[1]}%` }}>
            <img src="../../public/apple.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
