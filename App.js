/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Theme from './module/visual/Theme.js';

import LihatQRCode from './module/LihatQRCode';
import RatingAmbulance from './module/RatingAmbulance';
import HalamanUtama from './module/HalamanUtama';
import KonsultasiOnline from './module/KonsultasiOnline';
import Dokter from './module/Dokter';
import Poli from './module/Poli';
import PilihPasien from './module/PilihPasien';
import PilihWaktu from './module/PilihWaktu';
import Login from './module/Login';
import Splashscreen from './module/Splashscreen';

import CariAmbulance from './module/DaruratPage/CariAmbulance';
import MenungguAmbulance from './module/DaruratPage/MenungguAmbulance';

import ReservasiPoli from './module/PoliPage/ReservasiPoli';

import ReservasiDokter from './module/DokterPage/ReservasiDokter';
import PasienAmbilObat from './module/DokterPage/PasienAmbilObat';
import PasienDetailLayanan from './module/DokterPage/PasienDetailLayanan';
import PasienQRCode from './module/DokterPage/PasienQRCode';
import PasienInformasiObat from './module/DokterPage/PasienInformasiObat';
import KeluhanPasien from './module/DokterPage/KeluhanPasien';

import Spesialis from './module/KonsultasiPage/Spesialis';
import PilihDokterSpesialis from './module/KonsultasiPage/PilihDokterSpesialis';

import ReservasiAmbulance from './module/AmbulancePage/ReservasiAmbulance';


const RootStack = StackNavigator(
  {
    
    HalamanUtama : {
      screen : HalamanUtama
    },
    KonsultasiOnline : {
      screen : KonsultasiOnline
    },
    Dokter : {
      screen : Dokter
    }, 
    ReservasiDokter : {
      screen : ReservasiDokter
    },
    Poli : {
      screen : Poli
    },
    ReservasiPoli : {
      screen : ReservasiPoli
    },
    PilihPasien : {
      screen : PilihPasien
    },
    PilihWaktu : {
      screen : PilihWaktu
    },
    Login : {
      screen : Login
    },
    Splashscreen : {
      screen : Splashscreen
    },
    CariAmbulance : {
      screen : CariAmbulance
    },
    RatingAmbulance : {
      screen : RatingAmbulance
    },
    LihatQRCode : {
      screen : LihatQRCode
    },
    KeluhanPasien : {
      screen : KeluhanPasien
    },
    PasienAmbilObat : {
      screen : PasienAmbilObat
    },
    PasienQRCode : {
      screen : PasienQRCode
    },
    PasienDetailLayanan : {
      screen : PasienDetailLayanan
    },
    PasienInformasiObat : {
      screen : PasienInformasiObat
    },
    
    Spesialis : {
      screen : Spesialis
    },
    PilihDokterSpesialis : {
      screen : PilihDokterSpesialis
    },

    ReservasiAmbulance: {
      screen: ReservasiAmbulance
    }
  },
  {
    initialRouteName: 'Login',
    navigationOptions : {
      headerTitleStyle : {
        color : Theme.ThemeColor
      },
      headerStyle : {
        elevation : 0,

      },
      headerTintColor : Theme.ThemeColor
    }
  }
);

export default class App extends Component<Props> {
  render() {
    return <RootStack />
  }
}

