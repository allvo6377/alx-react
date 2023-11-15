import React from 'react'
import { shallow } from 'enzyme'
import { expect as expectChai } from 'chai'
import Notifications from './Notifications'
import NotificationItem from './NotificationItem'
import { getLatestNotification } from '../utils/utils'
import { StyleSheetTestUtils } from 'aphrodite'

describe('Test Notifications renders', () => {
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: {__html: getLatestNotification()} },
  ];

  const listNotificationsNotUpdated = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
  ];

  const listNotificationsUpdated = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: {__html: getLatestNotification()} },
    { id: 4, type: 'default', value: 'New projects available' },
  ];

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })

  it('renders without crashing', () => {
    expect(shallow(<Notifications />).exists);
  })

  it('renders component items from NotificationItem', () => {
    const wrapper = shallow(<NotificationItem />);
    expectChai(wrapper.find('li')).to.have.length(1);
  })

  it('renders text', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const p = wrapper.find('p');
    expectChai(p.text()).to.equal('Here is the list of notifications');
  })

  it('renders the right html', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expectChai(wrapper.find(NotificationItem).first().html()).to.equal('<li class=\"urgentStyle_137u7ef notifStyle_1oy6wfm\">No new notification for now</li>');
  })

  it('Check menu item is being displayed when (displayDraw=false)', () => {
    const wrapper = shallow(<Notifications />);
    expectChai(wrapper.find('div#menuItem')).to.have.length(1);
  })

  it('Check div.Notifications is not being displayed when (displayDraw=false)', () => {
    const wrapper = shallow(<Notifications />);
    expectChai(wrapper.find('div#Notifications')).to.have.length(0);
  })

  it('Check menu item is being displayed when (displayDraw=true)', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expectChai(wrapper.find('#menuItem')).to.have.length(1);
  })

  it('Check div.Notifications is being displayed when (displayDraw=true)', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expectChai(wrapper.find('div#Notifications')).to.have.length(1);
  })

  it('verify that Notifications renders correctly if you pass an empty array or if you don’t pass the listNotifications property', () => {
    const wrapper1 = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expectChai(wrapper1.find(NotificationItem)).to.have.length(1);
    const wrapper2 = shallow(<Notifications displayDrawer={true} />);
    expectChai(wrapper2.find(NotificationItem)).to.have.length(1);
  })

  it('verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expectChai(wrapper.find(NotificationItem).exists());
    expectChai(wrapper.find(NotificationItem)).to.have.length(3);
  })

  it('verify that when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expectChai(wrapper.find(NotificationItem).first().html()).to.equal('<li class="urgentStyle_137u7ef notifStyle_1oy6wfm">No new notification for now</li>');
  })

  // it('mockup the console.log function', () => {
  //   const wrapper = shallow(<Notifications displayDrawer={true} />);
  //   console.log = jest.fn();
  //   wrapper.instance().markAsRead(1);
  //   expect(console.log).toHaveBeenCalled();
  // })

  // it('verify that when updating the props of the component with the same list, the component doesn’t rerender', () => {
  //   const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
  //   const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
  //   wrapper.setProps({ listNotifications: listNotificationsNotUpdated })
  //   expect(shouldComponentUpdate).toHaveBeenCalled();
  //   expect(shouldComponentUpdate).toHaveLastReturnedWith(false);
  // })

  // it('verify that when updating the props of the component with the same list, the component doesn’t rerender', () => {
  //   const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
  //   const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
  //   wrapper.setProps({ listNotifications: listNotificationsUpdated })
  //   expect(shouldComponentUpdate).toHaveBeenCalled();
  //   expect(shouldComponentUpdate).toHaveLastReturnedWith(true);
  // })

  it('verify clicking on menu and close button', () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} />);
    wrapper.find('#menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
    expect(handleHideDrawer).not.toHaveBeenCalled();
  })

  it('verify clicking on menu and close button', () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} />);
    wrapper.find('#closeItems').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
    expect(handleDisplayDrawer).not.toHaveBeenCalled();
  })
})
