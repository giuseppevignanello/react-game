import React, { useEffect, useState } from 'react';

const App = () => {
  const [playerPosition, setPlayerPosition] = useState([0, 0]);

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

  return (
    <div className='appWrapper'>
      <div className="container">
        <div className="game_arena position-relative">

          <div className="player cube position-absolute"
            style={{ top: `${playerPosition[0]}%`, left: `${playerPosition[1]}%` }}
          >
            <img src="../../public/giacomino.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;