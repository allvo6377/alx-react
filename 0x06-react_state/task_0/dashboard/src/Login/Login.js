import React from 'react'
import { StyleSheet, css } from 'aphrodite'

function Login() {
  return (
    <React.Fragment>
      <body className={css(styles.bodyStyle)}>
        <p>Login to access the full dashboard</p>
        <div className={css(styles.colStyle)}>
          <label htmlFor='email' className={css(styles.labelStyle)}>Email: </label>
          <input type='email' id='email' name='email'/>
          <label htmlFor='password' className={css(styles.labelStyle)}>Password: </label>
          <input type='password' id='password' name='password'/>
          <button className={css(styles.buttonStyle)}>OK</button>
        </div>
      </body>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  bodyStyle: {
    marginTop: '2em',
    marginBottom: '2em',
    '@media (max-width: 900px)': {
      margin: '50px auto',
    }
  },
  labelStyle: {
    width: '10rem',
  },
  buttonStyle: {
    width: '3rem',
    '@media (max-width: 900px)': {
      marginTop: '5px',
    }
  },
  colStyle: {
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      width: '12rem',
    }
  },
});

export default Login;
