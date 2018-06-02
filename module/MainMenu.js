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
  Alert,
  ActivityIndicator,
  ScrollView
} from 'react-native';
// Stylesheet
import Visual from './visual/Visual.js';
import Theme from './visual/Theme.js';
import PerhitunganLokasi from './PerhitunganLokasi/PerhitunganLokasi';
import { StackNavigator } from 'react-navigation';
import AppHeader from './AppHeader';
import { Icon, ListItem } from 'react-native-elements';


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

export default class MainMenu extends Component<Props> {
  constructor(props) {
    super(props);
  
    this.state = {
      map : PerhitunganLokasi() 
    };
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor : 'white'      
    },
  };
  
  cariAmbulance(){
    this.props.navigation.navigate('CariAmbulance');
  }

  daruratButton = (action) => (
     <View style={[Visual.pd15, {backgroundColor : 'white', alignItems : 'flex-end', justifyContent : 'flex-end'}]}>
        <View elevation={5} style={{width : 50, height : 50, backgroundColor : 'red', alignItems : 'center', justifyContent : 'center', borderRadius : 100 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('CariAmbulance')} >
            <View>
              <Icon 
                name='warning'
                size={27}
                color='white'
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
  )

  render() {
    let daftarMenu = {
      baris1 : [
        {
          namaMenu : 'Poli',
          icon : require('./image/hospital.png'  ),
          toPage : 'Poli'
        },
        
        {
          namaMenu : 'Dokter',
          icon : require('./image/doctor.png'),
          toPage : 'Dokter'
        },
        {
          namaMenu : 'Ambulance',
          icon : require('./image/ambulance.png'),
          toPage : 'ReservasiAmbulance'
        }
      ],

      baris2 : [
        {
          namaMenu : 'Konsultasi Online',
          icon : require('./image/consultation.png'),
          toPage : 'Spesialis'
        },
        {
          namaMenu : 'UGD',
          icon : require('./image/sirene.png'),
          toPage : 'MainMenu'
        },
       
        {
          namaMenu : 'Rawat Jalan',
          icon : require('./image/stretcher.png'),
          toPage : 'MainMenu'
        },
      ]
    };
   
    let link = this.props.navigation;

    // Menampilkan halaman invoice
    return (
      <View style={{flex : 1, backgroundColor : 'white'}}>       
        <View style={{flex : 10}}>
           <ScrollView>
              <View style={ [Visual.pd10, {backgroundColor : 'white'}] }>
                <View style={Visual.mgBottom15}>
                  <View style={ [Visual.row, {borderBottomWidth : 1, borderColor : '#dfe6e9', padding : 0}]}>
                    
                    {
                      daftarMenu.baris1.map(function(item, index){
                        let sideBorder = index == 1 ? { borderColor : '#dfe6e9', borderRightWidth : 1, borderLeftWidth : 1 } : {};
                        let namaMenu = item.namaMenu;
                        let result =  <TouchableOpacity key={`baris1${index}`} underlayColor="white" onPress={ () => link.navigate(item.toPage) } style={ [ Visual.column, Visual.center, { flex : 1 }, sideBorder ] }>
                          <View>
                             <View style={ { marginBottom : 15, alignItems : "center", flexDirection : 'row'} }>
                                <Image source={ item.icon } style={ Visual.mediumImage } />
                              </View>

                            <View style={ [Visual.center , {flex : 1,  alignItems : 'center'}] }>
                              <Text style={ Visual.default }>
                                {item.namaMenu}
                                

                              </Text>
                            </View>
                        </View>
                      </TouchableOpacity> 

                        return result;
                      })
                    }
                    
                  </View>

                  <View style={ [Visual.row, {padding : 0}] }>
                    {
                      daftarMenu.baris2.map(function(item, index){
                        let sideBorder = index == 1 ? { borderColor : '#dfe6e9', borderRightWidth : 1, borderLeftWidth : 1 } : {};
                        // let imageSource = require(imageAddress);
                         let result =  <TouchableOpacity key={`baris1${index}`} underlayColor="white" onPress={ () => link.navigate(item.toPage) } style={ [ Visual.column, Visual.center, { flex : 1 }, sideBorder ] }>
                          <View>
                             <View style={ { marginBottom : 15, alignItems : "center", flexDirection : 'row'} }>
                                <Image source={ item.icon } style={ Visual.mediumImage } />
                              </View>

                            <View style={ [Visual.center , {flex : 1,  alignItems : 'center'}] }>
                              <Text style={ Visual.default }>
                                {item.namaMenu}
                              </Text>
                            </View>
                        </View>
                      </TouchableOpacity> 

                        return result;
                      })
                    }
                    
                  </View>
                </View>

                <View>
                  <View>
                    <View style={[Visual.OrdinaryRow, Visual.mgBottom4]}>
                      <Icon name='info-outline' color={Theme.ThemeColor} size={14} iconStyle={Visual.mgRight4} />
                      <Text style={[Visual.bold, Visual.default, {color : Theme.ThemeColor, marginBottom : 0}]}>
                          Anda memiliki 3 transakti yang belum dibayar
                      </Text>
                    </View>
                  </View>

                  <View>
                    <ListItem
                      title="26 Feb 2018 - Sakit Jantung"
                      titleStyle={Visual.textParagraph}
                    />
                    <ListItem
                      title="27 Feb 2018 - Sakit Demam"
                      titleStyle={Visual.textParagraph}
                    />
                    <ListItem
                      title="28 Feb 2018 - Sakit Gatal"
                      titleStyle={Visual.textParagraph}
                    />
                  </View>
                </View>
              </View>
           </ScrollView>
        </View>

        {this.daruratButton(this.cariAmbulance)}
        
      </View>
    );
  }
}


