import React from 'react';
import CEOIntroduce from './CeoIntroduce';
import Oragnization from './Organization';
import Timeliner from './Timeline';
import Map from './map';
import PointDiv from '../pointDiv';
import TitleList from '../TitleList';
import url from '../../server.json';
import './introduce.scss';

const Lists = ['인사말', '조직도', '회사소개', '연혁', '오시는 길'];
const dir = '01';

const Introduce = () => (
  <div className="content-page introduce-page">
    <TitleList object={Lists} />
    <section className="page-grid">
      <CEOIntroduce dir={dir} url={url.url} />
      <Oragnization dir={dir} url={url.url} />
      <Timeliner dir={dir} url={url.url} />
    </section>
    <section className="directions">
      <div className="direction-heading">
        <PointDiv onTitle="오시는 길" />
      </div>
      <div className="direction-content">
        <p>
          <strong>지하철 이용시:</strong> 금정역 2번출구 직진 200m, 미니스톱 좌회전 직진 교량 통과 우측 건물.
        </p>
        <p>
          <strong>버스 이용시:</strong> 4호선 범계역 6-2번 마을 LS타워 하차 또는 1호선 명학역 1번 출구 육교 건너 65번 버스 이용 LS타워 하차.
        </p>
      </div>
    </section>
    <div className="map-wrapper">
      <Map />
    </div>
  </div>
);

export default Introduce;
