import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import { App } from './app';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBX4F4M907-JXDM-VZ2os2VGvKVN7a9l0w',
  authDomain: 'learning-aug-2020-firebase.firebaseapp.com',
  databaseURL: 'https://learning-aug-2020-firebase.firebaseio.com',
  projectId: 'learning-aug-2020-firebase',
  storageBucket: 'learning-aug-2020-firebase.appspot.com',
  messagingSenderId: '700500875599',
  appId: '1:700500875599:web:26aee55475a70015658d3a',
  measurementId: 'G-87D500SKXK',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
