/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Navigator,
  Platform,
  TouchableHighlight
} from 'react-native';

// import TestPage from '../TestPage';
// import NavigationExample from '../NavigationExample'; 
// //https://medium.com/@dabit3/react-native-navigator-navigating-like-a-pro-in-react-native-3cb1b6dc1e30#.a512hghmd
// //https://facebook.github.io/react-native/docs/using-navigators.html
// // https://facebook.github.io/react-native/docs/navigation.html
// // https://rnplay.org/apps/-
// // http://stackoverflow.com/questions/37395749/react-native-dynamic-listview-master-detail
import {
  Button,Card, SocialIcon, List, ListItem, ListView, PricingCard,
  Text,
} from 'react-native-elements';
import MyScene from '../MyScene';

class SimpleNavigationApp extends Component {
  render() {
    return <Text>testing text</Text>;
    // return (
    //   <Navigator
    //     initialRoute={{ title: 'My Initial Scene', index: 0 }}
    //     renderScene={(route, navigator) =>{
    //       return (
    //         <MyScene
    //           title={route.title}

    //           // Function to call when a new scene should be displayed           
    //           onForward={ () => {    
    //             const nextIndex = route.index + 1;
    //             navigator.push({
    //               title: 'Scene ' + nextIndex,
    //               index: nextIndex,
    //             });
    //           }}

    //           // Function to call to go back to the previous scene
    //           onBack={() => {
    //             if (route.index > 0) {
    //               navigator.pop();
    //             }
    //           }}
    //         />
    //       ); 
    //       }
    //     }
    //   />
    // );
  }
}

// The Router wrapper
class Main extends Component {
  render() {
    return (
      <SimpleNavigationApp
        
      />
    );
  }
}



export default Main;