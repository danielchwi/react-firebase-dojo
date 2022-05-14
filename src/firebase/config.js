import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// firebase configuration identifier
const firebaseConfig = {
  apiKey: "AIzaSyAET9MYrziIotHlO6-iXDjRGB9fXI9ZOaw",
  authDomain: "thedojosite-52db2.firebaseapp.com",
  projectId: "thedojosite-52db2",
  storageBucket: "thedojosite-52db2.appspot.com",
  messagingSenderId: "267336847571",
  appId: "1:267336847571:web:43808938f3d6305d6c4426"
};

//initilize firebase app & feaature
firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.Timestamp

export { projectAuth, projectFirestore, timestamp }