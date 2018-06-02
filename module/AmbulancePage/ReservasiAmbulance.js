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
  KeyboardAvoidingView,
  Image,
  Alert,
  ActivityIndicator,
  ScrollView,
  Keyboard,
  Picker
} from 'react-native';
// Stylesheet
import Visual from '../visual/Visual.js';
import Theme from '../visual/Theme.js';
import { StackNavigator } from 'react-navigation';
import { Icon,Header, List, Card } from 'react-native-elements';



export default class ReservasiAmbulance extends Component<Props> {
   static navigationOptions = ({ navigation }) => {
      return {
        title : 'Reservasi Ambulance',
        headerTintColor : 'white',
        headerTitleStyle : {
          color : 'white'
        },
        headerStyle : {
          elevation : 2,
          backgroundColor : Theme.ThemeColor
        }
      }
    }

  constructor(props) {
    super(props);
  
    this.state = {keperluan: undefined};
  }

  submitResep = () => {
    this.props.navigation.navigate('LaporanResep');
  }

   render() {
    let namaPasien = this.props.navigation.state.params ? this.props.navigation.state.params.namaPasien : ''; 

    let namaObat = this.props.navigation.state.params ? this.props.navigation.state.params.namaObat : '';

    return (
      <View style={{flex : 1, backgroundColor : 'white', height : undefined}}>

        <View style={Visual.pd15}>

          <View>
            <Text style={Visual.default}>
              Atas nama
            </Text>

            <View style={[Visual.OrdinaryRow, {alignItems : 'center'}]}>  
              <TextInput 
                placeholder='Masukkan nama pasien......'
                style={{flex : 1}}
                value={namaPasien}
              />  
              <TouchableOpacity onPress={() => this.props.navigation.navigate('PilihPasien', {requestFrom : 'ReservasiAmbulance'})}>
                  <Icon 
                    name='expand-more'
                    size={16}
                  />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={Visual.default}>
              Keterangan tambahan alamat penjemputan      
            </Text>

            <TextInput placeholder='Masukkan nama pasien...'/>
          </View>

          <View>
            <Text style={Visual.default}>
              Keperluan    
            </Text>
           <View>
              <Picker
                style={{width : 250}}
                selectedValue={this.state.keperluan}
                onValueChange={(itemValue, itemIndex) => this.setState({keperluan: itemValue})}>
                <Picker.Item label="Kecelakaan" value="kecelakaan" />
                <Picker.Item label="P3K" value="p3k" />
                <Picker.Item label="Koma" value="koma" />
              </Picker>
           </View>

          </View>
            <View>
              <View style={{width : 160}}>
                <Button title='Reservasi' onPress={() => {} } />
              </View>  
          
            </View>
          
        </View>
      </View>
    )
  }
}


