import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import App from './App'
import CourseList from '../CourseList/CourseList'
import Login from '../Login/Login'
import { StyleSheetTestUtils } from 'aphrodite'
import AppContext, { user, logOut } from './AppContext'
import { getLatestNotification } from '../utils/utils'

describe('Test App renders', () => {
  // let events = {}

  // beforeEach(() => {
  //   events = {};
  //   document.addEventListener = jest.fn((event, callback) => {
  //     events[event] = callback;
  //   });
  // })
  const data = { user: user, logOut: logOut};
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
  ];

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })

  it('renders without crashing', () => {
    expect(shallow(<App />).exists());
  })

  it('renders 4 components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).to.have.length(1);
    expect(wrapper.find('Header')).to.have.length(1);
    expect(wrapper.find('Login')).to.have.length(1);
    expect(wrapper.find('Footer')).to.have.length(1);
  })

  it('Check CourseList is not displayed (isLoggedIn=false)', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).to.have.length(0);
  })

  it('Check Login and CourseList are included (isLoggedIn=true)', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: {isLoggedIn: true} });
    expect(wrapper.find(Login)).to.have.length(0);
    expect(wrapper.find(CourseList)).to.have.length(1);
  })

  it('verify that the default state of displayDrawer is false and test 2 functions', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).to.equal(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).to.equal(true);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).to.equal(false);
  })

  it('test to verify that markNotificationAsRead works correctly', () => {
    const wrapper = mount(<AppContext.Provider value={data}><App /></AppContext.Provider>);
    wrapper.setState({ listNotifications: listNotifications });
    expect(wrapper.state().listNotifications.length).to.equal(3);
    wrapper.instance().markNotificationAsRead(1);
    expect(wrapper.state().listNotifications.length).to.equal(2);
  })
})
