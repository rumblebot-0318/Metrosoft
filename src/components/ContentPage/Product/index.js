import './contentPage.scss';
import React from 'react';
import EMR from './EMR';
import IEMR from './iEMR';
import OCS from './OCS';
import ERP from './ERP';
import CRM from './CRM';
import TBiz from './T_Biz';
import TitleList from '../TitleList';

const List = ['EMR','iEMR','OCS','T-BIZ 모바일 EMR','ERP','CRM'];

const Product = () => (
  <div className="content-page">
    <TitleList object={List} />
    <EMR />
    <IEMR />
    <OCS />
    <TBiz />
    <ERP />
    <CRM />
  </div>
);

export default Product;
