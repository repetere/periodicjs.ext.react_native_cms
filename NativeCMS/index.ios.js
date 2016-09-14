/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Main from './app/components/Main';

class NativeCMS extends Component{
  render(){
    return <Main />;
  }
}

AppRegistry.registerComponent('NativeCMS', () => NativeCMS);
