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
import { Icon,Header, List, Card, Rating } from 'react-native-elements';




export default class RatingAmbulance extends Component<Props> {
  static navigationOptions = {
    title : 'Rating',
    
  };
  


  render() {
   
  
    // Menampilkan halaman invoice
    return (
      <View style={{flex : 1}}>
          <AppHeader pageTitle="BROBAT" style={{zIndex : 20}} />
          <View style={{ flex : 1, justifyContent : 'center', alignItems : 'flex-start', flexDirection : 'row'}}>
            <ScrollView>
              <View style={{padding : 20, paddingTop : 0}}>
                  <View style={{backgroundColor : 'white', marginTop : 20, padding : 17, borderRadius : 10, width : 350}}>
                    <View style={Visual.mgBottom8}>
                      <Text style={[Visual.bold, Visual.textCenter, Visual.textBig, {color : Theme.ThemeColor}]}>
                        Seberapa Besar 
                      </Text>
                      <Text style={[Visual.bold, Visual.textCenter, Visual.textBig, {color : Theme.ThemeColor}]}>
                        Tingkat Kepuasan Anda 
                      </Text>
                    </View>

                    <View style={[{alignItems : 'center'}, Visual.mgBottom8]}>
                      <Image source={require('./image/model-pria.jpg')} style={[Visual.mgBottom4, {width : 150, height : 150, borderRadius : 100}]} />
                      <Text style={[Visual.bold, Visual.textCenter, {color : 'black', fontSize : 17}]}>Eko Supriyadi</Text>
                    </View>

                    <View style={[Visual.OrdinaryRow, Visual.spaceBetween, {paddingTop : 10, paddingBottom : 10, borderColor : '#dfe6e9', borderTopWidth : 1, borderBottomWidth : 1}]}>
                      <View>
                        <View style={[{alignItems : 'center'}]}>
                          <Text style={[Visual.bold, Visual.mgRight3, Visual.textCenter, {color : 'black'}]}>70</Text>
                        </View>

                        <View>
                          <Text style={[Visual.default, {marginBottom : 0}]}>
                            Pasien Telah
                          </Text>
                          <Text style={Visual.default}>
                            Diselamatkan
                          </Text>
                        </View>
                      </View>  

                      <View>
                        <View>
                          <Text style={[Visual.bold, Visual.textCenter, {color : 'black'}]}>602</Text>
                        </View>

                        <View>
                          <Text style={[Visual.default, {marginBottom : 0}]}>
                            Score yang telah 
                          </Text>
                          <Text style={Visual.default}>
                            didapatkan driver ini
                          </Text>
                        </View>
                      </View>  
                    </View>

                    <View>
                      <Rating
                        showRating
                        type="star"
                        fractions={1}
                        startingValue={4.6}
                        imageSize={25}
                        onFinishRating={() => {}}
                        style={{ paddingVertical: 10, justifyContent : 'center', alignItems : 'center' }}
                      />

                      <TouchableHighlight
                        onPress={() => {}}
                        style={[Visual.mgBottom8]}
                        underlayColor='yellow'>
                          <View elevation={15} style={{backgroundColor : '#f1c40f', zIndex : 100, shadowColor : 'black', shadowOpacity : 1,  shadowOffset : {width : 0, height : 4}}}>
                            <Text style={[Visual.bold, Visual.pd10, Visual.textCenter, {color : 'black'}]}>
                                RATE
                            </Text>
                          </View>
                      </TouchableHighlight>

                      <Text style={[Visual.default, Visual.textCenter]}>
                         Terima kasih telah memberikan penilaian kepada driver ambulance kami.
                         Penilaian anda merupakan kontribusi yang besar untuk meningkatkan 
                         kualitas layanan kami.
                      </Text>
                    </View>
                  </View>
                  
              </View>
            </ScrollView>  
        </View>
      </View>
      
    );
  }
}


