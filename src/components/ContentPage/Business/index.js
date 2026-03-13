import React from 'react';
import Target from './Target';
import MetroHIS from './MetroHIS';
import VoIP from './VOIP';
import Cloud from './Cloud';
import TitleList from '../TitleList';
import HealthCare from './HealthCare';
import MetroSMS from './MetroSMS';
import Alarm from './Alarm';
import url from '../../server.json';
import './contentPage.scss';

const Lists = [
  '의료정보사업',
  'Metro-cERP',
  '헬스케어 서비스',
  'VOIP 사업',
  'MetroSMS',
  '알림톡',
  '주요 고객사'
];

const dir = '02';

const Business = () => (
  <div className="content-page">
    <TitleList object={Lists} />
    <MetroHIS />
    <Cloud />
    <HealthCare />
    <VoIP />
    <MetroSMS />
    <Alarm />
    <Target url={url.url} dir={dir} />
  </div>
);

export default Business;
