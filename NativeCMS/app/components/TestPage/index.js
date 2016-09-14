import React, { Component, } from 'react';
import styles from './style';
import {
  Text,
  View,
} from 'react-native';

class TestPage extends Component {
  render(){
    return(<View style={styles.container}>
        <Text style={styles.welcome}>
         some page
        </Text>
      </View>);
  }
}

export default TestPage;
