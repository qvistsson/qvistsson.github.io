import React from 'react';
import './Portrait.css';
import Img from '../media/portfolioportrait.jpg';

const Portrait = () => (
  <div className="Portrait-wrapper">
    <div className="Portrait-img-wrapper m-small screen-medium-m">
      <img
        className="Portrait-img"
        src={Img}
        alt="Portrait of Oscar Lindqvist"
      />
    </div>
  </div>
);

export default Portrait;
