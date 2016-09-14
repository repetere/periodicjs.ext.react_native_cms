/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
  Component
} from 'react';
import {
  AppRegistry,
  ListView,
  NavigatorIOS,
  ScrollView,
  StatusBarIOS,
  StyleSheet,
  // Text,
  TouchableHighlight,
  View,
  Platform
} from 'react-native';
import CircleCheckBox from 'react-native-circle-checkbox';
// import CheckBox from 'react-native-checkbox';
import {
  Container,
  Header,
  Title,
  Content,
  Badge,
  Button,
  Icon,
  Card, 
  CardItem,
  Text,  List, ListItem, InputGroup, Input,
} from 'native-base';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
class react_native_cms extends Component {
  render() {
    return (<Container> 
                <Header>
                   <Button transparent>
                        <Icon name='ios-arrow-back' />
                    </Button>
                    
                    <Title>Header</Title>
                    
                    <Button transparent>
                        <Icon name='ios-menu' />
                    </Button>
                </Header>

                <Content>
                  <Badge>2</Badge>
                  <Badge primary>2</Badge>
                  <Badge success>2</Badge>
                  <Badge info>2</Badge>
                  <Badge warning>2</Badge>
                  <Badge danger>2</Badge>
                  <Badge style={{width: 30, backgroundColor: 'black'}} 
                          textStyle={{color: 'white', fontSize: 20, lineHeight: 20}}>
                      2
                  </Badge>
                  <View style={styles.container}>
                    <Text style={styles.welcome}>
                      Welcome to React Native CMS! NOpess
                    </Text>
                    <Text style={styles.instructions}>
                      To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                      Press Cmd+R to reload,{'\n'}
                      Cmd+D or shake for dev menu
                    </Text>
                    <CircleCheckBox
                      checked={true}
                      onToggle={(checked) => console.log('My state is: ', checked)}
                    />
                  </View>
         <Button primary> Primary </Button>
                    <Button success> Success </Button>
                    <Button block> Primary </Button>
                    <Button block success> Success </Button>
                    <Button block info> Info </Button>
                    <Button block warning> Warning </Button>
                    <Button block danger> Danger </Button>
        
                    <Button rounded warning> Warning </Button>
                    <Button rounded danger> Danger </Button>
        <Button info>
                        Previous
                        <Icon name='ios-arrow-back' />
        </Button>
        




        <Card>
                        <CardItem header>                        
                            <Text>Card Header</Text>
                        </CardItem>

                        <CardItem>              
                            <Icon name='logo-google' />                
                            <Text>Google</Text>
                        </CardItem>
                        <CardItem>                        
                            <Text>
                                //Your text here
                            </Text>
                        </CardItem>

                        <CardItem header>                        
                            <Text>Card Footer</Text>
                        </CardItem>
                   </Card>
                </Content>
      <Content>
                    <List>
                        <ListItem>
                            <InputGroup>
                                <Icon name='ios-person' />
                                <Input placeholder='EMAIL' />
                            </InputGroup>
                        </ListItem>
                    
                        <ListItem>
                            <InputGroup>
                                <Icon name='ios-unlock' />
                                <Input placeholder='PASSWORD' secureTextEntry={true}/>
                            </InputGroup>
                        </ListItem>
                    
                        <ListItem>
                            <InputGroup >
                                <Input inlineLabel label='NAME' placeholder='John Doe' />
                            </InputGroup>
                        </ListItem>
                    
                        <ListItem>
                            <InputGroup >
                                <Input stackedLabel label='Address Line 1' placeholder='Address' />
                            </InputGroup>
                        </ListItem>
                    </List>
                </Content>
            </Container>);
  }
}
AppRegistry.registerComponent('react_native_cms', () => react_native_cms);
if (Platform.OS == 'web') {
  var app = document.createElement('div');
  document.body.appendChild(app);
  AppRegistry.runApplication('react_native_cms', {
    rootTag: app,
  });
}
