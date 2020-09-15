import React from 'react';
import './TextContainer.css';

const TextContainer = ({ margin, content }) => (
  <div className={margin}>{content}</div>
);

export default TextContainer;
