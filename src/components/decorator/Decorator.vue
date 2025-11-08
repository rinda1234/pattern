<template>
  <div class="decorator">
    <h2>Decorator</h2>

    <div class="controls">
      <input v-model="message" placeholder="메시지 입력" />
      <button @click="runDecorator">알림 보내기</button>
    </div>

    <div v-if="result.length > 0" class="result">
      <p v-for="(line, i) in result" :key="i">{{ line }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Notifier } from './Decorator'
import {
  BaseNotifier,
  EmailNotifier,
  SMSNotifier,
  SlackNotifier
} from './Decorator'

const message = ref('긴급 서버 장애 발생!')
const result = ref<string[]>([])

function runDecorator() {
  let notifier: Notifier = new BaseNotifier()

  // 동적으로 기능을 감싸면서 확장
  notifier = new EmailNotifier(notifier)
  notifier = new SMSNotifier(notifier)
  notifier = new SlackNotifier(notifier)

  result.value = notifier.send(message.value)
}
</script>

<style scoped>
.decorator {
  font-family: Arial, sans-serif;
  margin: 30px;
  padding: 20px;
  border: 1px solid #ffffff;
  border-radius: 10px;
}
.controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
}
input {
  width: 200px;
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
  background: #1b1818;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
  line-height: 1.5;
}
</style>
