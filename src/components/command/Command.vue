<template>
  <div class="command">
    <h2>🎮 Command Pattern Example</h2>
    <p>리모컨으로 불을 켜거나 끄고, 실행 취소를 눌러보세요.</p>

    <div class="buttons">
      <button @click="turnOn">💡 불 켜기</button>
      <button @click="turnOff">💤 불 끄기</button>
      <button class="undo" @click="undoCommand">↩️ 실행 취소</button>
    </div>

    <div v-if="logs.length" class="result">
      <p v-for="(log, i) in logs" :key="i">{{ log }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Light, LightOnCommand, LightOffCommand, RemoteControl } from "./Command";

const light = new Light();
const remote = new RemoteControl();
const logs = ref<string[]>([]);

function turnOn() {
  remote.setCommand(new LightOnCommand(light));
  logs.value.push(remote.pressButton());
}

function turnOff() {
  remote.setCommand(new LightOffCommand(light));
  logs.value.push(remote.pressButton());
}

function undoCommand() {
  logs.value.push(remote.pressUndo());
}
</script>

<style scoped>
.command {
  font-family: "Segoe UI", sans-serif;
  display: inline-block;
  padding: 30px;
  margin: 30px;
  border: 2px solid #ccc;
  border-radius: 12px;
  background: #1e1c1c;
  text-align: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  width: 300px;
}

h2 {
  margin-bottom: 10px;
}

p {
  margin-bottom: 10px;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

button {
  background-color: #0d83f3;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background-color: #4f80ff;
}

button.undo {
  background-color: #ffcc00;
  color: black;
  font-weight: bold;
}

.result {
  margin-top: 20px;
  background-color: #191717;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #ddd;
}
</style>
