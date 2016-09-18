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
import styles from '../../components/Styles/shared';
// import {
//   Button,Card, SocialIcon, List, ListItem, ListView, PricingCard
// } from 'react-native-elements';


class Home extends Component {
  // constructor(){
  //   super(...arguments);
  //   this.state = {
  //     ranattr:'ok',
  //   };
  // }
  render() {
    // console.log('RENDERING HOME');
    // console.log('rendering Home','this.state',this.state,'this.props',this.props)
    return (
      // <View style={styles.container}>
        <Text style={styles.welcome}>
          Now Home to React Native in app/extensions/home ?!
        </Text>
      // </View>
    );
  }
}

export default Home;