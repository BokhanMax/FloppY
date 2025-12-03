import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBAKCi5ttcpGkB5nLNcBFzuYSfrzClwtgg',
  authDomain: 'floppyppua.firebaseapp.com',
  projectId: 'floppyppua',
  storageBucket: 'floppyppua.firebasestorage.app',
  messagingSenderId: '632221136636',
  appId: '1:632221136636:web:0c906476f404df50dbc979',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

/**
 * Fetches all program IDs from Firebase and generates routes for the sitemap
 * @returns {Promise<string[]>} Array of program routes
 */
export async function fetchProgramRoutes() {
  try {
    const programsCollection = collection(db, 'programs')
    const querySnapshot = await getDocs(programsCollection)
    
    const programRoutes = querySnapshot.docs.map((doc) => `/program/${doc.id}`)
    
    console.log(`✅ Fetched ${programRoutes.length} program routes for sitemap`)
    return programRoutes
  } catch (error) {
    console.error('❌ Error fetching program routes:', error)
    // Return empty array on error so build doesn't fail
    return []
  }
}

