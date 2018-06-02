/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ActivityIndicator,
  ScrollView
} from 'react-native';
// Stylesheet
import Visual from './visual/Visual';
import Theme from './visual/Theme';
import { StackNavigator } from 'react-navigation';
import AppHeader from './AppHeader';
import { Icon,Header, List} from 'react-native-elements';




export default class Splashscreen extends Component<Props> {
  static navigationOptions = {
    
    headerStyle : {
      display : 'none'
    }
  };
  


  render() {
   
  
    // Menampilkan halaman invoice
    return (
      <View style={{flex : 1, justifyContent : 'center', flexDirection : 'row', alignItems : 'center'}}>
          <Image source={require('./image/colorful_blurry.jpg')} style={{flex : 1, left : 0, resizeMode : 'cover', width : undefined}} />         
          <View style={{position : 'absolute', width : 230, justifyContent : 'center', alignItems : 'center'}}>
            <View elevation={5} style={[Visual.mgBottom8, {borderRadius : 200, width : 180, height : 180, alignItems : 'center', justifyContent : 'center', backgroundColor : 'white', shadowColor : 'black', shadowOpacity : 0.7, shadowOffset : {width : 1, height : 3}}]}>
                <Image source={ require('./image/logo-brobat.png') } style={[{height : 56, width : 60, marginRight : 5}, Visual.mgBottom4]} />
                <Text style={[Visual.title, {fontSize : 30, color : '#2394f3'}]}>
                    BROBAT
                </Text>
                <Text style={[Visual.textCenter, Visual.bold, {color : '#2394f3'}]}>
                    Meet the care
                </Text>
            </View>
 
          </View>

         
      </View>
      
    );
  }
}


