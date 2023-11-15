import React from 'react'
import logo from '../assets/logo.jpg'
import { StyleSheet, css } from 'aphrodite'

function Header() {
  return (
    <header className={css(styles.headerStyle)}>
      <img src={logo} className={css(styles.logoStyle)} alt="logo" />
      <h1 className={css(styles.h1Style)}>School dashboard</h1>
    </header>
  );
}

const styles = StyleSheet.create( {
  logoStyle: {
    height: '18rem',
    width: '18rem',
    '@media (max-width: 400px)': {
      height: '12rem',
      width: '12rem',
    },
  },
  headerStyle: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottom: '4px solid #e1354b',
  },
  h1Style: {
    display: 'inline',
    marginLeft: '70px',
    marginTop: '170px',
    position: 'absolute',
    '@media (max-width: 900px)': {
      marginLeft: 'auto',
      marginTop: '100px',
    },
    '@media (max-width: 400px)': {
      fontSize: '30px',
      marginTop: '70px',
      marginLeft:'10px'
    },
    fontSize: '50px',
    color: '#e1354b',
  }
});

export default Header;
