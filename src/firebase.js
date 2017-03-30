import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCGXInxyFaec9E1yd_mmHvi04m2hxdut00',
  authDomain: 'hot-takes-1788f.firebaseapp.com',
  databaseURL: 'https://hot-takes-1788f.firebaseio.com',
  storageBucket: 'hot-takes-1788f.appspot.com',
  messagingSenderId: '223965560811'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
