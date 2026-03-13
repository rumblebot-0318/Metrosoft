import React from 'react';
import TitleList from '../TitleList';
import PointDiv from '../pointDiv';
import DottedTitle from '../DottedTitle';
import SectionCard from '../../common/SectionCard';
import Map from './map';
import './introduce.scss';

const Lists = ['인사말', '조직도', '회사소개', '연혁', '오시는 길'];
const introSections = [
  {
    title: 'CEO 인사말',
    description: '렌다씨는 별빛을 모아 마을에 희망을 나눠주는 메타버스 스토리를 운영합니다.',
    highlights: ['자연과 기술을 연결', '이야기 기반 상호작용', '휴먼 코어 철학'],
    accent: '#169b9b'
  },
  {
    title: '조직도',
    description: '각 팀은 연구/개발/운영/커뮤니케이션으로 구성되어 있어요.',
    highlights: ['크리에이티브 워크플로우', '릴레이션 매니지먼트', '연구와 운영의 클로즈드 루프'],
    accent: '#0ea5e9'
  },
  {
    title: '회사소개',
    description: '문학적 상상력을 담은 디지털 스토리 회사입니다.',
    highlights: ['글로벌 프로젝트 운영', '도서관/전시/메타버스 융합', '자체 IP 개발'],
    accent: '#f97316'
  }
];

const Introduce = () => (
  <div className="content-page introduce-page">
    <TitleList object={Lists} />
    <PointDiv onTitle="회사 소개" />
    <section className="introduce-page__grid">
      {introSections.map((section) => (
        <SectionCard key={section.title} {...section} />
      ))}
    </section>
    <DottedTitle
      onTitle={{
        title: '오시는 길',
        subtitle: '금정역 / 범계역 / 명학역 접근',
        content:
          '지하철 금정역 2번 출구 직진 & 범계역 6-2번 마을버스 + 명학역 65번 버스 / 메트로타워 근처 랜드마크'
      }}
    />
    <div className="introduce-page__map">
      <Map />
    </div>
  </div>
);

export default Introduce;
