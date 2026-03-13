import React, { Component } from 'react';
import styles from './header.scss';
import logo from '../../Image/metrologo.jpg';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.loadtitles = this.loadtitles.bind(this);
  }

  loadtitles() {
    // placeholder for hover logic
  }

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.branding}>
            <Link to="/">
              <img className={styles.boxImg} src={logo} alt="logo" />
            </Link>
          </div>
          <nav>
            <ul className={styles.navList}>
              <li className={styles.highlight}>
                <Link className={styles.context} to="/introduce" onMouseOver={this.loadtitles}>
                  회사소개
                </Link>
              </li>
              <li className={styles.highlight}>
                <Link className={styles.context} to="/business">
                  사업영역
                </Link>
              </li>
              <li className={styles.highlight}>
                <Link className={styles.context} to="/product">
                  제품소개
                </Link>
              </li>
              <li className={styles.highlight}>
                <Link className={styles.context} to="/customer">
                  고객센터
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
