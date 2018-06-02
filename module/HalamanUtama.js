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
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
  TextInput
} from 'react-native';
// Stylesheet
import Visual from './visual/Visual.js';
import Theme from './visual/Theme.js';
import { Icon, Header, ListItem } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';

import MainMenu from './MainMenu';

class GambarBrobat extends Component<Props> {
  render() {
    return (
      <View style={{flexDirection : 'row', alignItems : 'center', marginRight : 8}}>
        <Image source={ require('./image/logo-brobat.png') } style={{height : 26, width : 30, marginRight : 5}} />
        <Text style={{color : Theme.ThemeColor, fontSize : 20, fontWeight : 'bold'}}>BROBAT</Text>
      </View>
    )
  }
}

class InfoPelanggan extends Component<Props> {
  render() {
    return ( 
      <View style={[Visual.mgRight4, Visual.OrdinaryRow, {alignItems : 'center'}]}>
        <View style={[Visual.mgRight8, {alignItems : 'flex-end'}]}>
            <Text style={[{color : Theme.gray, fontSize : 11}]}>
              Saldo Deposit
            </Text>
            <Text style={[Visual.textParagraph, {color : Theme.dark}]}>
              Rp 150.000,-
            </Text>
         </View>
         
           <View>
              <TouchableOpacity>
                <Icon name="menu" size={27} color={Theme.ThemeColor} />
              </TouchableOpacity>
           </View>
      </View>
    )
  }
}

class HalamanUtama extends Component<Props> {

  render() {
    const list = [
      {
        title: 'Anda memiliki janji dengan dokter andi',
        icon: 'av-timer'
      },
      {
        title: 'Anda harus check-up pada 12 Juni 2018',
        icon: 'av-timer'
      },
    ];

    // Menampilkan halaman invoice
    return (
      <View style={{flex : 1, backgroundColor : 'white', flexDirection : 'column'}}>
        <View>
          <ScrollView style={Visual.pd10}>  
            <View>
              <View style={Visual.mgBottom4}>
                <View style={[Visual.OrdinaryRow, Visual.mgBottom4]}>
                  <Icon name='info-outline' color={Theme.dark} size={14} iconStyle={Visual.mgRight4} />
                  <Text style={[Visual.bold, Visual.default, {color : Theme.dark, marginBottom : 0}]}>
                      Rumah sakit di sekitar anda
                  </Text>
                </View>
              </View>

              <View style={Visual.mgBottom4}>
                  <View style={{borderWidth : 2, borderColor : '#b2bec3', flex : 1, height : 200, justifyContent : 'center'}}>
                      <Text style={{color : '#b2bec3', fontSize : 44, textAlign : 'center'}}>MAP</Text>
                  </View>
              </View>

              <View>
                <Text style={[Visual.default, Visual.bold]}>
                    Atau cari Rumah Sakit / Klinik
                </Text>
              </View>
            </View>

            <View style={Visual.OrdinaryRow}>
              <View style={{position : 'relative', flex : 1}}>
                <TextInput />
              </View>

              <View>
                <TouchableOpacity>
                    <View style={[Visual.pd10, {backgroundColor : Theme.ThemeColor}]}>
                      <Text style={[Visual.bold, {color : 'white'}]}>
                          Cari
                      </Text>
                    </View>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <View>
                <View style={[Visual.OrdinaryRow, Visual.mgBottom4]}>
                  <Icon name='info-outline' color={Theme.ThemeColor} size={14} iconStyle={Visual.mgRight4} />
                  <Text style={[Visual.bold, Visual.default, {color : Theme.ThemeColor, marginBottom : 0}]}>
                      Pemberitahuan
                  </Text>
                </View>
              </View>

              <View>
                {
                  list.map((item, i) => (
                    <ListItem
                      key={i}
                      title={item.title}
                      leftIcon={{ name: item.icon }}
                      titleStyle={[Visual.default, {color : '#353b48'}]}
                      chevronColor='#353b48'
                    />
                  ))
                }
              </View>
            </View>
          </ScrollView>  
        </View>
      </View>
    );
  }
}

export default TabNavigator(
  {
    Home: { screen: HalamanUtama },
    Booking: { screen: MainMenu },
  },
  {
    tabBarOptions : {
      style : {
        backgroundColor : 'white',
      },
      labelStyle : {
        fontSize : 13,
        fontWeight : 'bold',
        color : Theme.dark
      },
      tabStyle : {
        padding : 2
      }
    },
    navigationOptions : {
      headerRight : <InfoPelanggan />,
      headerTitle : <GambarBrobat />,
      headerStyle : {
        backgroundColor : 'white',
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },

      }
    }
  }
);

