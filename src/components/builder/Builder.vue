<template>
  <div class="Builder">
    <h2> Builder</h2>
    <p>순서 상관없이 자유롭게 구성해보세요!</p>

    <div class="buttons">
      <button @click="setBread('참깨빵')">빵: 참깨빵</button>
      <button @click="setBread('통밀빵')">빵: 통밀빵</button>

      <button @click="setPatty('소고기패티')">패티: 소고기</button>
      <button @click="setPatty('치킨패티')">패티: 치킨</button>

      <button @click="addCheese"> 치즈 추가</button>
      <button @click="addDrink('콜라')"> 콜라</button>
      <button @click="addDrink('사이다')"> 사이다</button>
      <button @click="addSide('감자튀김')"> 감자튀김</button>

      <button class="build" @click="buildBurger"> 버거 완성!</button>
    </div>

    <div v-if="log" class="result">
      <p>{{ log }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { BurgerBuilder, Burger } from "./Builder"

const builder = new BurgerBuilder()
const log = ref<string>("")

function setBread(type: string) {
  builder.setBread(type)
  log.value = `✅ 빵 선택: ${type}`
}

function setPatty(type: string) {
  builder.setPatty(type)
  log.value = `✅ 패티 선택: ${type}`
}

function addCheese() {
  builder.addCheese()
  log.value = ` 치즈 추가 완료`
}

function addDrink(drink: string) {
  builder.addDrink(drink)
  log.value = ` 음료 선택: ${drink}`
}

function addSide(side: string) {
  builder.addSide(side)
  log.value = ` 사이드 추가: ${side}`
}

function buildBurger() {
  const burger: Burger = builder.build()
  log.value = burger.describe()
}
</script>

<style scoped>
.builder {
  font-family: "Segoe UI", sans-serif;
  display: inline-block;
  margin: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  text-align: center;
}

h2 {
  margin-bottom: 10px;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
}

button {
  background-color: #0d83f3;
  border: none;
  border-radius: 8px;
  padding: 8px 14px;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background-color: #4f80ff;
  color: white;
}

button.build {
  background-color: #ffcc00;
  font-weight: bold;
}

.result {
  margin-top: 20px;
  padding: 12px;
  background-color: #100e0e;
  border-radius: 8px;
  font-size: 1.1em;
}
</style>
