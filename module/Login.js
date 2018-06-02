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
  TouchableOpacity,
  Image,
  Keyboard,
  Alert,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
// Stylesheet
import Visual from './visual/Visual.js';
import Theme from './visual/Theme.js';
import { StackNavigator } from 'react-navigation';
import AppHeader from './AppHeader';
import { Icon, Header } from 'react-native-elements';



export default class Login extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
    	headerStyle : {
    		display : 'none'
    	}
    }
  }

 
 

  render() {
    let namaDokter = this.props.navigation.state.params ? this.props.navigation.state.params.namaDokter : '';

    return (
      <View style={{ backgroundColor : 'white', flex : 1, flexDirection : 'row'}}>
        <View style={{flex : 1}}>
        	<View style={{flex : 5}}>
        		<Image source={require("./image/jabat-tangan.jpeg")} style={{flex : 1, resizeMode : 'cover', width : undefined}} />
        	</View>

        	<View elevation={2} style={[Visual.pd10, Visual.OrdinaryRow, {backgroundColor : 'white', alignItems : 'center'}]}>
				<Image source={require('./image/logo-brobat.png')} style={[{width : 40, height : 35}, Visual.mgRight8]}/>	
				<Text style={[Visual.title, Visual.bold, {color : Theme.ThemeColor, marginBottom : 0}]}>
				  	BROBAT
				</Text>
			</View>

        	<View style={[Visual.pd15, {flex : 5}]}>
        		<View style={Visual.mgBottom8}>
        			<Text style={{color : Theme.dark}}>
        			  	Sign in to access all amazing BROBAT fiture
        			</Text>
        		</View>

        		<KeyboardAvoidingView style={Visual.mgBottom4}>
        			<View>
        				<TextInput placeholder="Enter your email...." autoFocus={false} returnKeyType='next'  enablesReturnKeyAutomatically={true}/>
        				<TextInput placeholder="Enter your password...." secureTextEntry={true} enablesReturnKeyAutomatically={true} />
        			</View>
        		</KeyboardAvoidingView>

        		<View>
              <View style={[Visual.spaceBetween, Visual.OrdinaryRow]}>
                <TouchableOpacity style={Visual.mgBottom15}>
                  <View>
                    <Text style={[Visual.textParagraph, {color : Theme.ThemeColor}]}>Forgot your password ?</Text>
                  </View>
                </TouchableOpacity>

          			<TouchableOpacity style={Visual.mgBottom15}>
          				<View>
          					<Text style={[Visual.textParagraph, {color : Theme.dark}]}>Or you can login with : </Text>
          				</View>
          			</TouchableOpacity>
        			</View>

        			<View style={[Visual.OrdinaryRow, {alignItems : 'center', justifyContent : 'space-between'}]}>
        				<View elevation={5} style={{ backgroundColor : 'white', alignItems : 'center', justifyContent : 'center', borderRadius : 5 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HalamanUtama')} >
                      <View style={[Visual.mgRight4, Visual.OrdinaryRow, {width : 50, height : 40, alignItems : 'center', justifyContent : 'center'}]}>
                        <Icon 
                          name='power-off'
                          type='font-awesome'
                          size={27}
                          color='#e71c02'
                          iconStyle={{transform : [{rotate : '8deg'}] }}
                        />

                      </View>
                    </TouchableOpacity>
                  </View>

        				<View style={[Visual.OrdinaryRow]}>
        					<TouchableOpacity style={Visual.mgRight13}>
        						<Icon name="facebook-official" size={27} color='#3a589e' type="font-awesome" />
        					</TouchableOpacity>

        					<TouchableOpacity>
        						<View>
        							<Image source={require("./image/google-logo.png")} style={{width : 25, height : 25}} />
        						</View>
        					</TouchableOpacity>
        				</View>
        			</View>
        		</View>
        	</View>
        </View>
      </View>
    )
  }
}


