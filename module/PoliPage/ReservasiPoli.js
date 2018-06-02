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
  TouchableOpacity,
  Image,
  Keyboard,
  Alert,
  ActivityIndicator,
  ScrollView,
  Picker,
  KeyboardAvoidingView
} from 'react-native';
// Stylesheet
import Visual from '../visual/Visual.js';
import { StackNavigator } from 'react-navigation';
import AppHeader from '../AppHeader';
import { Icon,Header, List, Card } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Autocomplete from 'react-native-autocomplete-input';



export default class ReservasiPoli extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title : 'Reservasi Poli',
      headerLeft : <TouchableOpacity style={{marginLeft : 15}} onPress={() => navigation.navigate('Poli')}><Icon name='keyboard-backspace' color='white' /></TouchableOpacity>
    }
  }
  
  constructor(props) {
    super(props);
    this.state = {
       isTimePickerVisible: false,
       isDatePickerVisible: false,
       tanggal : undefined,
       waktu : ''
    };
  }

  componentWillMount() {
    if(this.props.navigation.state.params != undefined) {
      this.setState({waktu : this.props.navigation.state.params.waktu}); 
    }
  }

   _showDatePicker = () => {
    Keyboard.dismiss();
    this.setState({ isDatePickerVisible: true });
  }
 
  _hideDatePicker = () => this.setState({ isDatePickerVisible: false });
 
   _showTimePicker = () => {
    Keyboard.dismiss();
    this.props.navigation.navigate('PilihWaktu', {requestFrom : 'ReservasiPoli'});
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



  render() {
    let namaPasien = this.props.navigation.state.params ? this.props.navigation.state.params.namaPasien : ''; 
     
    let leftMenu = <View style={Visual.OrdinaryRow}>
      <View style={Visual.mgRight13}>
        <Image source={ require('../image/stroller.png') } style={{width : 65 , height : 60}} />
      </View>
      <View>
        <Text style={[Visual.bold, {color : 'black'}]}>
          Reservasi Poli
        </Text>
        <Text style={Visual.default}>
          Antrian ke-7
        </Text>
        <Text style={Visual.default}>
          Perkiraan Waktu Layanan
        </Text>
        <Text style={Visual.default}>
          Jam 11:30
        </Text>
      </View>
    </View> 

    // Menampilkan halaman invoice
    return (
      <View style={{flex : 1, backgroundColor : 'blue'}}>
        <Header 
          leftComponent={leftMenu}
          outerContainerStyles={{ backgroundColor: '#ffffff', paddingTop : 0, height : 115 }}
        />   
        
      
          <ScrollView>
            <View style={[Visual.pd10, {backgroundColor : '#ffffff'}]}>
              <View style={Visual.mgBottom8}>
                <Text style={[Visual.default]}>Atas Nama</Text>
                  <View style={[Visual.OrdinaryRow, {alignItems : 'center'}]}>  
                    <TextInput 
                      placeholder='Masukkan nama pasien......'
                      style={{flex : 1}}
                      value={namaPasien}
                    />  
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PilihPasien', {requestFrom : 'ReservasiPoli'})}>
                        <Icon 
                          name='sort-desc'
                          type='font-awesome'
                          size={16}
                        />
                    </TouchableOpacity>
                  </View>
              </View>

               <View style={Visual.mgBottom8}>
                <Text style={[Visual.default]}>Waktu Reservasi</Text>
                <View style={Visual.OrdinaryRow}>
                  <View style={Visual.OrdinaryRow}>
                    <TextInput width={150} onFocus={this._showDatePicker} placeholder="Tanggal..." value={this.state.tanggal} />
                     <TouchableOpacity style={{justifyContent : 'center'}} onPress={this._showDatePicker}>
                        <Icon
                          name='calendar'
                          type='font-awesome'
                          color='#2a7fff'
                          size={22}
                        />
                      </TouchableOpacity>
                    <DateTimePicker
                      isVisible={this.state.isDatePickerVisible}
                      onConfirm={this._handleDatePicked}
                      onCancel={this._hideDatePicker}
                    />
                  </View>
                  
                  <View style={Visual.OrdinaryRow}>
                    <TextInput width={100} onFocus={this._showTimePicker} value={this.state.waktu} placeholder="Waktu....." />
                      <TouchableOpacity style={{justifyContent : 'center'}} onPress={this._showTimePicker}>
                        <Icon
                          name='clock-o'
                          type='font-awesome'
                          color='#2a7fff'
                          size={22}
                        />
                      </TouchableOpacity>
                  </View>
                 
                </View>
              </View>

              <View style={Visual.mgBottom8}>
                <Text style={[Visual.default]}>Jenis Layanan</Text>
                <Picker>
                   <Picker.Item label="Imunisasi" value="2" />
                   <Picker.Item label="Rawat Inap" value="5" />
                </Picker>
              </View>
              
             
              <KeyboardAvoidingView>
                <View style={[Visual.mgBottom8]}>
                  <View style={{height: 90, borderColor: 'gray', borderWidth: 1}}>
                    <TextInput
                      multiline={true}
                      numberOfLines={4}
                      underlineColorAndroid='transparent'
                      placeholder ="Tulis keterangan / keluhan"
                    />
                  </View>  
                  
                </View>

                <View style={Visual.mgBottom8}>
                  <Button title="Reservasi" color="#2c3e50" onPress={() => {}} />
                </View>
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
      </View>
    );
  }
}


