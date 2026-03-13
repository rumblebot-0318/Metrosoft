import React from 'react';
import TitleList from '../TitleList';
import PointDiv from '../pointDiv';
import DottedTitle from '../DottedTitle';
import SectionCard from '../../common/SectionCard';
import Map from './map';
import { useTranslation } from '../../../i18n';
import './introduce.scss';

const Introduce = () => {
  const { t } = useTranslation();
  const introduce = t('pages.introduce');
  const titleList = introduce.titleList || [];
  const firstTitle = titleList[0] || '회사 소개';

  return (
    <div className="content-page introduce-page">
      <TitleList items={titleList} />
      <PointDiv onTitle={firstTitle} />
      <section className="introduce-page__grid">
        {(introduce.sections || []).map((section) => (
          <SectionCard key={section.title} {...section} />
        ))}
      </section>
      <DottedTitle onTitle={introduce.dottedTitle} />
      <div className="introduce-page__map">
        <Map />
      </div>
    </div>
  );
};

export default Introduce;
