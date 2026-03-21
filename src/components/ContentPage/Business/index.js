import React from 'react';
import TitleList from '../TitleList';
import PointDiv from '../pointDiv';
import DottedTitle from '../DottedTitle';
import SectionCard from '../../common/SectionCard';
import { useTranslation } from '../../../i18n';
import './business.scss';

const Business = () => {
  const { t } = useTranslation();
  const business = t('pages.business');
  const titleList = business.titleList || [];
  const firstTitle = titleList[0] || '의료정보사업';
  const dotted = business.dottedTitle || {};

  return (
    <div className="content-page business-page">
      <TitleList items={titleList} />
      <PointDiv onTitle={firstTitle} />
      <section className="business-page__grid">
        {(business.sections || []).map((section) => (
          <SectionCard key={section.title} {...section} />
        ))}
      </section>
      <DottedTitle onTitle={dotted} onCheck />
    </div>
  );
};

export default Business;
