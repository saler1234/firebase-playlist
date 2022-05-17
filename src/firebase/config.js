import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBpGd_xSx1zrB3tItwlyOgoQ4HRKRALCco",
    authDomain: "malo-glazbe.firebaseapp.com",
    projectId: "malo-glazbe",
    storageBucket: "malo-glazbe.appspot.com",
    messagingSenderId: "726095361982",
    appId: "1:726095361982:web:9da21395f45b39adbf6bef"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }