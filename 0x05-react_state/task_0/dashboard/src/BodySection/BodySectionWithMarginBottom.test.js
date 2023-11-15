import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom'
import BodySection from './BodySection'
import { StyleSheetTestUtils } from 'aphrodite'

describe('Test BodySectionWithMarginBottom component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })

  it('test should render correctly a BodySection component', () => {
    expect(shallow(<BodySectionWithMarginBottom title='test title' />).exists());
  })

  it('make sure the props are passed correctly to the child component', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title='test title'><p>test children node</p></BodySectionWithMarginBottom>);
    expect(wrapper.find(BodySection)).to.have.length(1);
    expect(wrapper.find(BodySection).props().title).to.equal('test title');
    expect(wrapper.find(BodySection).children()).to.have.length(1);
    expect(wrapper.find('p').text()).to.equal('test children node');
    expect(wrapper.find('p')).to.have.length(1);
  })
})
