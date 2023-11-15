import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import CourseListRow from './CourseListRow'
import { StyleSheetTestUtils } from 'aphrodite'


describe('renders CourseListRow components', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })

  it('When isHeader is true without TextSecondCell', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell={'test'} />);
    expect(wrapper.find('th').props()).to.have.property('colSpan', '2');
  })

  it('When isHeader is true with TextSecondCell', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell={'1st test'} textSecondCell={'2nd test'} />);
    expect(wrapper.find('th')).to.have.length(2);
  })

  it('', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell={'1st test'} textSecondCell={'2nd text'} />)
    expect(wrapper.find('td')).to.have.length(2);
    expect(wrapper.find('tr')).to.have.length(1);
  })
})
