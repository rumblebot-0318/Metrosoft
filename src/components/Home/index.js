import React from 'react';
import { useTranslation } from '../../i18n';
import SectionCard from '../common/SectionCard';
import ProductList from './productList';
import Certified from './Certified';
import Hotline from './hotLine';
import './home.scss';

const Home = () => {
  const { t } = useTranslation();
  const home = t('pages.home');

  return (
    <div className="home-page">
      <section className="hero-banner">
        <div className="hero-banner__content">
          <p className="hero-banner__eyebrow">Metrosoft</p>
          <h1 className="hero-banner__title">{home.hero.title}</h1>
          <p className="hero-banner__description">{home.hero.description}</p>
          <button className="hero-banner__cta" type="button">
            {home.hero.cta}
          </button>
        </div>
      </section>
      <section className="home-page__grid">
        {(home.highlights || []).map((section) => (
          <SectionCard key={section.title} {...section} />
        ))}
      </section>
      <ProductList />
      <Certified />
      <Hotline />
    </div>
  );
};

export default Home;
