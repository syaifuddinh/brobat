/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  
} from 'react-native';
import Theme from './Theme.js';

let Visual = StyleSheet.create({
  choco : {
    backgroundColor : '#cc8e35'
  },
   autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
    borderWidth : 0
  },
   listItemText: {
    fontSize: 15,
    margin: 2
  },
  textWhite : {
    color : 'white'
  },

  sizeXS : {
    width : 15,
    height : 10
  },

  spaceBetween : {
    justifyContent : 'space-between',
  },

  row : {
    flexDirection : 'row',
    alignItems : 'center',
    padding : 6,
    backgroundColor : 'white'
  },
  
  OrdinaryRow : {
    flexDirection : 'row'
  }, 
  cornerRow : {
    padding:6,
    flexDirection : 'row',
    justifyContent : 'space-between',
  },
  center : {
    justifyContent : "center",
  },

  column : {
    padding : 6,
    backgroundColor : 'white'
  },

  appName : {
    marginLeft : 4,
  },

  title : {
    fontSize : 17,
    marginBottom : 4,
    color : Theme.dark
  },

  bold : {
    fontWeight : 'bold'
  },

  textApp : {
    fontWeight : 'bold',
    color : '#77442b'
  },

  textCenter : {
    textAlign : 'center'
  },

  textBig : {
    fontSize : 20,
    fontWeight : 'bold',
    color : 'black'
  },

  textGiant : {
    fontSize : 27,
    fontWeight : 'bold',
    color : Theme.dark
  },

  textParagraph : {
    fontSize : 13,
    color : Theme.dark
  },

  subtitle : {
    fontSize : 15,
    marginBottom : 3,
    color : Theme.dark
  },

  default : {
    fontSize : 12,
    marginBottom : 4,
    color : Theme.dark
  },
  gone : {
    display : 'none',
    margin : 0,
    padding : 0
  },
  textSmall : {
    fontSize : 10,
    marginBottom : 3,
    color : '#2d3436'
  },

  textRight : {
    textAlign : 'right'
  },

  textMini : {
    fontSize : 8,
    marginBottom : 3,
    color : '#2d3436'
  },

  topMenu : {
    height : 35
  },

  shadow : {
    borderBottomWidth : 1,
    borderColor : 'gray'
  },

  list : {
    borderColor : 'gray',
    borderWidth : 0.8,
    borderRadius : 8
  },

  listItem : {
    borderColor : '#bdc3c7',
    borderBottomWidth : 1,
    padding : 6
  },

  mainMenuItem : {
    padding : 8,
    width : 30,
    height : 30,
    backgroundColor : 'red',
    flex : 1
  },

  mediumImage : {
    flex : 1, 
    resizeMode : 'contain', 
    height : 50
  },

  pd10 : {
    padding : 10
  },
  pd20 : {
    padding : 20
  },
  pd15 : {
    padding : 15
  },

  time : {
    flexDirection : 'row'
  },

  timeItem : {
    padding : 5,
    fontSize : 12
  },

  timeHighlighted : {
    backgroundColor : 'red',
    color : 'white',

  },

  circleImage : {
    flex : 1, 
    resizeMode : 'contain', 
    height : 100,
  },

  iklan : {
    marginTop : 4,
    marginBottom : 4
  },

  mgBottom8 : {
    marginBottom : 8
  },
  mgBottom20 : {
    marginBottom : 20
  },
  mgBottom15 : {
    marginBottom : 15
  },
  mgBottom4 : {
    marginBottom : 4
  },

  mgBottom100 : {
    marginBottom : 100
  },

  mgRight8 : {
    marginRight : 8
  }, 

  mgRight13 : {
    marginRight : 13
  },

  mgRight3 : {
    marginRight : 3
  },

  mgRight4 : {
    marginRight : 4
  },

  panelHeader : {
    padding : 10,
    borderBottomWidth : 1,
    borderBottomColor : '#b2bec3'
  }
});

export default Visual;

