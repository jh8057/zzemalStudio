<template>
  <main>
    <ThreeJs />
    <div class="center">
      <h1>D A R L Y _ S T U D I O</h1>
      <p>2022. 02 OPEN</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import ThreeJs from "@/components/ThreeJs/three.vue";
</script>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
