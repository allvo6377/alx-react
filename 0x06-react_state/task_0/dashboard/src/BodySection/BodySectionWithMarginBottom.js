import React from 'react'
import PropTypes from 'prop-types'
import BodySection from './BodySection'
import { StyleSheet, css } from 'aphrodite'

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className={css(styles.Margin)}>
        <BodySection title={this.props.title} children={this.props.children}></BodySection>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  Margin: {
    marginBottom: '40px'
  },
  small: {
    marginTop: '2em',
    marginBottom: '2em',
    '@media (max-width: 900px)': {
      paddingLeft: '20%',
      margin: '50px auto',
    }
  },
});

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string
}

BodySectionWithMarginBottom.defaultProps = {
  title: ''
}

export default BodySectionWithMarginBottom;
