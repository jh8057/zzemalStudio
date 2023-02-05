<template>
  <main>
    <ThreeJs />
    <div class="center">
      <h1>S T U D I O _ D A R L Y</h1>
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
    <div class="test" style="padding-bottom: 40px">
      <h2>느낌 보기 위한 사진4</h2>
      <img src="@/assets/testImage4.jpeg" />
    </div>
  </main>
</template>

<script setup lang="ts">
import ThreeJs from "@/components/ThreeJs/three.vue";
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
}
.center {
  color: white;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  min-height: -webkit-fill-available;
  min-width: 100vw;
  height: 100vh;
  align-items: center;
}
.test {
  display: flex;
  margin: 0 auto;
  color: white;
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
