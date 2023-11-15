import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Test Login renders', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })

  it('renders without crashing', () => {
    expect(shallow(<Login />).exists());
  })

  it('renders 2 input and 2 label', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).to.have.length(3);
    expect(wrapper.find('label')).to.have.length(2);
  })

  it('verify that the submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.state().enableSubmit).to.equal(false);
  })

  it('verify that after changing the value of the two inputs, the button is enabled', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('#email').simulate('change', { target: { value: 'joe@gmail.com' } });
    wrapper.find('#password').simulate('change', { target: { value: '12345' } });
    expect(wrapper.state().enableSubmit).to.equal(true);
  })
})
