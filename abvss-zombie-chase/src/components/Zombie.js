import React from 'react';

const Zombie = ({ position }) => {
  return (
    <div
      className="zombie"
      style={{ left: `${position.x}px`, bottom: `${position.y}px` }}
    >
      🧟
    </div>
  );
};

export default Zombie;
