import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Image/metrologo.jpg';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';
import './header.scss';

const navLinks = [
  { to: '/introduce', label: '회사소개' },
  { to: '/business', label: '사업영역' },
  { to: '/product', label: '제품소개' },
  { to: '/customer', label: '고객센터' }
];

const Header = () => (
  <header className="header">
    <div className="headerInner">
      <div className="branding">
        <Link to="/">
          <img className="boxImg" src={logo} alt="logo" />
        </Link>
      </div>
      <nav>
        <ul className="navList">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link className="context" to={link.to}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="headerActions">
        <LocaleSwitcher />
      </div>
    </div>
  </header>
);

export default Header;
