// seedFirestore.js
const admin = require('firebase-admin');
const serviceAccount = require('./key.json');

// Ініціалізація Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const dataToAdd = [
  { name: 'AIMP', description: 'Чудовий аудіоплеєр, дуже сильно схожий на легендарний Winamp. Купа додаткових можливостей!', icon: '/icons/AIMPIcon.png', version: '5.40.2683', link64: 'https://www.aimp.ru/?do=download.file&id=3', link32: 'https://www.aimp.ru/?do=download.file&id=4', linkcommon: '', category: 'media', createdAt: admin.firestore.FieldValue.serverTimestamp() },
  { name: '7Zip', description: 'Альтернативний архіватор, використовує свій формат, але працює з усіма відомими', icon: '/icons/7ZipIcon.png', version: '24.09', link64: 'https://www.7-zip.org/a/7z2409-x64.exe', link32: 'https://www.7-zip.org/a/7z2409.exe', linkcommon: '', category: 'files', createdAt: admin.firestore.FieldValue.serverTimestamp() }
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