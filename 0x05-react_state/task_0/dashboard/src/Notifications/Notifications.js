import React from 'react'
import close_icon from '../assets/close_icon.png'
import NotificationItem from'./NotificationItem'
import PropTypes from 'prop-types'
import NotificationItemShape from './NotificationItemShape'
import { StyleSheet, css } from 'aphrodite'
import classNames from 'classnames'

const btnStyle = {
  position: 'absolute',
  border: 'none',
  background: 'none',
  right: '1em',
};

class Notifications extends React.Component {
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    if(this.props.listNotifications.length < nextProps.listNotifications.length)
      return true;
    if(this.props.displayDrawer !== nextProps.displayDrawer)
      return true;
    return false;
  }

  notifText = this.props.displayDrawer === 'true' ? css(styles.upperText) : null;

  render() {
    const classGroup = classNames(this.notifText, css(styles.menuStyle));
    return (
      <div>
        <div className={classGroup} id='menuItem' onClick={this.props.handleDisplayDrawer}>Your notifications</div>
        {this.props.displayDrawer ? 
          (<div className={css(styles.notifStyle)} id='Notifications'>
            <button style={btnStyle} aria-label='Close' onClick={this.props.handleHideDrawer} id='closeItems'>
              <img src={close_icon} className={css(styles.iconStyle)} alt='close icon'></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.ulStyle)}>
              {this.props.listNotifications.length === 0 ? <NotificationItem value='No new notification for now' /> : <></>}
              {this.props.listNotifications.map((notif) => (<NotificationItem key={notif.id} type={notif.type} value={notif.value} html={notif.html} />))}
            </ul>
          </div>)
          : <></>}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
}

const animation = {
  'from': {
    opacity: 0.5,
  },

  'to': {
    opacity: 1,
  }
};

const bounce = {
  '0%': {
    transform: 'translateY(0)',
  },

  '50%': {
      transform: 'translateY(-5px)',
  },
  '75%': {
    transform: 'translateY(5px)',
  },
  '100%': {
      transform: 'translateY(0)',
  },
};

const styles = StyleSheet.create({
  notifStyle: {
    border: '2px dashed #e1354b',
    padding: '1rem',
    display: 'flexbox',
    width: '30rem',
    position: 'absolute',
    right: 0,
    '@media (max-width: 900px)': {
      position: 'relative',
      width: '100%',
      border: 'none',
      padding: '0',
      display: 'flexbox',
      right: 0,
      fontSize: '20px',
    }
  },

  ulStyle: {
    '@media (max-width: 900px)': {
      paddingLeft: '0'
    }
  },
  
  iconStyle: {
    width: '22px',
    height: '22px',
  },

  menuStyle: {
    float: 'right',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [animation, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3'
    }
  },

  upperText: {
    '@media (max-width: 900px)': {
      display: 'none'
    }
  },
});

export default Notifications;
