// seedFirestore.js
const admin = require('firebase-admin');
const serviceAccount = require('./key.json');

// Ініціалізація Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const dataToAdd = [
  { name: 'NodeJS', description: 'Програмне середовище для виконання застосунків, написаних мовою JavaScript, поза браузером.', icon: '/icons/NodeJSIcon.png', version: '22.17.0', link64: 'https://nodejs.org/dist/v22.17.0/node-v22.17.0-x64.msi', link32: 'https://nodejs.org/dist/v22.17.0/node-v22.17.0-x86.msi', linkcommon: '', category: 'dev', website: 'https://nodejs.org/uk/', createdAt: admin.firestore.FieldValue.serverTimestamp() }
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