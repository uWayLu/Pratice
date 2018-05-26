import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCcvWbgN8G2p-QVu-81fQR8mrI7ngU4Jcg",
    authDomain: "day-off-practice.firebaseapp.com",
    databaseURL: "https://day-off-practice.firebaseio.com",
    projectId: "day-off-practice",
    storageBucket: "day-off-practice.appspot.com",
    messagingSenderId: "472999121347"
};
// firebase.initializeApp(config);

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
export const Auth = firebase.auth()
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()