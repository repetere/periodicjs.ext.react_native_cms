/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
import TestPage from '../TestPage';
import {
  Button
} from 'react-native-elements';

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Now Main to React Native oh finally ?!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js and hot reloading 111
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menuss
        </Text>
        <Button
          title='BUTTON' />
        <Button
          raised
          icon={{name: 'cached'}}
          title='RAISED WITH ICON' />

        <Button
          small
          iconRight
          icon={{name: 'code', type: 'font-awesome'}}
          title='SMALL WITH RIGHT ICON' />

        <Button
          small
          icon={{name: 'envira', type: 'font-awesome'}}
          title='SMALL WITH RIGHT ICON' />

        <Button
          small
          icon={{name: 'squirrel', type: 'octicon', style: {marginLeft: 20}}}
          title='OCTICON' />
        <TestPage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Main;