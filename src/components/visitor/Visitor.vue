<template>
  <div class="visitor">
    <h2>Visitor</h2>

    <button @click="calculateSize">폴더 크기 계산</button>
    <button @click="printNames">폴더 구조 출력</button>

    <div v-if="logs.length > 0" class="result">
      <p v-for="(log, i) in logs" :key="i">{{ log }}</p>
      <p v-if="totalSize > 0"><strong>📦 총 크기: {{ totalSize }}</strong></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  FileElement,
  FolderElement,
  SizeCalculator,
  NamePrinter
} from './Visitor'

const logs = ref<string[]>([])
const totalSize = ref<number>(0)

// 폴더 구조 구성
const file1 = new FileElement('a.txt', 10)
const file2 = new FileElement('b.txt', 20)
const folder = new FolderElement('docs', [file1, file2])

function calculateSize() {
  const sizeVisitor = new SizeCalculator()
  folder.accept(sizeVisitor)
  logs.value = sizeVisitor.getLogs()
  totalSize.value = sizeVisitor.getTotalSize()
}

function printNames() {
  const nameVisitor = new NamePrinter()
  folder.accept(nameVisitor)
  logs.value = nameVisitor.getLogs()
  totalSize.value = 0
}
</script>

<style scoped>
.visitor {
  font-family: Arial, sans-serif;
  margin: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}
button {
  margin: 5px;
  padding: 8px 14px;
  border: none;
  background: #4f80ff;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background: #3c68e8;
}
.result {
  margin-top: 15px;
  background: #191717;
  border-radius: 8px;
  padding: 10px;
}
</style>
