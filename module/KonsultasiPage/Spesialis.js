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

class PencarianSpesialis extends Component<Props> {
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
          <TextInput placeholder="Cari spesialis..." value={this.state.keyword} onChange={this.onKeywordChange} style={{color : Theme.dark, display : displayValue}} placeholderTextColor={Theme.gray} underlineColorAndroid='transparent' />
        </View>
        <TouchableHighlight onPress={this.props.mode == 'search' ? () => this.setState({keyword : ''}) : () => this.props.navigation.navigate('Spesialis', {mode : 'search'})}>
          <View>
            <Icon color='white' size={20} name='search' iconStyle={{display : this.props.mode == 'search' ? 'none' : undefined}}/>
            <Icon color={Theme.gray} size={20} name='close' iconStyle={{display : this.props.mode == 'search' ? undefined : 'none'}}/>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

export default class Spesialis extends Component<Props> {
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
          namaSpesialis : 'Kardiolog',
          deskripsi : 'Kardiolog adalah dokter spesialis untuk menangani masalah jantung dan pembuluh darah'
        },
        {
          namaSpesialis : 'Gigi',
          deskripsi : 'Dokter spesialis ini fokus dengan masalah dan kesehatan isi mulut.'
        },
        {
          namaSpesialis : 'Audiolog',
          deskripsi : 'Audiolog adalah ahli otologi atau segala hal yang berkaitan dengan masalah pendengaran'
        },
        {
          namaSpesialis : 'THT',
          deskripsi : 'THT merupakan kepanjangan dari telinga, hidung, dan tenggorokan. Dokter THT pun bertanggung jawab atas ketiga hal tersebut.'
        },
        {
          namaSpesialis : 'Ginekolog',
          deskripsi : 'Segala macam masalah reproduksi wanita bisa dikonsultasikan pada ginekolog. '
        },
        {
          namaSpesialis : 'Anak',
          deskripsi : 'Menangani segala macam penyakit pada anak kecil'
        },
        {
          namaSpesialis : 'Paru-paru',
          deskripsi : 'dokter spesialis ini menangani masalah kanker paru-paru, pneumonia, dan penyakit lain yang menyerang organ tersebut.'
        },
        {
          namaSpesialis : 'Endokrinologi',
          deskripsi : 'Endokrinologi adalah ilmu yang mempelajari kelenjar endokrin pada manusia dan vertebrata lainnya, khususnya mengenai hormon yang dihasilkan dan pengaruhnya.'
        },
        {
          namaSpesialis : 'Onkologi',
          deskripsi : 'Dokter onkologi adalah dokter spesialis yang menangani diagnosis dan pengobatan kanker'
        },
        {
          namaSpesialis : 'Saraf',
          deskripsi : 'Dokter ahli saraf fokus pada sistem saraf manusia, termasuk di dalamnya otak dan saraf tulang belakang.'
        },
        
      ]

      return (
        <View style={{ backgroundColor : 'white', flex : 1, flexDirection : 'row'}}>
          <ScrollView>
            <View style={Visual.pd15}>
               <View style={Visual.OrdinaryRow}>
                  <Icon name='info-outline' color={Theme.ThemeColor} size={14} iconStyle={Visual.mgRight4} />
                  <Text style={[Visual.bold, Visual.default, {color : Theme.ThemeColor, marginBottom : 0}]}>
                      Daftar rekam medis
                  </Text>
                </View>

              <View>
                {
                  daftarDiagnosa.map((item, index) => (
                    <ListItem
                      key={index}
                      title={"Spesialis " + item.namaSpesialis}
                      subtitle={item.deskripsi}
                      subtitleStyle={{fontWeight : undefined, color : Theme.ParagraphColor}}
                      onPress={() => this.props.navigation.navigate('PilihDokterSpesialis', item)}
                    />
                  ))
                }
              </View>
            </View>
          </ScrollView>
        </View>
      )
    }
  }
}


