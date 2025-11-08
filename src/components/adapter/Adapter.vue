<template>
  <div class="adapter">
    <h2>Adapter</h2>

    <div class="controls">
      <input v-model.number="amount" type="number" min="1000" placeholder="결제 금액 입력 (₩)" />
      <button @click="runPayment">결제하기</button>
    </div>

    <div v-if="result" class="result">
      <p>{{ result }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NewPaymentGateway, PaymentAdapter } from './Adapter'

const amount = ref<number>(5000)
const result = ref<string>('')

function runPayment() {
  const gateway = new NewPaymentGateway()
  const adapter = new PaymentAdapter(gateway)
  result.value = adapter.payAndReturn(amount.value)
}
</script>

<style scoped>
.adapter {
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
  width: 180px;
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
button {
  padding: 8px 14px;
  border: none;
  background: #3b82f6;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}
button:hover {
  background: #2563eb;
}
.result {
  background: #151313;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
  font-weight: 500;
}
</style>
