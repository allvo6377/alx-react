import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import CourseList from './CourseList'
import CourseListRow from './CourseListRow'
import { StyleSheetTestUtils } from 'aphrodite'

describe('renders CourseList components', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })

  it('renders without crashing', () => {
    expect(shallow(<CourseList />).exists());
  })

  it('renders 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).to.have.length(3);
  })
 
  it('verify that CourseList renders correctly if you pass an empty array or if you don’t pass the listCourses property', () => {
    const wrapper1 = shallow(<CourseList />);
    expect(wrapper1.find(CourseListRow)).to.have.length(3);
    const wrapper2 = shallow(<CourseList listCourses={[]} />);
    expect(wrapper2.find(CourseListRow)).to.have.length(3);
  })

  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  it('erify that when you pass a list of courses, the component renders it correctly', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow)).to.have.length(5);
  })
})
