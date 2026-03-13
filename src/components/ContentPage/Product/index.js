import React from 'react';
import TitleList from '../TitleList';
import SectionCard from '../../common/SectionCard';
import { useTranslation } from '../../../i18n';
import './product.scss';

const Product = () => {
  const { t } = useTranslation();
  const product = t('pages.product');

  return (
    <div className="content-page">
      <TitleList items={product.titleList} />
      <section className="product-page__grid">
        {(product.sections || []).map((section) => (
          <SectionCard key={section.title} {...section} />
        ))}
      </section>
    </div>
  );
};

export default Product;
