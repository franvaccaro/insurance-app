import { combineReducers } from 'redux';
import mobileMenuReducer from './mobileMenuReducer';
import navMenuReducer from './navMenuReducer';
import notificationsReducer from './notificationsReducer';

const allReducers = combineReducers({
  mobileMenu: mobileMenuReducer,
  notifications: notificationsReducer,
  navMenu: navMenuReducer,
});

export default allReducers;
