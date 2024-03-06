import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/rates">BUY & SELL RATES</Link>
        </li>
        <li className={styles.logo}>RanExchanger.co.in</li>
        <li>
          <Link href="/astropay">ASTROPAY</Link>
        </li>
        <li>
          <Link href="/faqs">FAQs</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT US</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;