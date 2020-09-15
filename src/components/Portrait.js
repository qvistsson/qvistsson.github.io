import React from 'react';
import './Portrait.css';

const Portrait = ({ img }) => <div className="Portrait-wrapper" style={{backgroundImage: `url(${img})`}}></div>;

export default Portrait;
