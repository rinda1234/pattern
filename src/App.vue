<template>
  <div class="page">
    <h1>디자인 패턴 실습</h1>

    <div class="grid">
      <section><Singleton /></section>
      <section><Factory /></section>
      <section><Adapter /></section>
      <section><Decorator /></section>
      <section><Observer /></section>
      <section><Visitor /></section>
      <section><Builder /></section>
      <section><Bridge /></section>
      <section><Command/></section>
    </div>
  </div>
</template>

<script setup lang="ts">
import Singleton from "./components/singleton/Singleton.vue";
import Factory from "./components/factory/Factory.vue";
import Adapter from "./components/adapter/Adapter.vue";
import Decorator from "./components/decorator/Decorator.vue";
import Observer from "./components/observer/Observer.vue";
import Visitor from "./components/visitor/Visitor.vue";
import Builder from "./components/builder/Builder.vue";
import Bridge from "./components/bridge/Bridge.vue";
import Command from "./components/command/Command.vue";
</script>

<style scoped>


.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* ✅ 3열 배치 */
  gap: 20px; /* 박스 사이 간격 */
}

</style>
