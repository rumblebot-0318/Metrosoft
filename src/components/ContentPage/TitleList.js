import React from 'react';
import './titleList.scss';

const TitleList = ({ object = [] }) => (
  <div className="title-list">
    {object.map((obj, i) => (
      <a className="title-list__item" key={i} href={`#${obj}`}>
        {obj}
      </a>
    ))}
  </div>
);

export default TitleList;
