import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
//import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyBAKCi5ttcpGkB5nLNcBFzuYSfrzClwtgg',
  authDomain: 'floppyppua.firebaseapp.com',
  projectId: 'floppyppua',
  storageBucket: 'floppyppua.firebasestorage.app',
  messagingSenderId: '632221136636',
  appId: '1:632221136636:web:0c906476f404df50dbc979',
  //measurementId: 'G-NJ8ZBYWWYH',
}

const app = initializeApp(firebaseConfig)
//const analytics = getAnalytics(app)
const db = getFirestore(app)

export { app, db }
