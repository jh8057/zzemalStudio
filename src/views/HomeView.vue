<template>
  <main>
    <ThreeJs />
    <div class="center">
      <h1>D A R L Y _ S T U D I O</h1>
      <p>2022. 02 OPEN</p>
    </div>
    <div class="test">
      <h2>느낌 보기 위한 사진</h2>
      <img src="@/assets/testImage.jpeg" />
    </div>
    <div class="test">
      <h2>느낌 보기 위한 사진2</h2>
      <img src="@/assets/testImage2.jpeg" />
    </div>
    <div class="test">
      <h2>느낌 보기 위한 사진3</h2>
      <img src="@/assets/testImage3.jpeg" />
    </div>
  </main>
</template>

<script setup lang="ts">
import ThreeJs from "@/components/ThreeJs/three.vue";
</script>

<style scoped>
.center {
  color: white;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
}
.test {
  display: flex;
  margin: 0 auto;
  color: white;
  flex-direction: column;
  place-items: center;
  justify-content: center;
}

img {
  max-width: 80vw;
  border-radius: 15px;
}
</style>
