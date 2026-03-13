import React, { useEffect, useState } from 'react';
import CustomerTable from './CustomerTable';
import PointDiv from '../pointDiv';
import Remote from './RemoteControl';
import TitleList from '../TitleList';
import axios from 'axios';
import './customer.scss';

const Lists = ['고객지원', '원격지원'];
const Customer = () => {
  const [addresses, setAddresses] = useState(null);

  useEffect(() => {
    axios
      .get('/Customer/index.json')
      .then((res) => {
        setAddresses(res.data.address);
      })
      .catch((err) => {
        console.error('Customer data load failed', err);
      });
  }, []);

  if (!addresses) {
    return <div className="customer-loading">Loading customer resources…</div>;
  }

  return (
    <div className="content-page customer-page">
      <TitleList object={Lists} />
      <div className="customer-page__section">
        <PointDiv onTitle="고객지원" />
        <CustomerTable onContent={addresses} />
      </div>
      <div className="customer-page__section">
        <PointDiv onTitle="원격지원" />
        <Remote />
      </div>
    </div>
  );
};

export default Customer;
