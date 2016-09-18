import { combineReducers, } from 'redux';
import pageReducer from './pages';
import tabBarExtensionReducer from './tabBarExtensions';
import { routerReducer, } from 'react-router-redux';

const NativeCMSReducer = combineReducers({
  page: pageReducer,
  tabBarExtensions: tabBarExtensionReducer,
  routing: routerReducer,
});

export default NativeCMSReducer;