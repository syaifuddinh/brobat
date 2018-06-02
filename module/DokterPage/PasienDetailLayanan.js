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
import { Icon,Header, ListItem } from 'react-native-elements';


class DetailLayanan extends Component<Props> {
  render() {
    return (
      <View style={{ backgroundColor : 'white', flex : 1}}>
        
        <View style={{flex : 1}}>
          <ScrollView style={{flex : 1}}>
            <View style={[Visual.pd15]}>
              <View style={[Visual.OrdinaryRow, Visual.mgBottom4]}>
                <Icon name='info-outline' color={Theme.ThemeColor} size={14} iconStyle={Visual.mgRight4} />
                <Text style={[Visual.bold, Visual.default, {color : Theme.ThemeColor, marginBottom : 0}]}>
                    {this.props.namaDetail}
                </Text>
              </View>

              <View>
                <Text style={Visual.textParagraph}>
                  {this.props.keterangan}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>  

      </View>
    )
  }
}

class DetailObat extends Component<Props> {
  render() {
    daftarObat = [
      {
        namaObat : 'Ultraflu',
        quantity : 1,
        harga : 18000
      },
      {
        namaObat : 'Ferecilin',
        quantity : 2,
        harga : 24000,

      },
      {
        namaObat : 'Antibiotik',
        quantity : 1,
        harga : 23000
      }
    ];

    return (
      <View style={{ backgroundColor : 'white'}}>
        
        <View>
          <ScrollView>
            <View style={[Visual.pd15]}>
              <View style={[Visual.OrdinaryRow, Visual.mgBottom4]}>
                <Icon name='local-hospital' color={Theme.ThemeColor} size={14} iconStyle={Visual.mgRight4} />
                <Text style={[Visual.bold, Visual.default, {color : Theme.ThemeColor, marginBottom : 0}]}>
                    {this.props.namaDetail}
                </Text>
              </View>

              <View style={Visual.mgBottom8}>
                <Text style={Visual.textParagraph}>
                  Pasien yang terhormat, berikut kami lampirkan daftar obat yang akan anda butuhkan
                </Text>
              </View>

              <View>
                {
                  daftarObat.map((item, index) => (
                    <ListItem
                        key={index}
                        title={item.namaObat + " (" + item.quantity + " Pcs)"}
                        subtitle={'Satuan Rp ' + item.harga + ' / Total Rp ' + (item.quantity * item.harga)}
                        subtitleStyle={{color : Theme.ThemeColor}}
                        rightIcon={{name : 'battery-std', color : Theme.ThemeColor}}
                        onPress={() => Alert.alert(item.namaObat, item.penggunaan)}
                      />
                  ))
                }
              </View>
            </View>
          </ScrollView>

          <View style={Visual.pd15}>
            <View style={[Visual.OrdinaryRow, Visual.mgBottom4]}>
              <Icon name='attach-money' color={Theme.ThemeColor} size={14} iconStyle={Visual.mgRight4} />
              <Text style={[Visual.bold, Visual.default, {color : Theme.ThemeColor, marginBottom : 0}]}>
                  Total biaya pengobatan
              </Text>
            </View>

            <View>
              <Text style={Visual.textParagraph}>
                Rp,- 150.000,00 ( Seratus lima puluh ribu rupiah )
              </Text>
            </View>
          </View>
        </View>  

      </View>
    )
  }
}

export default class PasienDetailLayanan extends Component<Props> {
  static navigationOptions = {
    title : 'Detail Layanan',
    
  };

  scanButton = () => (
     <View style={[Visual.pd15, {backgroundColor : 'white', flex : 1, alignItems : 'flex-end', justifyContent : 'flex-end'}]}>
        <View elevation={5} style={{width : 50, height : 50, backgroundColor : Theme.ThemeColor, alignItems : 'center', justifyContent : 'center', borderRadius : 100 }}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('PasienQRCode')} >
            <View>
              <Icon 
                name='qrcode'
                type='font-awesome'
                size={21}
                color='white'
              />
            </View>
          </TouchableHighlight>
        </View>
      </View>
  )
  
  render() {
    const { params } = this.props.navigation.state;
    const namaDetail = params.namaDetail ? params.namaDetail : 'Detail Layanan';
    const keterangan = params.keterangan ? params.keterangan : '-';


   if(namaDetail.toLowerCase() == 'delivery apotek') 
      return (
        <View style={{flex : 1}}>
          <DetailObat namaDetail={namaDetail} />
          {this.scanButton()}
        </View>    
      )
    else 
      return ( 
        <View style={{flex : 1}}>
          <DetailLayanan namaDetail={namaDetail} keterangan={keterangan} />  
          {this.scanButton()}
        </View>  
      )
  }
}


