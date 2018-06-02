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
  WebView,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ActivityIndicator,
  ScrollView
} from 'react-native';
// Stylesheet
import Visual from '../visual/Visual.js';
import Theme from '../visual/Theme.js';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { createOpenLink } from 'react-native-open-maps';


export default class CariAmbulance extends Component<Props> {
  static navigationOptions = {      
      title : 'Mencari Ambulance'
  };
  
  _BatalCariAmbulance() {
    let navigation = this.props.navigation;
    Alert.alert(
      "Konfirmasi", 
      "Apakah anda ingin membatalkan untuk memanggil ambulance ?",
      [
        {text : "OK", onPress : () => navigation.navigate('MainMenu')},
        {text : "Cancel", style : 'cancel'}
      ]
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      tampil: <View>
        <Image source={ require('../image/reload.gif') }/>
      </View>
    };
  }

  componentDidMount() {
    setTimeout(
      () => this.RenderMap(),
      3000
    );
  }

  RenderMap(){
   this.setState({
      tampil: <WebView
              source={{uri: 'https://www.google.co.id/maps/@-7.2913347,112.7569243,15z?hl=id'}}
              style={{marginTop: 10}}
            />
    });
  }

   cancelButton = (action) => (
     <View style={[Visual.pd15, {backgroundColor : 'white', alignItems : 'flex-end', justifyContent : 'flex-end'}]}>
        <View elevation={5} style={{width : 50, height : 50, backgroundColor : 'red', alignItems : 'center', justifyContent : 'center', borderRadius : 100 }}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('CariAmbulance')} >
            <View>
              <Icon 
                name='close'
                size={27}
                color='white'
              />
            </View>
          </TouchableHighlight>
        </View>
      </View>
  )

  render() {
    const coord = { latitude: -7.290132, longitude: 112.769048 };
    const openMap = createOpenLink(coord);
    // Menampilkan halaman invoice
    return (
      <View style={{ flex : 1, backgroundColor : 'white', flexDirection : 'row'}}>
          <View style={[{flex : 1}]}>
            
            <View style={{flex : 1, justifyContent : "center"}}>
                <View style={Visual.mgBottom15}>
                    <Text style={[Visual.title, Visual.bold, Visual.textCenter]}>
                      JANGAN PANIK
                    </Text>

                    <Text style={[Visual.textParagraph, Visual.textCenter, {marginLeft : 25, marginRight : 25}]}>
                      Harap tenang tim kami sedang berusaha 
                      untuk menghubungi anda.No HP dan alamat
                      anda sudah terdapat dalam database kami, dan
                      sistem kami dapat mendeteksi posisi anda sekarang
                    </Text>
                </View>

                <View style={Visual.mgBottom8}>
                  <ActivityIndicator size="large" />
                </View>

                <View>
                  <Text style={[Visual.textParagraph, Visual.textCenter]}>
                      Rumah sakit akan segera menghubungi anda
                  </Text>
                  <Text style={[Visual.textParagraph, Visual.textCenter]}>
                      Harap menunggu.............
                  </Text>
                </View>
            </View>
              
            {this.cancelButton()}
          </View>
      </View>
    );
  }
}


