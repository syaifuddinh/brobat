/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Visual from './visual/Visual.js';



export default class App extends Component<Props> {
  static navigationOptions = {
    headerStyle : {
      display : 'none'
    }
  };

  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Selamat siang pasien yang terhormat. Ada yang bisa kami bantu ?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }
  
  render() {
    return (
     <View style={{flex : 1}}> 
       <View style={[Visual.OrdinaryRow,  {backgroundColor : 'white', padding : 6 }]}>
          <View style={[Visual.OrdinaryRow, {alignItems : 'center'}]}>
            <Image source={require('./image/dr-aditya-surya.jpg')} style={[{width : 35, height : 35, borderRadius : 100}, Visual.mgRight8]} />
            <Text style={Visual.title}>
              Dr. Surya Aditya
            </Text>
          </View>
        </View>

        <View style={{flex : 1}}>
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
        </View>
       </View>
    );
  }
}

