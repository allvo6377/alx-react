import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import BodySection from './BodySection'
import { StyleSheetTestUtils } from 'aphrodite'


describe('Test BodySection component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })

  it('render correctly the children and one h2 element', () => {
    const wrapper = shallow(<BodySection title='test title'><p>test children node</p></BodySection>);
    expect(wrapper.find('p')).to.have.length(1);
    expect(wrapper.find('p').text()).to.equal('test children node');
    expect(wrapper.find('h2')).to.have.length(1);
    expect(wrapper.find('h2').text()).to.equal('test title');
  })
})