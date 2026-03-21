import React from 'react';
import './titleList.scss';

const TitleList = ({ items = [] }) => (
  <div className="title-list">
    {items.map((item, index) => (
      <span className="title-list__item" key={`${item}-${index}`}> {item} </span>
    ))}
  </div>
);

export default TitleList;
