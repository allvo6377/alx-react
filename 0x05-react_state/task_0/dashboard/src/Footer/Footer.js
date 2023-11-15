import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

function Footer() {
  return (
    <footer className={css(styles.footerStyle)}>
      <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
    </footer>
  );
}

const styles = StyleSheet.create({
  footerStyle: {
    borderTop: '4px solid #e1354b',
    textAlign: 'center',
    fontSize: '20px',
  }
});

export default Footer;
