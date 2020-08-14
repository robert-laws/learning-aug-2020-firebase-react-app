const firebase = require('firebase');
require('firebase/firestore');

const {
  reservations,
  restaurants,
  dateAvailabilities,
  reviews,
} = require('./data');

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

const db = firebase.firestore();

function populateCollection(collectionName, items) {
  return Promise.all(
    items.map((item) => {
      const { id, ...data } = item;
      return db.collection(collectionName).doc(id).set(data);
    })
  );
}

Promise.all([
  populateCollection('reservations', reservations),
  populateCollection('restaurants', restaurants),
  populateCollection('reviews', reviews),
  populateCollection('dateAvailabilities', dateAvailabilities),
])
  .then(() => {
    console.log('done!');
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
  });
