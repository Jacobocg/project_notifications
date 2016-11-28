import * as ActionTypes from '../actionTypes';

const initialState = [];
export const notifications = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_NOTIFICATION:
      return [
        action.payload,
        ...state,
      ];
    case ActionTypes.REMOVE_NOTIFICATION: {
      const notificationId = action.payload.notificationId;
      return state.filter(notification => notification.id !== notificationId);
    }
    case ActionTypes.REMOVE_ALL_NOTIFICATIONS: {
      // state.splice(0, state.length);
      // return state.splice(0, state.length);
      return state.filter(() => false === true);
    }
    default:
      return state;
  }
};
