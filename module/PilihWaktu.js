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
  Alert,
  ListView,
  ScrollView,
} from 'react-native';
// Stylesheet
import Visual from './visual/Visual.js';
import Theme from './visual/Theme.js';
import { StackNavigator } from 'react-navigation';
import AppHeader from './AppHeader';
import { Icon,Header, List, ListItem} from 'react-native-elements';




export default class PilihWaktu extends Component<Props> {
  static navigationOptions = {
    title : 'Pilih Waktu',
    
  };

 
  pilihPasien(namaPasien) {
    this.setState({
      pasienTerpilih : namaPasien
    });
  }

  _kirimNamaPasien(){
    let pasienTerpilih = this.state;;
    let pasien = {
      namaPasien : pasienTerpilih
    };

    this.props.navigation.navigate(this.state.sendTo, pasien);
  }

  _pilihWaktu(waktu) {
    if(this.props.navigation.state.params) {
      this.props.navigation.navigate(this.props.navigation.state.params.requestFrom, { waktu : waktu});  
    } 
  }

  render() {
    let daftarWaktu = [];
    for(x = 0;x < 24;x++){
      daftarWaktu.push(`${x}:00:00`);
      daftarWaktu.push(`${x}:30:00`);
    }

    return (
      <View style={[{flex : 1}]}>
         <ScrollView>
            <List>
                {
                  daftarWaktu.map((l, i) => (
                    <ListItem
                      roundAvatar
                      key={i}
                      title={l}
                      onPress={() => this._pilihWaktu(l) }
                    />
                  ))
                }
            </List>
         </ScrollView>

         <Text style={[Visual.pd10, Visual.bold, Visual.default, {color : 'white', backgroundColor : Theme.ThemeColor, marginBottom : 0}]}>
            Kami harap anda datang 15 menit sebelum pemeriksaan kesehatan
          </Text> 
      </View>
      
    );
  }
}


