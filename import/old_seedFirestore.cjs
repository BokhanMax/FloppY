// seedFirestore.js
const admin = require('firebase-admin');
const serviceAccount = require('./key.json');

// Ініціалізація Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const dataToAdd = [
  { name: 'Signal', description: 'Кросплатформений месенджер, вважається одним із найзахищеніших та безпечних.', icon: '/icons/SignalIcon.png', version: '7.59.0', link64: 'https://updates.signal.org/desktop/signal-desktop-win-7.59.0.exe', link32: '', linkcommon: '', category: 'internet', website: 'https://signal.org/uk/', createdAt: admin.firestore.FieldValue.serverTimestamp() },
  { name: 'WARP 1.1.1.1', description: 'Крутий VPN-клієнт від компанії Cloudflare. Безкоштовний для домашнього використання.', icon: '/icons/WARPIcon.png', version: '7.59.0', link64: '', link32: '', linkcommon: 'https://1111-releases.cloudflareclient.com/win/latest', category: 'internet', website: 'https://one.one.one.one/', createdAt: admin.firestore.FieldValue.serverTimestamp() }
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