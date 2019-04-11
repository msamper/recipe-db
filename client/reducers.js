/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import intl from './modules/Intl/IntlReducer';
import auth from './modules/App/reducers/authReducer';
import error from './modules/App/reducers/errorReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  auth,
  error,
});
