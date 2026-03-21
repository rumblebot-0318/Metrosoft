import React from 'react';
import './roundTitle.scss';

const RoundTitle = ({ onTitle = '' }) => (
  <div className="round-title">
    <span className="round-title__pill">{onTitle}</span>
    <span className="round-title__rail" />
  </div>
);

export default RoundTitle;
