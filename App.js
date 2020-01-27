import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/auth';
import Yonlendirme from './src/router/Router';
import { View, Text } from 'react-native';


var firebaseConfig = {
  apiKey: 'AIzaSyDVn9IeRdG2CSUScsecIBfunPPHQwB1NJw',
  authDomain: 'projectestdata.firebaseapp.com',
  databaseURL: 'https://projectestdata.firebaseio.com',
  projectId: 'projectestdata',
  storageBucket: 'projectestdata.appspot.com',
  messagingSenderId: '747914998895',
  appId: '1:747914998895:web:63257e1761bf680458499a',
  measurementId: 'G-7S2FY8GT6Q'
};

export default class App extends Component {
  UNSAFE_componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <Yonlendirme />
      </View>
    );
  }
}

