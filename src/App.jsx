import React, { useEffect, useState } from 'react';

const App = () => {
  let [playerPosition, setPlayerPosition] = useState([0, 0]);
  let [applePosition, setapplePosition] = useState([30, 50]);

  useEffect(() => {

    window.addEventListener('keydown', handleKeyDown);


    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function random_multiple_5(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 5) * 5;
  }

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

  if (playerPosition[0] == applePosition[0] && playerPosition[1] == applePosition[1]) {
    applePosition[0] = random_multiple_5(0, 95);
    applePosition[1] = random_multiple_5(0, 95);
  }

  return (
    <div className='appWrapper'>
      <div className="container">
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