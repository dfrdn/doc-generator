import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCJLRSC3kd3y78hyYV2Yso_HvnL1B3b1Nk',
  authDomain: 'doc-gen-89538.firebaseapp.com',
  databaseURL: 'https://doc-gen-89538.firebaseio.com',
  projectId: 'doc-gen-89538',
  storageBucket: 'doc-gen-89538.appspot.com',
  messagingSenderId: '906893759026',
  appId: '1:906893759026:web:a664784463bf4a9525622b',
  measurementId: 'G-HLB38LLZBV'
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const storage = firebase.storage()

export { db, storage }
