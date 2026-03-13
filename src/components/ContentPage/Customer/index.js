import React, { useEffect, useState } from 'react';
import TitleList from '../TitleList';
import PointDiv from '../pointDiv';
import SectionCard from '../../common/SectionCard';
import CustomerTable from './CustomerTable';
import Remote from './RemoteControl';
import axios from 'axios';
import { useTranslation } from '../../../i18n';
import './customer.scss';

const Customer = () => {
  const { t } = useTranslation();
  const customer = t('pages.customer');
  const titleList = customer.titleList || [];
  const firstTitle = titleList[0] || '고객지원';
  const [addresses, setAddresses] = useState(null);

  useEffect(() => {
    axios
      .get('/Customer/index.json')
      .then((res) => setAddresses(res.data.address))
      .catch((err) => console.error('Customer data load failed', err));
  }, []);

  if (!addresses) {
    return <div className="customer-loading">Loading customer resources…</div>;
  }

  return (
    <div className="content-page customer-page">
      <TitleList items={titleList} />
      <PointDiv onTitle={firstTitle} />
      <section className="customer-page__grid">
        {(customer.sections || []).map((section) => (
          <SectionCard key={section.title} {...section} />
        ))}
      </section>
      <CustomerTable onContent={addresses} />
      <Remote />
    </div>
  );
};

export default Customer;
