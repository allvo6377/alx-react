import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import PropTypes from 'prop-types'
import classNames from 'classnames';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit() {
    this.props.logIn(this.state.email, this.state.password);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
    if (event.target.value.length !== 0 && this.state.email.length !== 0)
      this.setState({ enableSubmit: true });
    else
      this.setState({ enableSubmit: false });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
    if (event.target.value.length !== 0 && this.state.password.length !== 0)
      this.setState({ enableSubmit: true });
    else
      this.setState({ enableSubmit: false });
  }

  
  render() {
    const classGroup = classNames(css(styles.bodyStyle), css(styles.colStyle));
    return (
      <React.Fragment>
        <div className={classGroup}>
          <form onSubmit={this.handleLoginSubmit}>
            <p>Login to access the full dashboard</p>
            <label htmlFor='email' className={css(styles.labelStyle)}>Email: </label>
            <input type='email' id='email' name='email' value={this.state.email} onChange={this.handleChangeEmail} />
            <label htmlFor='password' className={css(styles.labelStyle)}>Password: </label>
            <input type='password' id='password' name='password' value={this.state.password} onChange={this.handleChangePassword} />
            <input type='submit' value='OK' disabled={!this.state.enableSubmit} className={css(styles.buttonStyle)}/>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  handleLoginSubmit: PropTypes.func,
  handleChangeEmail: PropTypes.func,
  handleChangePassword: PropTypes.func,
}

Login.defaultProps = {
  handleLoginSubmit: () => {},
  handleChangeEmail: () => {},
  handleChangePassword: () => {},
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
