import React from 'react';
import TitleList from '../TitleList';
import SectionCard from '../../common/SectionCard';
import './product.scss';

const products = [
  {
    title: 'EMR',
    description: '전자의무기록 중심의 Full Text EMR',
    highlights: [
      '심화 차트뷰 구성',
      '의사의 처방/기록/검사 연동',
      '간호/행정/연구 데이터 통합'
    ],
    accent: '#169b9b'
  },
  {
    title: 'iEMR',
    description: '모바일 친화적 즉시 처방 EMR',
    highlights: ['현장의 모바일 접근성', '즉시 처방·간호 자동화', '클라우드/온프레미스 병행'],
    accent: '#0ea5e9'
  },
  {
    title: 'OCS',
    description: 'Order Communication System',
    highlights: ['검사/처방/재료 청구 자동화', '검사 장비 인터페이스', '진료대기 관리'],
    accent: '#f97316'
  },
  {
    title: 'T-BIZ 모바일 EMR',
    description: '모바일에서 복합 치료 정보 제공',
    highlights: ['모바일 EMR 뷰', '실시간 커뮤니케이션', '내외부 연계'],
    accent: '#c084fc'
  },
  {
    title: 'ERP & CRM',
    description: '병원 경영/고객관리 통합 플랫폼',
    highlights: ['경영정보(EIS)', 'CRM 기반 고객관리', '예산/수익성 분석'],
    accent: '#ea580c'
  }
];

const Product = () => (
  <div className="content-page">
    <TitleList object={products.map((item) => item.title)} />
    <section className="product-page__grid">
      {products.map((item) => (
        <SectionCard key={item.title} {...item} />
      ))}
    </section>
  </div>
);

export default Product;
