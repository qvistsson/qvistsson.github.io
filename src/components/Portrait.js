import React from 'react';
import './Portrait.css';

const Portrait = ({ img, color }) => (
  <div
    className="Portrait-wrapper"
    style={{ backgroundImage: `url(${img})`, backgroundColor: color }}
  ></div>
);

export default Portrait;
