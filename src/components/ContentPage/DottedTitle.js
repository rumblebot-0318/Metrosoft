import React from 'react';
import './dottedTitle.scss';

const DottedTitle = ({ onTitle = {}, onCheck = false }) => {
  const { title = '', subtitle = '', content = '' } = onTitle;
  const paragraphs = content.split('/').filter((row) => row.trim().length > 0);

  return (
    <article className={`dotted-title ${onCheck ? 'dotted-title--packed' : ''}`}>
      <div className="dotted-title__wrap">
        <div className="dotted-title__title">{title}</div>
        <div className="dotted-title__subtitle">{subtitle}</div>
        <div className="dotted-title__border">
          {paragraphs.map((row, index) => (
            <p className="dotted-title__paragraph" key={`${row}-${index}`}>
              {row}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default DottedTitle;
