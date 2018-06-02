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
  TouchableOpacity,
  Image,
  Keyboard,
  Alert,
  ActivityIndicator,
  ScrollView,
  Picker
} from 'react-native';
// Stylesheet
import Visual from '../visual/Visual.js';
import Theme from '../visual/Theme.js';
import { StackNavigator } from 'react-navigation';
import AppHeader from '../AppHeader';
import { Icon,Header, List, Card } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Autocomplete from 'react-native-autocomplete-input';



export default class KeluhanPasien extends Component<Props> {
  static navigationOptions = {
    headerStyle : {
      display : 'none'
    }
  };

  render() {
    let identitasDokter = <View style={[Visual.OrdinaryRow, {alignItems : 'center'}]}>
      <Text style={[Visual.default, Visual.bold]}>
          Dr. Ilham
      </Text>
      <Image source={require('../image/dr-aditya-surya.jpg')} style={{width : 30, height : 30, borderRadius : 50}}/>
    </View>

    return (
      <View style={{flex : 1, backgroundColor : 'white'}}>
        <Header
          leftComponent={{ icon: 'keyboard-backspace', color: 'white' }}
          rightComponent={identitasDokter}
          outerContainer={{ backgroundColor: Theme.ThemeColor }}
        />

        <ScrollView>
          <View>
            <View style={Visual.mgBottom20}>
              <Text style={Visual.mgBottom4}>
                  Scan QRCode di aplikasi handphone milik pasien anda
              </Text>

              <View>
                <Image />
              </View>

              <View style={[Visual.OrdinaryRow]}>
                <Text>
                  Kode Reservasi : 
                </Text>
                <Text style={Visual.bold}>
                  - 
                </Text>
              </View>
            </View>

            <View>
              <Text>
                Keluhan sementara : perut saya sakit setelah makan buah nangka, sempat diare namun tidak seting 
              </Text>
            </View>
          </View>
        </ScrollView>
              
        <View>
          <Image  style={{width : 28, height : 5}} />
          <Image  style={{width : 28, height : 5}} />
          <Image  style={{width : 28, height : 5}} />
        </View>
      </View>
    )
  }
}


