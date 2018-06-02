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
import { StackNavigator } from 'react-navigation';
import AppHeader from '../AppHeader';
import { Icon,Header, ListItem} from 'react-native-elements';


class AmbilObat extends Component<Props> {

  AmbilObatSendiri = () => {
    this.props.navigation.navigate('PasienAmbilObat');
  }

  ObatDiantar = () => {
    this.props.navigation.navigate('PasienAmbilObat');
  }

  KonfirmasiPengambilanObat = () => {
    let opsi = [
      { text : 'Ambil sendiri melalui apotek', onPress : this.AmbilObatSendiri },
      { text : 'Diantar ke rumah anda', onPress : this.ObatDiantar }
    ];

    Alert.alert('Konfirmasi', 'Metode apa yang anda pilih untuk mengambil obat anda ?', opsi);
  }

  render() {
    return (
      <View style={[Visual.pd15, { backgroundColor : 'white', flex : 1}]}>
        
        <View style={{ width : undefined, height : undefined}}>
          <View style={[Visual.mgBottom4, Visual.OrdinaryRow, {alignItems : 'center'}]}>
            <Icon name='info-outline' size={14} color={Theme.ThemeColor} iconStyle={Visual.mgRight4} />

            <Text style={[Visual.default, Visual.bold, {color : Theme.ThemeColor, marginBottom : 0}]}>
              Informasi
            </Text>
          </View>        

          <View style={Visual.mgBottom15}>
            <Text style={[Visual.textParagraph]}>
              Anda bisa mengambil obat di apotek. Tekan tombol dibawah untuk melihat detail pembayaran.
            </Text>
          </View>

          <View style={{alignItems : 'center'}}>
            <Button title='Lihat Detail Pembayaran' width={60} onPress={this.KonfirmasiPengambilanObat} />
          </View>
        </View>  
      </View>
    );
  }
}

class TidakAmbilObat extends Component<Props> {
  render() {
    return (
      <View style={[Visual.pd15, { backgroundColor : 'white', flex : 1}]}>
        <View style={{ width : undefined, height : undefined}}>
          <View style={[Visual.mgBottom4, Visual.OrdinaryRow, {alignItems : 'center'}]}>
            <Icon name='info-outline' size={14} color={Theme.ThemeColor} iconStyle={Visual.mgRight4} />

            <Text style={[Visual.default, Visual.bold, {color : Theme.ThemeColor, marginBottom : 0}]}>
              Informasi
            </Text>
          </View>

          <View style={Visual.mgBottom8}>
            <Text style={[Visual.textParagraph]}>
              Anda tidak memiliki obat yang dapat diambil. Silahkan hubungi customer service.
            </Text>
          </View>

           <View style={{alignItems : 'center'}}>
            <Button title='Lihat Detail Pembayaran' width={60} onPress={() => this.props.navigation.navigate('PasienAmbilObat')} />
          </View>
        </View>  
      </View>
    );
  }
}

export default class PasienInformasiObat extends Component<Props> {
  static navigationOptions = {
    title : 'Informasi Obat',
    
  };

  constructor(props) {
    super(props);
  
    this.state = { pasienAmbilObat : false};
  }

  render() {
   
    if(this.state.pasienAmbilObat == true) {
      return <AmbilObat navigation={this.props.navigation} />
    }

    else {
      return <TidakAmbilObat navigation={this.props.navigation} />
    }

  }
}


