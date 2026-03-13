import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import Sticky from 'react-sticky-el';
import { FaCaretUp } from 'react-icons/fa';
import Header from './components/Header';
import Footer from './components/Footer';
import Sitemap from './components/Sitemap';
import Home from './components/Home';
import Introduce from './components/ContentPage/Introduce';
import Business from './components/ContentPage/Business';
import Product from './components/ContentPage/Product';
import Customer from './components/ContentPage/Customer';
import './app.scss';

const basename = process.env.PUBLIC_URL || '/';

const App = () => (
  <BrowserRouter basename={basename}>
    <div className="app-shell">
      <Sticky>
        <Header />
      </Sticky>
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/business" element={<Business />} />
          <Route path="/product" element={<Product />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <ScrollToTop showUnder={200} style={{ bottom: '80px' }}>
        <div style={{ color: '#169b9b' }}>
          <FaCaretUp size={40} />
        </div>
      </ScrollToTop>
      <Sitemap />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
