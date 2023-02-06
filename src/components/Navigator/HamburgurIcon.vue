<template>
  <svg
    width="22"
    height="17"
    viewBox="0 0 22 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    @click="toggleNav"
  >
    <g id="Group1">
      <line
        id="Line2"
        x1="1.5"
        y1="8.5"
        x2="20.5"
        y2="8.5"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        :class="[{ changed1: showNav }]"
      />
      <line
        id="Line3"
        x1="1.5"
        y1="15.5"
        x2="20.5"
        y2="15.5"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        :class="[{ changed2: showNav }]"
      />
      <line
        id="Line1"
        x1="1.59091"
        y1="1.5"
        x2="20.4091"
        y2="1.5"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        :class="[{ changed3: showNav }]"
      />
    </g>
  </svg>
</template>

<script setup lang="ts">
import { ref } from "vue";
const showNav = ref(false);
const toggleNav = () => {
  showNav.value = !showNav.value;
};
</script>

<style>
line {
  transition: transform 1s;
}
.changed3 {
  transform: translate(2px) rotate(45deg);
}

.changed1 {
  transform: translateX(100px);
  opacity: 0.5;
}

.changed2 {
  transform: translateX(-10px) translateY(5px) rotate(-45deg);
}
</style>
