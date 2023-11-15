import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'
import classNames from 'classnames'

class NotificationItem extends React.PureComponent {
  pick = this.props.type === 'default' ? css(styles.defaultStyle) : css(styles.urgentStyle);

  render() {
    const classGroup = classNames(this.pick, css(styles.notifStyle));
  
    if (this.props.value)
      return (<li className={classGroup} onClick={() => {this.props.markAsRead(this.props.id)}} data-notification-type={this.props.type}>{this.props.value}</li>)
    else 
      return (<li className={classGroup} onClick={() => {this.props.markAsRead(this.props.id)}} data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html}></li>)
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    color: 'blue',
  },
  
  urgentStyle: {
    color: 'red',
  },

  notifStyle: {
    '@media (max-width: 900px)': {
      listStyleType: 'none',
      borderBottom: '1px solid black',
      padding:'8px',
    }
  }
});


NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string}),
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
}

NotificationItem.defaultProps = {
  // type: 'default',
  markAsRead: () => void(0),
}

export default NotificationItem;
