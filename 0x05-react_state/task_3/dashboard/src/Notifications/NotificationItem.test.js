import React from 'react'
import { shallow } from 'enzyme'
import { expect as expectChai } from 'chai'
import NotificationItem from './NotificationItem'
import { StyleSheetTestUtils } from 'aphrodite'

describe('render NotificationItem component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })

  it('render the components without crashing', () => {
    expectChai(shallow(<NotificationItem />).exists());
  })

  it('renders correct type and value props', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    expectChai(wrapper.find('li').props()).to.have.property('data-notification-type', 'default');
    expectChai(wrapper.find('li').text()).to.equal('test');
  })

  it('renders correct html prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expectChai(wrapper.html()).to.equal('<li class="urgentStyle_137u7ef notifStyle_1oy6wfm"><u>test</u></li>');
  })

  it('Check the spy is being called with the right message', () => {
    const wrapper = shallow(<NotificationItem type='default' value='markAsRead' id={1} />);
    const markAsRead = wrapper.instance().markAsRead = jest.fn();
    wrapper.find('li').first().simulate('click');
    markAsRead(1);
    expect(markAsRead).toHaveBeenCalled();
  })
})
