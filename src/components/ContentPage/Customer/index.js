import React, { useEffect, useState } from 'react';
import TitleList from '../TitleList';
import PointDiv from '../pointDiv';
import SectionCard from '../../common/SectionCard';
import CustomerTable from './CustomerTable';
import Remote from './RemoteControl';
import axios from 'axios';
import './customer.scss';

const Lists = ['고객지원', '원격지원'];
const supportSections = [
  {
    title: '고객지원 네트워크',
    description: '국내 다양한 병원에 구축된 지원팀과 서포트 채널',
    highlights: ['전담 컨설턴트 매칭', '상시 모니터링', '정기 업데이트/교육'],
    accent: '#0ea5e9'
  },
  {
    title: '원격 지원',
    description: '원격 접속으로 실시간 문제 해결',
    highlights: ['MetroSMS/알림톡 통합 공지', '원격/온사이트 팀 협업', '24시간 대응 라인'],
    accent: '#059669'
  }
];

const Customer = () => {
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
      <TitleList object={Lists} />
      <PointDiv onTitle="고객지원" />
      <section className="customer-page__grid">
        {supportSections.map((section) => (
          <SectionCard key={section.title} {...section} />
        ))}
      </section>
      <CustomerTable onContent={addresses} />
      <Remote />
    </div>
  );
};

export default Customer;
