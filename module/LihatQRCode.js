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
  ActivityIndicator,
  Alert,
  TouchableHighlight,
  Image
} from 'react-native';
// Stylesheet
import Visual from './visual/Visual.js';
import Theme from './visual/Theme.js';
import AppHeader from './AppHeader.js';
import QRCode from 'react-native-qrcode';
import { ListItem } from 'react-native-elements';

export default class LihatQRCode extends Component<Props> {
  static navigationOptions = {
    title : "QR Code",
    
  }




  render() {
   

    // Menampilkan halaman kurir
    return (
      <View style={{backgroundColor : 'white', flex : 1}}>
        <View style={{paddingTop : 20, paddingLeft : 15, paddingRight : 15, alignItems : 'center'}}>
              <QRCode
                value="RDAA - Beyond The Technology"
                size={150}
                bgColor='black'
                fgColor='white'/>
        </View>

        <View style={Visual.pd10}>
            <ListItem
              key={0}
              title='Poli Mata'
              leftIcon={{name : 'account-balance'}}
            />

           <ListItem
              key={1}
              title='Dr. Ramdan Sugianto'
              leftIcon={{name : 'accessibility'}}
            />

            <ListItem
              key={2}
              title='Antrian ke-7'
              leftIcon={{name : 'clear-all'}}
            />

            <ListItem
              key={3}
              title='Perkiraan waktu jam 15:00'
              leftIcon={{name : 'alarm-on'}}
            />
        </View>

        <View style={{paddingLeft : 15, paddingRight : 15, alignItems : 'center', marginTop : 20}}>
          <Button title='Back To Dashboard' color={Theme.ThemeColor} onPress={() => this.props.navigation.navigate('Home')} />
        </View>
      </View>
    );
  }
}


