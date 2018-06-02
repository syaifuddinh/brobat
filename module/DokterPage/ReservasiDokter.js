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
import { Icon,Header, List, Card } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Autocomplete from 'react-native-autocomplete-input';



export default class ReservasiDokter extends Component<Props> {
  static navigationOptions = {
    title : 'Brobat',
    
  };
  
  constructor(props) {
    super(props);
    this.state = {
       isTimePickerVisible: false,
       isDatePickerVisible: false,
       tanggal : undefined,
       waktu : undefined,
       namaPasien : '',
       pasienShowed : []
  
    };
  }
  


   _showDatePicker = () => {
    Keyboard.dismiss();
    this.setState({ isDatePickerVisible: true });
  }
 
  _hideDatePicker = () => this.setState({ isDatePickerVisible: false });
 
   _showTimePicker = () => {
    Keyboard.dismiss();
      this.props.navigation.navigate('PilihWaktu', {requestFrom : 'ReservasiDokter'});
   }
  _hideTimePicker = () => this.setState({ isTimePickerVisible: false });
 
  // Mengubah tanggal inggris ke tanggal indonesia
  _ubahTanggalIndonesia = (tanggalInggris) => {
      let strukturTanggal = tanggalInggris ? tanggalInggris.split(' ') : [];
      let hari;
      let bulan; 
      let tanggal;
      let tahun;
      tanggal = strukturTanggal[2];
      tahun = strukturTanggal[3];

      switch(strukturTanggal[0]) {
        case 'sun' :
          hari = 'Minggu';
        break;

        case 'mon' :
          hari = 'Senin';
        break;

        case 'tue' :
          hari = 'Selasa';
        break;

        case 'wed' :
          hari = 'Rabu';
        break;

        case 'thu' :
          hari = 'Kamis';
        break;

        case 'fri' :
          hari = "Jum'at";
        break;

        case 'sat' :
          hari = 'Sabtu';
        break;

        default :
          hari = 'Minggu'
      }  

      switch(strukturTanggal[1]) {
        case 'jan' :
          bulan = 'Januari';
        break;

        case 'feb' :
          bulan = 'Februari';
        break;

        case 'mar' :
          bulan = 'Maret';
        break;

        case 'apr' :
          bulan = 'April';
        break;

        case 'may' :
          bulan = 'Mei';
        break;

        case 'jun' :
          bulan = "Juni";
        break;

        case 'jul' :
          bulan = 'Juli';
        break;

        case 'aug' :
          bulan = 'Agustus';
        break;

        case 'sep' :
          bulan = 'September';
        break;

        case 'oct' :
          bulan = 'Oktober';
        break;

        case 'nov' :
          bulan = 'November';
        break;

        case 'dec' :
          bulan = 'Desember';
        break;

        default :
          bulan = 'Januari'
      }

      return `${hari}, ${tanggal} ${bulan} ${tahun}`;
  }

  _handleDatePicked = (res) => {
    let tanggal = res.toString();
    let filterTanggal = /(.*) ..:..:...*/
    let tanggalBiasa = tanggal.replace(filterTanggal, '$1').toLowerCase();
    let tanggalIndonesia = this._ubahTanggalIndonesia(tanggalBiasa);
    this.setState({
      tanggal : tanggalIndonesia,
      tanggalSistem : res.toString()
    });

    this._hideDatePicker();

  };

  _handleTimePicked = (res) => {
    this.setState({
      waktu : res.toString()
    });
    this._hideTimePicker();
  };

  _filterPasien = (daftarPasien, namaPasien) => {
    let filteredPasien = daftarPasien.filter(item => item.namaPasien == namaPasien);
    Alert.alert(filteredPasien[0]);
    return filteredPasien;
  }

