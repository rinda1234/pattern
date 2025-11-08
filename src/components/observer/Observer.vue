<template>
  <div class="observer">
    <h2>Observer</h2>

    <div class="controls">
      <input v-model.number="price" type="number" placeholder="주가 입력" />
      <button @click="updatePrice">가격 변경</button>
    </div>

    <div class="result" v-if="logs.length > 0">
      <p v-for="(log, i) in logs" :key="i">{{ log }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Stock, PriceDisplay, PriceAlert } from './Observer'

const price = ref<number>(0)
const logs = ref<string[]>([])

// Subject와 Observer 인스턴스 생성
const stock = new Stock()
const display = new PriceDisplay()
const alert = new PriceAlert()

// 옵저버 등록
stock.register(display)
stock.register(alert)

// 가격 변경 시 알림 발생
function updatePrice() {
  logs.value = stock.setPrice(price.value)
}
</script>

<style scoped>
.observer {
  font-family: Arial, sans-serif;
  margin: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
}
.controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
}
input {
  width: 160px;
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
button {
  padding: 8px 14px;
  border: none;
  background: #4f80ff;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}
button:hover {
  background: #3c68e8;
}
.result {
  background: #1c1a1a;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
}
</style>
