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
import Visual from './visual/Visual.js';
import Theme from './visual/Theme.js';
import { StackNavigator } from 'react-navigation';
import AppHeader from './AppHeader';
import { Icon,Header, List, Card } from 'react-native-elements';




export default class Dokter extends Component<Props> {
  static navigationOptions = {
    title : 'Dokter',
    headerTintColor : 'white',
    headerTitleStyle : {
      color : 'white'
    },
    headerStyle : {
      elevation : 2,
      backgroundColor : Theme.ThemeColor
    }
  };
    
  constructor(props) {
    super(props);
  
    this.state = {
      reservationLabel : 'Reservasi Otomatis',
      waitingDisplay : 'none'
    };
  }

  automaticReservation = () => {
    navigation = this.props.navigation;
    this.setState({
      waitingDisplay : null,
      reservationLabel : 'Waiting...........'
    })

    setTimeout(() => { 
      navigation.navigate('ReservasiDokter')
      this.setState({
        waitingDisplay : 'none',
        reservationLabel : 'Reservasi Otomatis'
      });
    }, 2500);
  }

  render() {
   
  
    // Menampilkan halaman invoice
    return (
      <View style={{flex : 1}}>
      
        <ScrollView>
          <View>
            <Card title="Dokter yang tersedia :">
              <TouchableHighlight onPress={() => this.props.navigation.navigate('ReservasiDokter')}>
                <View style={[Visual.OrdinaryRow, Visual.pd10, {alignItems : 'center'}]}>
                  <View style={[Visual.mgRight13, {alignItems : 'center'}]}>
                    <Image source={require('./image/sirene.png')} style={[{width : 65 , height : 60}, Visual.mgBottom4]} />
                    <Text style={Visual.textSmall}>
                      Dr. Stephen Hawking
                    </Text>
                  </View>
                  <View>
                    <Text style={[Visual.bold, {color : 'black'}]}>Dokter Umum</Text>
                    <Text style={Visual.default}>Antrian ke-7</Text>
                    <Text style={Visual.default}>Perkiraan Waktu Layanan</Text>
                    <Text style={Visual.default}>Jam 11:30</Text>
                  </View>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.props.navigation.navigate('ReservasiDokter')}>  
                <View style={[Visual.OrdinaryRow, Visual.pd10, {alignItems : 'center'}]}>
                  <View style={[Visual.mgRight13, {alignItems : 'center'}]}>
                    <Image source={require('./image/sirene.png')} style={[{width : 65 , height : 60}, Visual.mgBottom4]} />
                    <Text style={Visual.textSmall}>
                      Dr. Stephen Hawking
                    </Text>
                  </View>
                  <View>
                    <Text style={[Visual.bold, {color : 'black'}]}>Dokter Umum</Text>
                    <Text style={Visual.default}>Antrian ke-7</Text>
                    <Text style={Visual.default}>Perkiraan Waktu Layanan</Text>
                    <Text style={Visual.default}>Jam 11:30</Text>
                  </View>
                </View>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => this.props.navigation.navigate('ReservasiDokter')}>
                <View style={[Visual.OrdinaryRow, Visual.pd10, {alignItems : 'center'}]}>
                  <View style={[Visual.mgRight13, {alignItems : 'center'}]}>
                    <Image source={require('./image/sirene.png')} style={[{width : 65 , height : 60}, Visual.mgBottom4]} />
                    <Text style={Visual.textSmall}>
                      Dr. Stephen Hawking
                    </Text>
                  </View>
                  <View>
                    <Text style={[Visual.bold, {color : 'black'}]}>Dokter Umum</Text>
                    <Text style={Visual.default}>Antrian ke-7</Text>
                    <Text style={Visual.default}>Perkiraan Waktu Layanan</Text>
                    <Text style={Visual.default}>Jam 11:30</Text>
                  </View>
                </View>
              </TouchableHighlight>

            </Card>

           
          </View>
        </ScrollView>

         <TouchableHighlight onPress={this.automaticReservation} style={{backgroundColor : Theme.ThemeColor}}>
              <View style={[Visual.OrdinaryRow, Visual.pd10, {alignItems : 'center', justifyContent : 'center'}]}>
                <ActivityIndicator color='white' style={Visual.mgRight8} style={[{display : this.state.waitingDisplay}, Visual.mgRight8]} />

                <Text style={[Visual.bold, {color : 'white'}]}>
                  {this.state.reservationLabel}
                </Text>
              </View>
            </TouchableHighlight>
      </View>
    );
  }
}


