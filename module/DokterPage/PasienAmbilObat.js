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
  ScrollView,
} from 'react-native';
// Stylesheet
import Visual from '../visual/Visual.js';
import Theme from '../visual/Theme.js';
import { StackNavigator } from 'react-navigation';
import AppHeader from '../AppHeader';
import { Icon, Divider, ListItem, Header } from 'react-native-elements';



export default class PasienAmbilObat extends Component<Props> {
  static navigationOptions = {
    title : 'Service Status',
    
  };
  
  JSXTotal = () => {
    return (
      <View>
        <Text style={[Visual.default, {color : 'white'}]}>
            Total Biaya
        </Text>

        <Text style={[Visual.bold, {color : 'white'}]}>
          Rp 200.000,-
        </Text>
      </View>
    )
  }

  JSXQRCode = () => {
    return (
      <TouchableHighlight onPress={() => this.props.navigation.navigate('PasienQRCode')} >
        <View style={{alignItems : 'center'}} >
          <Icon name='qrcode' type='font-awesome' color='white' size={25} />
          <Text style={[Visual.default, Visual.bold,  {color : 'white'}]}>
            SCAN
          </Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    let daftarDetailLayanan = [
      {
        namaDetail : 'Jenis Layanan',
        keterangan : 'Biaya Rp 100.000,-',
        icon : 'reorder'
      },
      {
        namaDetail : 'Delivery Apotek',
        keterangan : 'Biaya 250.000,-',
        icon : 'local-hospital'
      },
      {
        namaDetail : 'Lama Layanan',
        keterangan : 'Pemeriksaan oleh Dr. Budianto dengan lama pemeriksaan 10 menit',
        icon : 'access-time'
      }
    ]

    return (
      <View style={{ backgroundColor : 'white', flex : 1}}>
        
        <View style={{flex : 8.5}}>
          <View>
            <ScrollView>
              <View style={[Visual.pd15]}>
                <View style={Visual.OrdinaryRow}>
                  <Icon name='info-outline' color={Theme.ThemeColor} size={14} iconStyle={Visual.mgRight4} />
                  <Text style={[Visual.bold, Visual.default, {color : Theme.ThemeColor, marginBottom : 0}]}>
                      Detail layanan
                  </Text>
                </View>

                <View>
                  {
                    daftarDetailLayanan.map((item, index) => (
                      <ListItem
                        leftIconUnderlayColor={Theme.ThemeColor}
                        leftIcon={{name : item.icon, color : Theme.ThemeColor}}
                        key={index}
                        title={item.namaDetail}
                        subtitle={item.keterangan}
                        subtitleStyle={{fontWeight : undefined}}
                        rightTitleStyle={{display : 'none'}}
                        rightIcon={{name : 'more-vert', color : Theme.ThemeColor}}
                        onPress={() => this.props.navigation.navigate('PasienDetailLayanan', {namaDetail : item.namaDetail, keterangan : item.keterangan})}
                      />
                    ))
                  }
                </View>
              </View>
            </ScrollView>
          </View>
          
          <View style={[Visual.pd15]}>
            <View style={Visual.OrdinaryRow}>
              <Icon name='info-outline' color={Theme.ThemeColor} size={14} iconStyle={Visual.mgRight4} />
              <Text style={[Visual.bold, Visual.default, {color : Theme.ThemeColor, marginBottom : 0}]}>
                  Informasi pembayaran
              </Text>
            </View>

            <View>
              <Text style={Visual.default}>
                Pasien yang terhormat, silahkan anda menuju customer service untuk memproses pembayaran anda. Terima kasih.
              </Text>
            </View>
          </View>
        </View>  

        <View style={{flex : 1}}>
          <Header 
            leftComponent={this.JSXTotal()}
            rightComponent={this.JSXQRCode()}
            outerContainerStyles={{height : 55, paddingTop : 0, paddingBottom : 5}}
          />
        </View>
      </View>
    );
  }
}


