import React from 'react';
import '../assets/Game.css'; 

function HomeCircle({ color, position }) {
  return (
    <div className={`HomeCircle ${color} ${position}`}></div>
  );
}

export default HomeCircle;