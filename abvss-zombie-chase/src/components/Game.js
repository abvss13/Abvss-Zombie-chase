import React, { useState, useEffect } from 'react';
import Player from './Player';
import Zombie from './Zombie';
import './Game.css';

const Game = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 0 });
  const [zombiePosition, setZombiePosition] = useState({ x: 200, y: 0 });
  const [score, setScore] = useState(0);

  const handleJump = () => {
    setPlayerPosition((prev) => ({ ...prev, y: 100 }));
  };

  const handleCollision = () => {
    // Implement collision detection logic
  };

  const updateGame = () => {
    // Implement game update logic (e.g., move zombie, check for collisions)
  };

  useEffect(() => {
    // Set up game loop
    const gameLoop = setInterval(() => {
      updateGame();
    }, 1000 / 60); // 60 frames per second

    // Clean up the interval on component unmount
    return () => clearInterval(gameLoop);
  }, []);

  return (
    <div className="game-container">
      <h1>Abvss Zombie Chase</h1>
      <p>Score: {score}</p>
      <Player position={playerPosition} onJump={handleJump} />
      <Zombie position={zombiePosition} />
    </div>
  );
};

export default Game;
