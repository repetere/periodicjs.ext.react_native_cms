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
  Navigator,
  TouchableHighlight
} from 'react-native';
import {
  Button, SocialIcon, List, ListItem, ListView, PricingCard
} from 'react-native-elements';
//https://medium.com/@dabit3/react-native-navigator-navigating-like-a-pro-in-react-native-3cb1b6dc1e30#.a512hghmd

var Main = React.createClass({
 
  /* PLAY AROUND WITH ANY OF THESE CONFIGURATIONS:
  PushFromRight
  FloatFromRight
  FloatFromLeft
  FloatFromBottom
  FloatFromBottomAndroid
  FadeAndroid
  HorizontalSwipeJump
  HorizontalSwipeJumpFromRight
  VerticalUpSwipeJump
  VerticalDownSwipeJump */
  
   renderScene(route, navigator) {
    return <route.component navigator={navigator} {...route.passProps} />
	 },
   
  configureScene(route, routeStack){
    if(route.type == 'Modal') {
    	return Navigator.SceneConfigs.FloatFromBottom;
    }
  	return Navigator.SceneConfigs.HorizontalSwipeJump; 
  },
  
  render() {
    return (
      <Navigator
      	configureScene={ this.configureScene.bind(this) }
      	style={{ flex:1 }}
        initialRoute={{ component: Main2 }}
        renderScene={ this.renderScene.bind(this) } />
    )
  }
});

var Main2 = React.createClass({
  _navigate(name, type='Normal') {
  	this.props.navigator.push({
    	component: Home,
      passProps: {
      	name: name
      },
      type: type
    })
  },
	render() {    
    return (
    	<View style={ styles.container }>
      	<Text style={ styles.heading }>Hello from Main</Text>
 		
        <Button
          raised
          onPress={ () => this._navigate('YOYOYOYOYO','')}
          icon={{name: 'cached'}}
          title='GO To Home' />

        <Button
          onPress={ () => this._navigate('YOYOYOYOYO', 'Modal') }
          small
          icon={{name: 'squirrel', type: 'font-awesome' }}
          title='Show Modal' />
      </View>
    )
  }
})

class Home extends Component {  
  render() {
    return (
    	<View style={ styles.container }>
      	<Text style={ styles.heading }>Hello from { this.props.name }</Text>
          <Button
            onPress={ () => this.props.navigator.pop() }
            small
            icon={{name: 'envira', type: 'font-awesome'}}
            title='GO BACK' />      	
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
   	marginTop: 80
  },
  heading: {
  	fontSize:22,
    marginBottom:10
  },
  button: {
  	height:60,
    justifyContent: 'center',
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button2: {
  	height:60,
    marginTop: 15,
    justifyContent: 'center',
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
  	fontSize:20
  }
});

export default Main;