  _pasienChanged = (text) => {
    let daftarPasien = [
        {
          namaPasien : 'Fardhan Ainun'
        },
        {
          namaPasien : 'Mochammad Irfan'
        },
        {
          namaPasien : 'Arkan Irsyad'
        },
        {
          namaPasien : 'Bayu Azhari'
        },
        {
          namaPasien : 'Chika Vianny'
        }
    ];

    let sampleTest = new RegExp(text);
    this.setState({
          namaPasien : text,
          pasienShowed : text !== '' ? daftarPasien.filter(item => sampleTest.test(item.namaPasien) ) : []
      }
    )
  }
  render() {
    
     
    let leftMenu = <View style={Visual.OrdinaryRow}>
      <View style={Visual.mgRight13}>
        <Image source={ require('../image/stroller.png') } style={{width : 65 , height : 60}} />
      </View>
      <View>
        <Text style={[Visual.bold, {color : 'black'}]}>
          Dr. Gamal Nasir
        </Text>
        <Text style={Visual.default}>
          Dokter Umum
        </Text>
        <Text style={Visual.default}>
          Antrian ke-7
        </Text>
        <Text style={Visual.default}>
          Perkiraan Waktu Layanan
        </Text>
        <View style={Visual.OrdinaryRow}>
          <Text style={[Visual.default, Visual.mgRight3]}>
            Jam 
          </Text>

          <Text style={[Visual.default, {color : Theme.ThemeColor}]}>
            11:30
          </Text>
        </View>
        
      </View>
    </View> 

    // Menampilkan halaman invoice
    return (
      <View style={{flex : 1, backgroundColor : 'white'}}>
        <Header 
          leftComponent={leftMenu}
          outerContainerStyles={{ backgroundColor: 'white', paddingTop : 0, height : 115, marginTop : 15 }}
        />   
        
        <ScrollView>
          <View style={[Visual.pd10, {backgroundColor : 'white'}]}>
            <View style={Visual.mgBottom8}>
              <Text style={[Visual.default]}>Reservasi Atas Nama</Text>
              <View style={[Visual.OrdinaryRow, {alignItems : 'center'}]}>  
                <TextInput 
                  placeholder='Masukkan nama pasien......'
                  style={{flex : 1}}
                />  
                <TouchableHighlight onPress={() => this.props.navigation.navigate('PilihPasien', {requestFrom : 'ReservasiDokter'})}>
                    <Icon 
                      name='sort-desc'
                      type='font-awesome'
                      size={16}
                    />
                </TouchableHighlight>
              </View>
            </View>

             <View style={Visual.mgBottom8}>
              <Text style={[Visual.default]}>Waktu Reservasi</Text>
              <View style={Visual.OrdinaryRow}>
                <View style={[Visual.OrdinaryRow, Visual.mgRight8]}>
                  <TextInput width={150} style={Visual.mgRight3} onFocus={this._showDatePicker} placeholder="Tanggal..." value={this.state.tanggal} />
                  <TouchableHighlight style={{justifyContent : 'center'}} onPress={this._showDatePicker}>
                    <Icon
                      name='calendar'
                      type='font-awesome'
                      color='#2a7fff'
                      size={22}
                    />
                  </TouchableHighlight>
                  <DateTimePicker
                    isVisible={this.state.isDatePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDatePicker}
                  />
                </View>
                
                <View style={Visual.OrdinaryRow}>
                  <TextInput width={100} style={Visual.mgRight3} onFocus={this._showTimePicker} value={this.state.waktu} placeholder="Waktu....." />
                  <TouchableHighlight style={{justifyContent : 'center'}} onPress={this._showTimePicker}>
                    <Icon
                      name='clock-o'
                      type='font-awesome'
                      color='#2a7fff'
                      size={22}
                    />
                  </TouchableHighlight>
                  
                  <DateTimePicker
                    mode='time'
                    isVisible={this.state.isTimePickerVisible}
                    onConfirm={this._handleTimePicked}
                    onCancel={this._hideTimePicker}
                  />
                </View>
               
              </View>
            </View>

            <View style={[Visual.mgBottom8]}>
              <View style={{height: 90, borderColor: 'gray', borderWidth: 1}}>
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  underlineColorAndroid='transparent'
                  placeholder ="Tulis keluhan sementara"
                />
              </View>  
              
            </View>

            <View style={Visual.mgBottom8}>
              <Button title="Reservasi" color="#2a7fff" />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}


