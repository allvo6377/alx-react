import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let headerStyle = { backgroundColor: '#deb5b545' };
  let rowStyle = { backgroundColor: '#f5f5f5ab' };
  const pick = isHeader ? headerStyle : rowStyle;

  if (isHeader) {
    if (!textSecondCell) {
      return (
        <tr style={pick}>
          <th className={css(styles.rows)} colSpan='2'>{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={pick}>
          <th className={css(styles.rows)}>{textFirstCell}</th>
          <th className={css(styles.rows)}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={pick}>
        <td className={css(styles.rows)}>{textFirstCell}</td>
        <td className={css(styles.rows)}>{textSecondCell}</td>
      </tr>
    );
  }
}

const styles = StyleSheet.create({
  rows: {
    border: '1px solid #ddd',
    width: '100%',
    padding: '10px',
  }
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}

export default CourseListRow;
