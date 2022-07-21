import { combineReducers } from 'redux';
import mobileMenuReducer from './mobileMenuReducer';

const allReducers = combineReducers({
  mobileMenu: mobileMenuReducer,
});

export default allReducers;
