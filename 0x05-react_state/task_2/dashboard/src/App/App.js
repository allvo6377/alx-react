import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList'
import Proptypes from 'prop-types';
import { getLatestNotification } from '../utils/utils'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { user, logOut } from './AppContext';
import AppContext from './AppContext';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: {__html: getLatestNotification()} },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut
    };
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({ user: { email: email, password: password, isLoggedIn: true } });
  }

  logOut() {
    this.setState({ user: user });
  }

  render() {
    const { displayDrawer } = this.state;
    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut}}>
        <React.Fragment>
          <Notifications listNotifications={listNotifications} displayDrawer={this.state.displayDrawer}
                         handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer}></Notifications>
          <div className="App">
            <Header></Header>
            <div>
              {this.state.user.isLoggedIn ?
                <BodySectionWithMarginBottom title='Course list'>
                  <CourseList listCourses={listCourses}></CourseList>
                </BodySectionWithMarginBottom> :
                <BodySectionWithMarginBottom title='Log in to continue'>
                  <Login logIn={this.logIn}></Login>
                </BodySectionWithMarginBottom>}
              <BodySection title='News from the School'>
                <p>The vote of the best student project is now available!</p>
              </BodySection>
            </div>
            <Footer></Footer>
          </div>
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  isLoggedIn: Proptypes.bool,
  logOut: Proptypes.func,
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: null,
}

export default App;
