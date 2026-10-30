// Одноразовий експорт колекції programs з Firestore у data/programs/<id>.json
import fs from 'fs'
import path from 'path'
import { deleteApp } from 'firebase/app'
import { collection, getDocs, terminate, Timestamp } from 'firebase/firestore'
import { app, db } from '../src/helpers/firebaseConfig.js'

// Фіксований порядок полів та значення за замовчуванням
const SCHEMA = {
  name: '',
  version: '',
  category: '',
  description: '',
  descriptionbig: '',
  website: '',
  link64: '',
  link32: '',
  linkcommon: '',
  linkupdate: '',
  textupdate: '',
  ispaid: false,
  createdAt: '',
}

const outDir = path.join(process.cwd(), 'data', 'programs')
for (const f of fs.existsSync(outDir) ? fs.readdirSync(outDir) : []) fs.rmSync(path.join(outDir, f))
fs.mkdirSync(outDir, { recursive: true })

const snap = await getDocs(collection(db, 'programs'))
for (const d of snap.docs) {
  const src = d.data()
  const data = {}
  for (const [k, def] of Object.entries(SCHEMA)) {
    const v = src[k] ?? def
    data[k] = v instanceof Timestamp ? v.toDate().toISOString() : v
  }
  fs.writeFileSync(path.join(outDir, `${d.id}.json`), JSON.stringify(data, null, 2) + '\n')
}
console.log(`Exported ${snap.size} programs`)
await terminate(db)
await deleteApp(app)
