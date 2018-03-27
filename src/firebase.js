import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyDTthXUTXedCy0dgNiPrDQqxLZytQ_IFgA',
    authDomain: 'turnout-c1140.firebaseapp.com',
    databaseURL: 'https://turnout-c1140.firebaseio.com',
    projectId: 'turnout-c1140',
    storageBucket: '',
    messagingSenderId: '158869225321',
};

export const firebaseApp = firebase.initializeApp(config);
