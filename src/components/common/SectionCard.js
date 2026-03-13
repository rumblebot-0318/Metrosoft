import React from 'react';
import '../common/sectionCard.scss';

const shimmer = (accent) => {
  if (!accent) return 'linear-gradient(145deg, #fff, #f8fafc)';
  return `linear-gradient(145deg, ${accent}15, ${accent}05)`;
};

const SectionCard = ({ title, description, highlights = [], accent = '#169b9b' }) => (
  <article
    className="section-card"
    style={{
      borderColor: accent,
      background: shimmer(accent)
    }}
  >
    <h3 className="section-card__title">{title}</h3>
    <p className="section-card__description">{description}</p>
    {highlights.length > 0 && (
      <ul className="section-card__list">
        {highlights.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    )}
  </article>
);

export default SectionCard;
