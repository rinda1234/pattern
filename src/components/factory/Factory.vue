<template>
  <div class="factory">
    <h2> Factory</h2>

    <div class="buttons">
      <button @click="runFactory('Windows')">Windows Dialog</button>
      <button @click="runFactory('Mac')">Mac Dialog</button>
    </div>

    <div v-if="output.length > 0" class="result">
      <p v-for="(line, i) in output" :key="i">{{ line }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, WindowsDialog, MacDialog } from './Factory'

const output = ref<string[]>([])

function runFactory(osType: string) {
  let dialog: Dialog

  if (osType === 'Windows') {
    dialog = new WindowsDialog()
  } else {
    dialog = new MacDialog()
  }

  output.value = dialog.renderDialog()
}
</script>

<style scoped>
.factory {
  font-family: Arial, sans-serif;
  margin: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}
.buttons {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 15px;
}
button {
  padding: 8px 14px;
  cursor: pointer;
  border: none;
  background: #4f80ff;
  color: white;
  border-radius: 6px;
  transition: 0.2s;
}
button:hover {
  background: #3c68e8;
}
.result {
  background: #131111;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
}
</style>
