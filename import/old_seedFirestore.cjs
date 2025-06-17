// seedFirestore.js
const admin = require('firebase-admin');
const serviceAccount = require('./key.json');

// Ініціалізація Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const dataToAdd = [
  { name: '', description: '', icon: '/icons/______.png', version: '', link64: '', link32: '', linkcommon: '', category: '', createdAt: serverTimestamp() }
];

async function seedDatabase() {
  const collectionRef = db.collection('programs');

  console.log('Починаємо заповнення бази даних...');

  for (const item of dataToAdd) {
    try {
      // addDoc автоматично генерує ID документа
      await collectionRef.add(item);
      console.log(`Додано документ: ${item.name}`);
    } catch (error) {
      console.error(`Помилка при додаванні документа ${item.name}:`, error);
    }
  }

  console.log('Заповнення бази даних завершено!');
}

seedDatabase().catch(console.error);