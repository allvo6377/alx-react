import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import App from '../App/App'
import AppContext, { user, logOut } from '../App/AppContext'

describe('Test Header renders', () => {
  const data = { user: user, logOut: logOut};

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })

  it('renders without crashing', () => {
    expect(shallow(<AppContext.Provider value={data}><Header /></AppContext.Provider>).exists());
  })

  // it('renders 1 img and 1 h1', () => {
  //   const wrapper = mount(<AppContext.Provider value={data}><Header /></AppContext.Provider>);
  //   expect(wrapper.find('img')).to.have.length(1);
  //   expect(wrapper.find('h1')).to.have.length(1);
  // })
})
