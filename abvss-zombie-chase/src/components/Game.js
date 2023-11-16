import React, { useState, useEffect, useCallback } from 'react';
import Player from './Player';
import Zombie from './Zombie';
import './app.css';

const Game = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 0 });
  const [zombiePosition, setZombiePosition] = useState({ x: 200, y: 0 });
  const [score, setScore] = useState(0);

  const handleJump = useCallback(() => {
    if (playerPosition.y === 0) {
      setPlayerPosition((prev) => ({ ...prev, y: 100 }));
    }
  }, [playerPosition.y]);

  const updateGame = useCallback(() => {
    setPlayerPosition((prev) => {
      if (prev.y > 0) {
        // Simulate gravity
        return { ...prev, y: Math.max(0, prev.y - 5) };
      }
      return prev;
    });

    setZombiePosition((prev) => ({ ...prev, x: prev.x - 2 }));

    // Check for collision
    if (
      playerPosition.x < zombiePosition.x + 40 &&
      playerPosition.x + 40 > zombiePosition.x &&
      playerPosition.y < zombiePosition.y + 40 &&
      playerPosition.y + 40 > zombiePosition.y
    ) {
      // Collision occurred, handle accordingly (e.g., end game)
      console.log('Collision!');
    }

    // Check if zombie passed the player
    if (zombiePosition.x < 0) {
      setZombiePosition({ x: 400, y: 0 });
      setScore((prev) => prev + 1);
    }
  }, [playerPosition.x, playerPosition.y, zombiePosition]);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      updateGame();
    }, 1000 / 60);

    return () => clearInterval(gameLoop);
  }, [updateGame]);

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
