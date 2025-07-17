<script setup>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import { ref, onMounted } from 'vue'
import { db } from '../firebaseConfig'
import { collection, query, orderBy, getDocs } from 'firebase/firestore'

const programs = ref([])
const loading = ref(true)
const error = ref(null)

const fetchNewestPrograms = async () => {
  loading.value = true
  error.value = null
  try {
    const q = query(collection(db, 'programs'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)

    programs.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      date: doc.data().createdAt.toDate(),
      ...doc.data(),
    }))
  } catch (err) {
    console.error('Помилка при отриманні програм:', err)
    error.value = err
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchNewestPrograms()
})
</script>

<template>
    <h1 class="text-center font-bold text-4xl mb-8">Manage DB - floppy.pp.ua</h1>
    <DataTable :value="programs" resizableColumns columnResizeMode="fit" showGridlines stripedRows tableStyle="min-width: 150rem">
      <ColumnGroup type="header">
        <Row>
          <Column header="Інфа" :colspan="7" />
          <Column header="Посилання" :colspan="3" />
        </Row>
        <Row>
          <Column header="ID" :colspan="1" />
          <Column header="Назва" :colspan="1" />
          <Column header="Опис" :colspan="1" />
          <Column header="Версія" :colspan="1" />
          <Column header="Дата" :colspan="1" />
          <Column header="Категорія" :colspan="1" />
          <Column header="URL розробника" :colspan="1" />
          <Column header="x32" :colspan="1" />
          <Column header="x64" :colspan="1" />
          <Column header="x86-x64" :colspan="1" />
        </Row>
      </ColumnGroup>
      <ColumnGroup type="footer">
        <Row>
            <Column footer="Всього програм:" :colspan="9" footerStyle="text-align:right" />
            <Column :footer="programs.length" />
        </Row>
    </ColumnGroup>
      <Column field="id"></Column>
      <Column field="name" sortable style="width: 25%"></Column>
      <Column field="description"></Column>
      <Column field="version"></Column>
      <Column field="date"></Column>
      <Column field="category" sortable style="width: 25%"></Column>
      <Column field="website"></Column>
      <Column field="link32"></Column>
      <Column field="link64"></Column>
      <Column field="linkcommon"></Column>
    </DataTable>
</template>
<style scoped>

.description-column-wrap {
  white-space: normal;
  word-break: break-word;
}
</style>