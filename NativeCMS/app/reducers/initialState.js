import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  locationBeforeTransitions: null,
  page:'home',
  tabBarExtensions:[],
});

export default initialState;