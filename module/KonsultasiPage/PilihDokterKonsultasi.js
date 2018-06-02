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

  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
// Stylesheet
import Visual from '../visual/Visual.js';
import Theme from '../visual/Theme.js';
import { Icon, ListItem } from 'react-native-elements';

class PencarianDokterSpesialis extends Component<Props> {
  constructor(props) {
    super(props);
  
    this.state = {keyword : ""};
  }

  onKeywordChange = (text) => {
    this.setState({keyword : text})
  }
  render() {
    const displayValue = this.props.mode == 'search' ? undefined : 'none';

    return(
      <View style={[Visual.mgRight8, Visual.OrdinaryRow, {alignItems : 'center', justifyContent : 'space-between'}]}>
        <View style={{width : 300}}>
          <TextInput placeholder="Cari dokter..." value={this.state.keyword} onChange={this.onKeywordChange} style={{color : Theme.dark, display : displayValue}} placeholderTextColor={Theme.gray} underlineColorAndroid='transparent' />
        </View>
        <TouchableHighlight onPress={this.props.mode == 'search' ? () => this.setState({keyword : ''}) : () => this.props.navigation.navigate('PilihDokterSpesialis', {mode : 'search'})}>
          <View>
            <Icon color='white' size={20} name='search' iconStyle={{display : this.props.mode == 'search' ? 'none' : undefined}}/>
            <Icon color={Theme.gray} size={20} name='close' iconStyle={{display : this.props.mode == 'search' ? undefined : 'none'}}/>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

export default class PilihDokterSpesialis extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    const headerColor = navigation.state.params ? navigation.state.params.headerColor : Theme.ThemeColor;  
    const mode = navigation.state.params ? navigation.state.params.mode : Theme.ThemeColor;  

    let searchBar = <PencarianSpesialis mode={mode} navigation={navigation} />;

    return {
      title : 'Pilih Spesialis',
      headerRight : searchBar,
      headerStyle : {
        backgroundColor : mode == 'search' ? 'white' : Theme.ThemeColor
      },
      headerTintColor : mode == 'search' ? Theme.gray : 'white'
    }
  }

  render() {
    const mode = this.props.navigation.state.params ? this.props.navigation.state.params.mode : 'view';
    if(mode == 'search') {
      return (
        <View>

        </View>
      )
    }
    else {
      let daftarDiagnosa = [
        {
          namaDokter : 'Dr. Ryan Hamdan',
          status : 'available'
        },
        {
          namaDokter : 'Dr. Muhammad Fajri',
          status : 'offline'
        },
        {
          namaDokter : 'Dr. Rizal Maulana',
          status : 'available'
        },
        {
          namaDokter : "Dr. Alfan Ba'asyir",
          status : 'offline'
        },
        {
          namaDokter : 'Dr. Taufan Hadi',
          status : 'busy'
        },
       
      ]

      return (
        <View style={{ backgroundColor : 'white', flex : 1, flexDirection : 'row'}}>
          <ScrollView>
            <View style={Visual.pd15}>
               <View style={Visual.OrdinaryRow}>
                  <Icon name='info-outline' color={Theme.ThemeColor} size={14} iconStyle={Visual.mgRight4} />
                  <Text style={[Visual.bold, Visual.default, {color : Theme.ThemeColor, marginBottom : 0}]}>
                      Daftar Dokter Spesialis 
                  </Text>
                </View>

              <View>
                {
                  daftarDiagnosa.map((item, index) => {
                    let statusColor = 'black'
                    if(item.status == 'available') statusColor = Theme.green;
                    else if(item.status == 'offline') statusColor = Theme.gray;
                    if(item.status == 'busy') statusColor = Theme.ThemeColor;

                   return ( 
                      <ListItem
                        key={index}
                        title={item.namaDokter}
                        subtitle={item.status}
                        subtitleStyle={{fontWeight : undefined, color : statusColor }}
                        onPress={() => this.props.navigation.navigate('KonsultasiOnline', item)}
                      />
                   )
                  })
                }
              </View>
            </View>
          </ScrollView>
        </View>
      )
    }
  }
}


