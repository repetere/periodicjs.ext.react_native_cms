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
  ScrollView,
  Navigator,
  TouchableHighlight
} from 'react-native';
import {
  Button, SocialIcon, List, ListItem, ListView, PricingCard
} from 'react-native-elements';
import Tabs from 'react-native-tabs';
import configExtensions from '../../../content/config/extensions.json';
import StandardExtensions from './extensions';
import styles from '../Styles/shared';
import TabIcon from '../AppTabs/TabIcon';
import Icon from 'react-native-vector-icons/Ionicons';

class Main extends Component{ 
  constructor(props){
    super(props);
    let tabs = configExtensions.standard;//.splice(3, 0, configExtensions.more);
    console.log(tabs);
    this.state = { 
      page:'home',
      tabBarExtensions: tabs,
    };
  }
  _onSelect(el){
    console.log('on select: el.props',el.props);
    this.setState({
      page:el.props.name,
    });
  }
  render() {
    let self = this;
    return (
      <View style={styles.container}>
        <Tabs selected={this.state.page} 
          style={styles.tabBar}
          onSelect={this._onSelect.bind(this)}>
            {configExtensions.standard.map((ext)=>{
              return  (<TabIcon 
              key={ext.name} 
              name={ext.name} 
              icon={ext.icon}
              onSelect={this._onSelect.bind(self)}
              />);
            })}
      
            
        </Tabs>
          <Text style={styles.welcome}>
              Welcome to React Native
          </Text>
          <Text style={styles.instructions}>
              Selected page: {this.state.page}
          </Text>
      </View>
    );
  }
}


export default Main;