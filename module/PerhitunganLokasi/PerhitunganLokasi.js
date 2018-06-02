'use strict';

import React, { Component } from 'react';
import {View, Image, Text} from 'react-native';


let PerhitunganLokasi = () => {
  const MapAPI = 'AIzaSyC53jIPaiZUtuBlagQRhxMB9qtnbl3sbjA';

   return fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=-7.284992,%20112.747397&destination=-7.306842,%20112.735240&key=${MapAPI}`)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.routes[0];
    })
    .catch((error) => {
      console.error(error);
    });
}

export default PerhitunganLokasi;