import React from 'react'
import CourseListRow from './CourseListRow'
import PropTypes from 'prop-types'
import CourseShape from './CourseShape'
import { StyleSheet, css } from 'aphrodite'

function CourseList({ listCourses }) {
  return(
    <table className={css(styles.CourseList)}>
      <thead>
        <tr>
          <CourseListRow textFirstCell='Available course' isHeader={true} />
          <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
        </tr>
      </thead>
      <tbody>
        <tr>
          {listCourses.length === 0 ? <CourseListRow textFirstCell='No course available yet' isHeader={false} /> : <></>}
          {listCourses.map((course) => (<CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />))}
        </tr>
      </tbody>
    </table>
  );
}

const styles = StyleSheet.create({
  CourseList: {
    width: '80%',
    borderCollapse: 'collapse',
    marginTop: '3%',
    marginBottom: '20%',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
}

CourseList.defaultProps = {
  listCourses: [],
}

export default CourseList;
