'use strict';

import React, { Component } from 'react';
import {View, Image, Text} from 'react-native';
import {
  Header
} from 'react-native-elements';
import Theme from './visual/Theme.js'

class GambarBrobat extends Component<Props> {
  render() {
    return (
      <View style={{flexDirection : 'row', alignItems : 'center'}}>
        <Image source={ require('./image/logo-brobat.png') } style={{height : 26, width : 30, marginRight : 5}} />
        <Text style={{color : Theme.ThemeColor, fontSize : 18, fontWeight : 'bold'}}>BROBAT</Text>
      </View>
    )
  }
}

export default class AppHeader extends Component {
  render() {
  	let pageTitle = this.props.pageTitle;
  	let isBackward = this.props.isBackward;
    let link = this.props.navigation;
    return (
      <Header
		  leftComponent={{ icon: 'keyboard-backspace', color: Theme.ThemeColor }}
		  centerComponent={<GambarBrobat />}
		  rightComponent={{ icon: 'home', color: Theme.ThemeColor }}
		  outerContainerStyles={{ backgroundColor: 'white'}}
		/>
    );
  }
}