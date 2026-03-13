import React from 'react';
import Hotline from './hotLine';
import ImageSlider from './imageSlider';
import ProductList from './productList';
import Certified from './Certified';

const Home = () => (
  <div>
    <ImageSlider />
    <ProductList />
    <Certified />
    <Hotline />
  </div>
);

export default Home;
