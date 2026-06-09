import { deleteApp } from 'firebase/app'
import { collection, getDocs, terminate } from 'firebase/firestore'
import { app, db } from '../helpers/firebaseConfig.js'

/**
 * Fetches all program IDs from Firebase and generates routes for the sitemap.
 * Terminates the Firestore connection after the query so the build process
 * can exit cleanly.
 * @returns {Promise<string[]>} Array of program routes
 */
export async function fetchProgramRoutes() {
  try {
    const querySnapshot = await getDocs(collection(db, 'programs'))
    const programRoutes = querySnapshot.docs.map((doc) => `/program/${doc.id}`)
    console.log(`✅ Fetched ${programRoutes.length} program routes for sitemap`)
    return programRoutes
  } catch (error) {
    console.error('❌ Error fetching program routes:', error)
    return []
  } finally {
    await terminate(db)
    await deleteApp(app)
  }
}
