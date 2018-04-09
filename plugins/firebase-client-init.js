import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDnQpweK6gWXFON7_-enlgV1OU-BO551xs",
    authDomain: "nuxt-firebase-todolist.firebaseapp.com",
    databaseURL: "https://nuxt-firebase-todolist.firebaseio.com",
    projectId: "nuxt-firebase-todolist",
    storageBucket: "",
    messagingSenderId: "593686607623"
};
// firebase.initializeApp(config);

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
export const Auth = firebase.auth()
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()