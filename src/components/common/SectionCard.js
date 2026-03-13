import React from 'react';
import '../common/sectionCard.scss';

const SectionCard = ({ title, description, highlights = [], accent }) => (
  <article className="section-card" style={{ borderColor: accent }}>
    <h3 className="section-card__title" style={{ color: accent }}>{title}</h3>
    <p className="section-card__description">{description}</p>
    {highlights.length > 0 && (
      <ul className="section-card__list">
        {highlights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
  </article>
);

export default SectionCard;
