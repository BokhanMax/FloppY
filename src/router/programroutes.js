import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebaseConfig.js'

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
