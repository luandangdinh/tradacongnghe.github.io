import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyCYEOoI-rV0Y_ocEBY6sNWGqzNz9mJQnxU",
    authDomain: "tradacongnghe-ed2e3.firebaseapp.com",
    projectId: "tradacongnghe-ed2e3",
    storageBucket: "tradacongnghe-ed2e3.appspot.com",
    messagingSenderId: "336495111172",
    appId: "1:336495111172:web:dcdbf611b280cf54abd951",
    measurementId: "G-7911XZMDW9"
};
// Initialize Firebase
export const firebaseConnect = firebase.initializeApp(firebaseConfig);