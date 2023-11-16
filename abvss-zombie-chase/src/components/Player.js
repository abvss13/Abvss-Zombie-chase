import React from 'react';

const Player = ({ position, onJump }) => {
  return (
    <div
      className="player"
      style={{ left: `${position.x}px`, bottom: `${position.y}px` }}
      onClick={onJump}
    >
      🏃‍♂️
    </div>
  );
};

export default Player;
