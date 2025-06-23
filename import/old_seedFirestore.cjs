// seedFirestore.js
const admin = require('firebase-admin');
const serviceAccount = require('./key.json');

// Ініціалізація Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const dataToAdd = [
  { name: 'K-Lite Codek Pack', description: 'Величезний набір кодеків для відтворення та перепаковки відео. Може допомогти прочитати рідкісні формати.', icon: '/icons/KLiteIcon.png', version: '19.0.1', link64: '', link32: '', linkcommon: 'https://files3.codecguide.com/K-Lite_Codec_Pack_1901_Mega.exe', category: 'media', website: 'https://codecguide.com/', createdAt: admin.firestore.FieldValue.serverTimestamp() }
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