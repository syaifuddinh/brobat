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
  ScrollView
} from 'react-native';
// Stylesheet
import Visual from '../visual/Visual.js';
import Theme from '../visual/Theme.js';
import { StackNavigator } from 'react-navigation';
import { Icon,Header, List, Card, Rating } from 'react-native-elements';




export default class MenungguAmbulance extends Component<Props> {
  static navigationOptions = {
    title : 'Harap Menunggu',
    headerTintColor : '#2a7fff',
    headerTitleStyle : {
      color : '#2a7fff'
    }
  };
  
  constructor(props){
    super(props);
    this.state ={ isLoading : true}
  }

  componentDidMount(){
    return fetch('https://maps.googleapis.com/maps/api/directions/json?origin=-7.284992,%20112.747397&destination=-7.306842,%20112.735240&key=AIzaSyC53jIPaiZUtuBlagQRhxMB9qtnbl3sbjA')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.routes[0].legs[0],
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
  
    else {
      return (
        <View style={[{ flex : 1, backgroundColor : 'white', justifyContent : 'center', alignItems : 'center', flexDirection : 'row'}]}>
            <Image source={require('../image/maxresdefault.jpg')} style={{flex : 1, resizeMode : 'cover', width : undefined}} />
                <View style={{position : 'absolute', padding : 20}}>
                    <View style={{backgroundColor : 'white', padding : 25, borderRadius : 10, width : 350}}>
                      <View style={[{alignItems : 'center'}, Visual.mgBottom8]}>
                        <Image source={require('../image/ambulance.png')} style={[Visual.mgBottom4, {width : 100, height : 100}]} />
                      </View>

                      <View style={Visual.mgBottom8}>
                        <Text style={[Visual.bold, Visual.textCenter, Visual.textBig, {color : '#0652DD', marginBottom : 0}]}>
                          Harap Bersabar
                        </Text>
                        <Text style={[Visual.bold, Visual.textCenter, Visual.textBig, {color : 'black'}]}>
                          Ambulance Sudah Menuju Ke Tempat Anda 
                        </Text>
                      </View>

                      

                      <View>
                        <Text style={[Visual.textCenter, Visual.default, {color : 'black'}]}>
                            Ambulance butuh menempuh {this.state.dataSource.distance.text} untuk menuju tempat anda. Estimasi waktu adalah {this.state.dataSource.duration.text} 
                        </Text>
                      </View>

                      
                    </View>
                    
                </View>
        </View>
      );
    }
  }
}


