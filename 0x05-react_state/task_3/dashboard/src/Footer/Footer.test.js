import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite'
import AppContext, { user } from '../App/AppContext';

describe('Test Footer renders', () => {
  const data = { user: user }
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })

  it('renders without crashing', () => {
    expect(shallow(<AppContext.Provider><Footer /></AppContext.Provider>).exists());
  })

  it('renders text Copyright', () => {
    const wrapper = shallow(<AppContext.Provider><Footer /></AppContext.Provider>);
    expect(wrapper.find(Footer).html()).includes('Copyright');
  })

  it('verify that the link is not displayed when the user is logged out', () => {
    const wrapper = shallow(<AppContext.Provider value={data} ><Footer /></AppContext.Provider>);
    expect(wrapper.find('footer a')).to.have.length(0);
  })

  it(' verify that the link is displayed when the user is logged in', () => {
    data.user.isLoggedIn = true
    const wrapper = shallow(<AppContext.Provider value={data} ><Footer /></AppContext.Provider>);
    expect(wrapper.find(Footer).html()).includes('Contact us');
  })
})
