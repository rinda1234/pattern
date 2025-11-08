<template>
  <div class="bridge">
    <h2>Bridge</h2>
    <p>도형과 색상을 독립적으로 조합해보세요.</p>

    <div class="selectors">
      <label>
        색상 선택:
        <select v-model="selectedColor">
          <option value="red">빨강</option>
          <option value="blue">파랑</option>
          <option value="green">초록</option>
        </select>
      </label>

      <label>
        도형 선택:
        <select v-model="selectedShape">
          <option value="circle">원</option>
          <option value="square">사각형</option>
          <option value="triangle">삼각형</option>
        </select>
      </label>
    </div>

    <button class="draw" @click="drawShape">출력</button>

    <div v-if="output" class="result">
      <p>{{ output }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Red, Blue, Green, Circle, Square, Triangle, Shape } from "./Bridge";
import type { Color } from "./Bridge";

const selectedColor = ref("red");
const selectedShape = ref("circle");
const output = ref("");

function drawShape() {
  let color: Color;
  let shape: Shape;

  switch (selectedColor.value) {
    case "blue": color = new Blue(); break;
    case "green": color = new Green(); break;
    default: color = new Red();
  }

  switch (selectedShape.value) {
    case "square": shape = new Square(color); break;
    case "triangle": shape = new Triangle(color); break;
    default: shape = new Circle(color);
  }

  output.value = `그린 도형: ${shape.draw()}`;
}
</script>

<style scoped>
.bridge {
  font-family: "Segoe UI", sans-serif;
  border: 2px solid #ccc;
  border-radius: 12px;
  padding: 25px;
  margin: 40px;
  background: #1e1c1c;
  text-align: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 10px;
}

.selectors {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 15px 0;
  flex-wrap: wrap;
}

label {
  font-weight: 600;
}

select {
  margin-left: 6px;
  padding: 5px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button.draw {
  background-color: #0d83f3;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.2s;
}

button.draw:hover {
  background-color: #4f80ff;
}

.result {
  margin-top: 20px;
  padding: 12px;
  background-color: #221f1f;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1.1em;
}
</style>
