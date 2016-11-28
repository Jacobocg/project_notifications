import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import Notification from './notification';
import {removeAllNotificationsAction} from '../../store/actions';

const mapStateToProps = state => ({
  notifications: state.notifications,
});

const mapDispatchToProps = dispatch => ({
  onRemoveAllNotificationsClick: () => dispatch(removeAllNotificationsAction()),
});

const Notifications = ({notifications, onRemoveAllNotificationsClick}) => (
  <div>
    {
      notifications.map(notification => (
        <Notification key={notification.id} notification={notification} />
      ))
    }
    <button onClick={() => onRemoveAllNotificationsClick()}>Delete notes</button>
  </div>
);

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
