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
  Image,
  Alert,
  ActivityIndicator,
  ScrollView,
  Picker
} from 'react-native';
// Stylesheet
import Visual from './visual/Visual.js';
import Theme from './visual/Theme.js';
import { StackNavigator } from 'react-navigation';
import AppHeader from './AppHeader';
import { Icon,Header, List, Card } from 'react-native-elements';




export default class Poli extends Component<Props> {
  static navigationOptions = {
    title : 'Poli',
    headerTintColor : 'white',
    headerTitleStyle : {
      color : 'white'
    },
    headerStyle : {
      elevation : 2,
      backgroundColor : Theme.ThemeColor
    }
  };
  
  _cariAmbulance(){
    this.props.navigation.navigate('CariAmbulance');
  }


  render() {
      let navigation = this.props.navigation;
      let daftarMenu = [
        {
          namaMenu : 'Poli Anak',
          jumlahAntrian : 7,
          waktuLayanan : '10:30',
          icon : require('./image/stroller.png')
        },
        {
          namaMenu : 'Poli Gigi',
          jumlahAntrian : 3,
          waktuLayanan : '14:30',
          icon : require('./image/premolar.png')
        },
        {
          namaMenu : 'Poli Mata',
          jumlahAntrian : 11,
          waktuLayanan : '11:30',
          icon : require('./image/eye.png')
        },
      ];
   
    let leftMenu = <View>
      <Text style={[Visual.textWhite, Visual.bold]}>Poli</Text>
    </View>; 
   
    let rightMenu = <View>
      <Text style={[Visual.textWhite, Visual.bold]}>Rabu, 12 Juni 2017</Text>
    </View>; 
    // Menampilkan halaman invoice
    return (
      <View style={{flex : 1}}>
        
        
        <ScrollView>
          <View>
            
            <Card title="Poli yang tersedia :">
              {
                daftarMenu.map((item, index) => {
                   let result = <TouchableHighlight  key={`menupoli${index}`} onPress={() => navigation.navigate('ReservasiPoli')}> 
                     <View style={[Visual.OrdinaryRow, Visual.pd10]}>
                      <View style={Visual.mgRight13}>
                        <Image source={ item.icon } style={{width : 65 , height : 60}} />
                      </View>
                      <View>
                        <Text style={[Visual.bold, {color : 'black'}]}>
                          {item.namaMenu}
                        </Text>
                        <Text style={Visual.default}>
                          Antrian ke-{item.jumlahAntrian}
                        </Text>
                        <Text style={Visual.default}>
                          Perkiraan Waktu Layanan
                        </Text>
                        <Text style={Visual.default}>
                          Jam {item.waktuLayanan}
                        </Text>
                      </View>
                    </View>
                  </TouchableHighlight>

                  return result;
                })
              } 
            
            </Card>
          </View>
        </ScrollView>
      </View>
    );
  }
}


