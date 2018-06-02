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
  TouchableHighlight,
  TextInput,
  ActivityIndicator,
  Image,
  ListView,
  ScrollView,
  Alert
} from 'react-native';
// Stylesheet
import Visual from './visual/Visual.js';
import Theme from './visual/Theme.js';
import AppHeader from './AppHeader';
import { Icon,Header, List, ListItem} from 'react-native-elements';




export default class PilihPasien extends Component<Props> {
  static navigationOptions = {
    title : 'Pilih Pasien',
   
   
  };

  constructor(props) {
    super(props);
  
    this.state = {
      sendTo : '',
      pasienTerpilih : '',
      daftarPasien : [
        {
          nama : 'Fariha Nur Laili'
        },
        {
          nama : 'Reza Mochammad'
        },
        {
          nama : 'Kina Assalamy'
        },
        {
          nama : 'Diah Agustina Fita'
        },
      ]
    };
  }

  pilihPasien(namaPasien) {
    this.setState({
      pasienTerpilih : namaPasien
    });
  }

  _kirimNamaPasien(namaPasien){
    let sendTo = this.props.navigation.state.params ? this.props.navigation.state.params.requestFrom : '';
    let pasien = {
      namaPasien : namaPasien
    };

    this.props.navigation.navigate(sendTo, pasien);
  }

  render() {

    return (
      <View style={[{flex : 1}]}>
        <View style={[Visual.pd10, {backgroundColor : 'white'}]}>
          <View style={[Visual.OrdinaryRow, {width : 180}] }>
            <TextInput underlineColorAndroid={Theme.ThemeColor} placeholder='Masukkan nama pasien' style={{width : 250}} value={this.state.pasienTerpilih} />
            <View elevation={5} style={{justifyContent : 'center', height : 40, backgroundColor : Theme.ThemeColor, shadowColor : 'black', shadowOpacity : 1, shadowOffset : {width : 1, height : 3}}}>
              <TouchableHighlight
                onPress={() => this._kirimNamaPasien(this.state.pasienTerpilih)}
                style={Visual.pd10}
              >
                <View>
                  <Text style={[Visual.bold, {color : 'white'}]}>
                      PILIH
                  </Text>
                </View>  
              </TouchableHighlight>
            </View>
          </View>
          
          <Text style={[Visual.bold, Visual.textSmall]}>
              Daftarkan sebagai pasien baru
          </Text>
        </View>

         <View style={{marginTop: 12}}>
            <List>
                {
                  this.state.daftarPasien.map((l, i) => (
                    <ListItem
                      roundAvatar
                      key={i}
                      title={l.nama}
                      onPress={() => this.setState({pasienTerpilih : l.nama}) }
                    />
                  ))
                }
            </List>
         </View>
      </View>
      
    );
  }
}


