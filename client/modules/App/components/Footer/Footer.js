import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

export function Footer() {
  return (
    <div style={{ background: '#308e41 center' }} className={styles.footer}>
      <p>&copy; 2019 &middot; Michael Samper &middot; Georgia Hayes</p>
      <p><FormattedMessage id="twitterMessage" /> : <a href="https://twitter.com/@msamper13" target="_Blank">@msamper13</a></p>
    </div>
  );
}

export default Footer;
