import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

class BodySection extends React.Component {
  render() {
    return(
      <div className='bodySection'>
        <section className={css(styles.small)}>
          <h2>{this.props.title}</h2>
          {this.props.children}
        </section>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  small: {
    marginTop: '2em',
    marginBottom: '2em',
    '@media (max-width: 900px)': {
      paddingLeft: '20%',
      paddingRight: '15%',
      margin: '50px auto',
    }
  },
});

BodySection.propTypes = {
  title: PropTypes.string
}

BodySection.defaultProps = {
  title: ''
}

export default BodySection;
