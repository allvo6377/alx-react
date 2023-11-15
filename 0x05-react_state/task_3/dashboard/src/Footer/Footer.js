import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className={css(styles.footerStyle)}>
        <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
        { this.context.user.isLoggedIn ? <p id='contact'><a>Contact us</a></p> : <></> }
      </footer>
    );
  }
}

const styles = StyleSheet.create({
  footerStyle: {
    borderTop: '4px solid #e1354b',
    textAlign: 'center',
    fontSize: '20px',
  }
});

Footer.contextType = AppContext;

export default Footer;
