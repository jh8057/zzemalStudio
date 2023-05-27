<template>
  <main>
    <div class="center">
      <h1>S T U D I O _ D A R L Y</h1>
      <p>스튜디오 달리</p>
      <scroll-main />
    </div>
  </main>
</template>

<script setup lang="ts">
import ScrollMain from "@/components/Scroll/Scroll.vue";
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
}
.center {
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  min-height: -webkit-fill-available;
  min-width: 100vw;
  height: 85vh;
  align-items: center;
}
.test {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  padding: 80px;
}

img {
  max-width: 80vw;
  border-radius: 15px;
}
</style>
