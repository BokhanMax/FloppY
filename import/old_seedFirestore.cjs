// seedFirestore.js
const admin = require('firebase-admin');
const serviceAccount = require('./key.json');

// Ініціалізація Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const dataToAdd = [
  { name: 'Git Windows', description: 'Найвідоміша система контролю версій, вміє збеігати історію змін.', icon: '/icons/GitIcon.png', version: '2.50.0', link64: 'https://github.com/git-for-windows/git/releases/download/v2.50.0.windows.1/Git-2.50.0-64-bit.exe', link32: '', linkcommon: '', category: 'dev', website: 'https://git-scm.com/', createdAt: admin.firestore.FieldValue.serverTimestamp() }
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