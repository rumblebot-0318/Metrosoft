import React from 'react';
import './pointDiv.scss';

const PointDiv = ({ onTitle }) => (
  <div className="section-heading">
    <h1 className="section-heading__title" id={onTitle}>
      {onTitle}
    </h1>
    <span className="section-heading__line" />
  </div>
);

export default PointDiv;
