import React from 'react';
import Hotline from './hotLine';
import ImageSlider from './imageSlider';
import ProductList from './productList';
import Certified from './Certified';
import SectionCard from '../common/SectionCard';
import './home.scss';

const highlights = [
  {
    title: '글로벌 병원 솔루션',
    description: 'MetroHIS/EMR 기반의 통합 솔루션',
    highlights: ['EMR & OCS 통합', 'CRM 기반 환자관리', 'Cloud 기반 서비스'],
    accent: '#169b9b'
  },
  {
    title: '디지털 커뮤니케이션',
    description: 'MetroSMS/알림톡/VOIP을 통한 실시간 커뮤니케이션',
    highlights: ['자동 알림', '원격 화상 상담', '비상 대응'],
    accent: '#0ea5e9'
  },
  {
    title: '콘텐츠 & 커뮤니티',
    description: '동화책, 문장, 메타버스 콘텐츠를 통한 브랜드 스토리',
    highlights: ['Story-driven UX', 'Community-driven narration', 'Custom multimedia delivery'],
    accent: '#f97316'
  }
];

const Home = () => (
  <div className="home-page">
    <ImageSlider />
    <section className="home-page__grid">
      {highlights.map((section) => (
        <SectionCard key={section.title} {...section} />
      ))}
    </section>
    <ProductList />
    <Certified />
    <Hotline />
  </div>
);

export default Home;
