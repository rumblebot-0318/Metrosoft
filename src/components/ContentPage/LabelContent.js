import React from 'react';
import './labelContent.scss';

const LabelContent = ({ onTitle = '', onColor = '#169b9b', onAddLine = false }) => (
  <div className="label-content">
    <span className="label-content__pill">♦ {onTitle}</span>
    {onAddLine && <span className="label-content__divider" style={{ background: onColor }} />}
  </div>
);

export default LabelContent;
