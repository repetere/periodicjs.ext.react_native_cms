/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { View, Platform, } from 'react-native';
import Tabs from 'react-native-tabs';
import AppConfigExtensions from '../../../content/config/extensions.json';
import AppConfigSettings from '../../../content/config/settings.json';
import AppExtensions from './extensions';
import styles from '../Styles/shared';
import TabIcon from '../AppTabs/TabIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import capitalize from 'capitalize';
import { createStore, } from 'redux';
import { Provider } from 'react-redux';
import combinedReducers from '../../reducers';
import { Router, Route, browserHistory, hashHistory, createMemoryHistory, } from 'react-router';
import { syncHistoryWithStore, } from 'react-router-redux';

const historySettings = { browserHistory, hashHistory, createMemoryHistory, };
const store = createStore(combinedReducers);
if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept(combinedReducers, () => {
    const nextRootReducer = combinedReducers;
    store.replaceReducer(nextRootReducer);
  });
}

const history = (Platform.OS === 'web') ? syncHistoryWithStore(historySettings[ AppConfigSettings.routerHistory ], store) : createMemoryHistory(store);
const getComponentFromRouterLocation = (location) => {
  let locationArray = location.split('/');
  let appName = (locationArray[ 0 ].length > 0) ? locationArray[ 0 ] : locationArray[ 1 ];
  return capitalize(appName);
};
const getTabFromLocation = (location) => {
  if (!location) {
    return 'home';
  } else if (AppExtensions[ location ]) {
    return location.toLowerCase();
  } else {
    return 'home';
  }
};

class MainApp extends Component{ 
  constructor(props) {
    super(props);
    let tabs = AppConfigExtensions.standard.concat();//.splice(3, 0, AppConfigExtensions.more);
    tabs.splice(4, 0, AppConfigExtensions.more).slice(0, 4);
    this.state = { 
      page: getTabFromLocation(getComponentFromRouterLocation(props.location.pathname)),
      tabBarExtensions: tabs.slice(0,5),
    };
  }
  _onSelect(el){
    // console.log('on select: el.props',el.props);
    this.setState({
      page:el.props.name,
    });
  }
  render() {
    // console.log('this.state', this.state);
    // console.log('this.props', this.props);
    let self = this;
    let CurrentApp = AppExtensions[ capitalize(this.state.page) ] || AppExtensions.Home;
    return (
      <View style={styles.container}>
        <CurrentApp />
        <Tabs selected={this.state.page} 
          style={styles.tabBar}
          onSelect={this._onSelect.bind(this)}>
            {this.state.tabBarExtensions.map((ext)=>{
              return  (<TabIcon 
              key={ext.name} 
              name={ext.name} 
              icon={ext.icon}
              onSelect={this._onSelect.bind(self)}
              />);
            })}
        </Tabs>
      </View>
    );
  }
}

class Main extends Component{
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="*" component={MainApp} />
        </Router>
      </Provider>
    );
  }
}

export default Main;