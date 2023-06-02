<template>
  <div class="scroll__main">
    <img src="@/assets/Person/testImage.jpeg" class="scroll__picture--image" />
    <img src="@/assets/Person/testImage2.jpeg" class="scroll__picture--image" />
    <img src="@/assets/Person/testImage3.jpeg" class="scroll__picture--image" />
    <img src="@/assets/Person/testImage4.jpeg" class="scroll__picture--image" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.scroll__main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  padding-top: 120px;
}

.scroll__picture--image {
  height: auto;
  max-width: 300px;
  width: auto;
  max-height: 500px;
}
</style>
