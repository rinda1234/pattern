<template>
  <div class="singleton">
    <h2>Singleton</h2>
    <button @click="testSingleton">Run Singleton Test</button>

    <div v-if="output.length > 0" class="result">
      <p v-for="(line, i) in output" :key="i">{{ line }}</p>
    </div>
  </div>
</template>


<script setup lang="ts">


import { ref } from 'vue'
import { Singleton } from './Singleton'

const output = ref<string[]>([])

function testSingleton() {
  const s1 = Singleton.getInstance()
  const s2 = Singleton.getInstance()

  output.value = []
  output.value.push(s1.sayHello())
  output.value.push(`s1 === s2 인가? ${s1 === s2}`)
}
</script>

<style scoped>
.singleton {
  font-family: Arial, sans-serif;
  margin: 30px;
  text-align: center;
  border: 1px solid #ddd;
}
button {
  padding: 8px 14px;
  margin-top: 10px;
  cursor: pointer;
}
.result {
  margin-top: 15px;
  background: rgba(21, 20, 20, 0.7);
  border-radius: 8px;
  padding: 10px;
}
</style>
