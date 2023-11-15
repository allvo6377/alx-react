import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite'

describe('Test Footer renders', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })

  it('renders without crashing', () => {
    expect(shallow(<Footer />).exists());
  })

  it('renders text Copyright', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).includes('Copyright');
  })
})
