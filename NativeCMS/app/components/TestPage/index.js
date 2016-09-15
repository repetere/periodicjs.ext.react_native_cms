import React, { Component, } from 'react';
import styles from './style';
import {
  Text,
  View,
} from 'react-native';
import {
  Button,Card, SocialIcon, List, ListItem, ListView, PricingCard
} from 'react-native-elements';

class TestPage extends Component {
  render(){
    return(<View style={styles.container}>
        <Card
          title='CARD WITH DIVIDER'>
          <Text>
          just some text
          </Text>
          {    /* comment */ }
        </Card>
        <PricingCard
          color='red'
          title='Free'
          price='$0'
          info={['1 User', 'Basic Support', 'All Core Features']}
          button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
        />
        <Button
          small
          iconRight
          icon={{name: 'code', type: 'font-awesome'}}
          title='SMALL WITH RIGHT ICON' />
      </View>
      
      );
  }
}

export default TestPage;
