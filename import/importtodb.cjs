const fs = require('fs');
const csv = require('csv-parser');
const admin = require('firebase-admin');

// --- Configuration ---
// Replace 'path/to/your/serviceAccountKey.json' with the actual path to your Firebase service account key file.
// You can download this file from your Firebase project settings -> Service accounts tab.
const SERVICE_ACCOUNT_KEY_PATH = './key.json';

// Replace 'your_csv_file.csv' with the actual path to your CSV file.
const CSV_FILE_PATH = 'import.csv';

// Replace 'your_collection_name' with the name of the Firestore collection you want to import data into.
const COLLECTION_NAME = 'programs';

// --- Script Logic ---

/**
 * Initializes Firebase Admin SDK.
 * @returns {firestore.Firestore | null} The Firestore client instance or null if initialization fails.
 */
function initializeFirebase() {
    if (!fs.existsSync(SERVICE_ACCOUNT_KEY_PATH)) {
        console.error(`Error: Service account key file not found at '${SERVICE_ACCOUNT_KEY_PATH}'`);
        console.error("Please download your service account key from Firebase Console (Project settings -> Service accounts) and update SERVICE_ACCOUNT_KEY_PATH.");
        return null;
    }

    try {
        const serviceAccount = require(SERVICE_ACCOUNT_KEY_PATH);
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
        const db = admin.firestore();
        console.log("Firebase Admin SDK initialized successfully.");
        return db;
    } catch (e) {
        console.error(`Error initializing Firebase: ${e.message}`);
        return null;
    }
}

/**
 * Reads a CSV file and uploads each row as a document to a Firestore collection.
 * @param {firestore.Firestore} db The Firestore client instance.
 * @param {string} csvFile Path to the CSV file.
 * @param {string} collectionName Name of the Firestore collection.
 */
async function importCsvToFirestore(db, csvFile, collectionName) {
    if (!fs.existsSync(csvFile)) {
        console.error(`Error: CSV file not found at '${csvFile}'`);
        return;
    }

    let docCount = 0;
    let batch = db.batch(); // Use batch writes for efficiency, re-declared with 'let'
    const BATCH_SIZE = 500; // Firestore allows up to 500 operations per batch

    try {
        console.log(`Starting import from '${csvFile}' to Firestore collection '${collectionName}'...`);

        // Use a Promise to handle the asynchronous stream
        await new Promise((resolve, reject) => {
            fs.createReadStream(csvFile)
                .pipe(csv())
                .on('headers', (headers) => {
                    console.log(`CSV Headers: ${headers}`);
                })
                .on('data', (row) => {
                    // Each row in the CSV will become a document in Firestore.
                    // The keys of the dictionary will be the field names.
                    // Firestore automatically infers data types (strings, numbers, booleans).
                    // For more complex types like arrays or maps, you might need pre-processing.

                    // Add the server timestamp to the row data
                    row.createdAt = admin.firestore.FieldValue.serverTimestamp();

                    const docRef = db.collection(collectionName).doc(); // Auto-generate ID
                    batch.set(docRef, row);
                    docCount++;

                    if (docCount % BATCH_SIZE === 0) {
                        // Commit the current batch and start a new one
                        batch.commit()
                            .then(() => {
                                console.log(`Imported ${docCount} documents so far (batch committed).`);
                                batch = db.batch(); // Start a new batch
                            })
                            .catch(error => {
                                console.error(`Error committing batch at document count ${docCount}: ${error.message}`);
                                reject(error); // Reject the promise if batch fails
                            });
                    }
                })
                .on('end', async () => {
                    // Commit any remaining documents in the last batch
                    // Check if there are any pending operations (docCount > 0 or not a perfect multiple of BATCH_SIZE)
                    if (docCount % BATCH_SIZE !== 0 || docCount === 0) {
                        await batch.commit();
                        console.log(`Imported remaining ${docCount % BATCH_SIZE === 0 ? BATCH_SIZE : docCount % BATCH_SIZE} documents in the final batch.`);
                    }
                    console.log(`\nSuccessfully imported ${docCount} documents to collection '${collectionName}'.`);
                    resolve(); // Resolve the promise once all data is processed
                })
                .on('error', (error) => {
                    console.error(`Error reading CSV file: ${error.message}`);
                    reject(error); // Reject the promise on file reading error
                });
        });
    } catch (e) {
        console.error(`An unexpected error occurred during import: ${e.message}`);
    }
}

// Main execution
(async () => {
    const db = initializeFirebase();
    if (db) {
        await importCsvToFirestore(db, CSV_FILE_PATH, COLLECTION_NAME);
        console.log("Import process completed.");
    } else {
        console.error("Firebase initialization failed. Aborting import.");
    }
})();
