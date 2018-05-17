import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAVky2_hU_eZtP1vgbZ7EVB6oI-GshJSRA',
  authDomain: 'vuejs-waterstats.firebaseapp.com',
  databaseURL: 'https://vuejs-waterstats.firebaseio.com',
  projectId: 'vuejs-waterstats',
  storageBucket: 'vuejs-waterstats.appspot.com',
  messagingSenderId: '1011821592139'
}
const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()
