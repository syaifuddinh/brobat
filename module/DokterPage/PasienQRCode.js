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
  Button,
  TextInput,
  TouchableHighlight,
  Image,
  Keyboard,
  Alert,
  ScrollView,
} from 'react-native';
// Stylesheet
import Visual from '../visual/Visual.js';
import Theme from '../visual/Theme.js';
import { Icon } from 'react-native-elements';
import QRCode from 'react-native-qrcode';

export default class PasienQRCode extends Component<Props> {
  static navigationOptions = {
    title : 'Scan QRCode',
    
  };

  constructor(props) {
    super(props);
  
    // this.state = { pasienAmbilObat : true};
  }

  render() {
    return (
      <View style={{backgroundColor : 'white'}}>
        <View style={Visual.pd15}>
          <View style={[Visual.row, Visual.mgBottom8, {justifyContent : 'center'}]}>
              <Icon name='info-outline' size={14} color={Theme.ThemeColor} iconStyle={Visual.mgRight4} />
              <Text style={[Visual.bold, {color : Theme.ThemeColor}]}>
                Serahkan QRCode ini kepada Customer Service
              </Text>
          </View>

          <View style={{alignItems : 'center', marginBottom : 20}}>
             <QRCode
                value='BROBATAPP'
                size={200}
                bgColor='black'
                fgColor='white'/>
          </View>

          <View style={{alignItems : 'center'}}>
              <Button title="BACK TO HOME" width={65} onPress={() => this.props.navigation.navigate('MainMenu')} />
          </View>
        </View>
      </View>
    )
  }
}


