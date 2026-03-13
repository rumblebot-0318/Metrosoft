import React from 'react';
import TitleList from '../TitleList';
import PointDiv from '../pointDiv';
import DottedTitle from '../DottedTitle';
import SectionCard from '../../common/SectionCard';
import './business.scss';

const Lists = [
  '의료정보사업',
  'Metro-cERP',
  '헬스케어 서비스',
  'VOIP 사업',
  'MetroSMS',
  '알림톡',
  '주요 고객사'
];

const sections = [
  {
    title: 'MetroHIS 핵심 영역',
    description: '원무, 진료, 진료지원, 경영관리까지 통합한 병원정보시스템',
    highlights: [
      '수납/청구/보험심사 및 EDI 자동화',
      '전자의무기록(EMR)과 처방/간호 자동화',
      '진료장비/검사 시스템 연동 및 QC 관리',
      'EIS 기반 경영정보 및 물류/수익성 분석'
    ],
    accent: '#64b764'
  },
  {
    title: 'Cloud & VOIP',
    description: '클라우드 기반 인프라, VOIP 등의 통합 커뮤니케이션 및 알림',
    highlights: [
      '온프레미스/클라우드 하이브리드 운영',
      '통합 메시징·알림톡 연동',
      '노후 장비 교체 없는 SIP/VOIP 처리'
    ],
    accent: '#649dc2'
  },
  {
    title: '헬스케어/MetroSMS',
    description: '헬스케어 앱과 SMS 알림으로 환자 커뮤니케이션을 강화',
    highlights: [
      '모바일 건강관리(SaaS) 플랫폼',
      '환자 대상 MetroSMS/알림톡 발송 자동화',
      '원격 지원과 QR 기반 예약 알림'
    ],
    accent: '#feb40e'
  }
];

const businessNotes = [
  '의사, 간호사, 기사 등 현업 직군에서 검증된 MetroHIS',
  'EMR, OCS, CRM, ERP, mPocs를 하나의 패키지로 제공',
  '기존 의료장비와의 인터페이스를 통해 실시간 데이터 공유'
];

const Business = () => (
  <div className="content-page business-page">
    <TitleList object={Lists} />
    <PointDiv onTitle="의료정보사업" />
    <section className="business-page__grid">
      {sections.map((section) => (
        <SectionCard key={section.title} {...section} />
      ))}
    </section>
    <DottedTitle onTitle={{
      title: '사업 내용',
      subtitle: 'Medical Health Care Solution',
      content: businessNotes.join('/')
    }} onCheck />
  </div>
);

export default Business;
