import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
} from 'react-native';
import {
  Text,
  Button,
  //  SocialIcon, List, ListItem, ListView, PricingCard
} from 'react-native-elements';
import styles from '../Styles/shared';
import colorStyles from '../Styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import capitalize from 'capitalize';

class TabIcon extends Component{ 
  // constructor(props){
  //   super(props);
  //   // this.state = {page:'second'};
  // }


  render() {
    let iconName = (this.props.selected) ? this.props.icon.initial : this.props.icon.initial; //this.props.icon.selected;
    let iconColor = (this.props.selected) ? colorStyles.active : colorStyles.nav;
    return (
      <TouchableHighlight onPress={()=>{
        this.props.onSelect({ props:this.props, });
      }}>
        <View style={styles.centerBox}>
          <Icon name={iconName} size={30} color={iconColor.color} />
          <Text style={[iconColor,styles.tabBarText]}>{capitalize(this.props.name)}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}


export default TabIcon;