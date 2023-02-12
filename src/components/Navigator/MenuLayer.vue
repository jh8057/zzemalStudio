<template>
  <ul :class="['nav__ul', { active: showMenu }]">
    <!-- <li>스튜디오 소개</li> -->
    <li @click="toggleNav">
      <router-link to="/reserve">예약하기</router-link>
    </li>
    <li @click="toggleNav"><router-link to="/">포트폴리오</router-link></li>
    <li @click="toggleNav"><router-link to="/">촬영 의뢰</router-link></li>
    <li @click="toggleNav"><router-link to="/">대여</router-link></li>
    <li @click="toggleNav"><router-link to="/">오시는길</router-link></li>
    <li @click="toggleNav" class="nav__li--last">
      <router-link to="/">인스타 로고/ 네이버 사이트</router-link>
    </li>
  </ul>
  <div :class="['nav__background', { active: showMenu }]"></div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
import { defineEmits } from "vue";
const props = defineProps({
  showMenu: Boolean,
});
const emit = defineEmits(["toggleMenu"]);
const toggleNav = () => {
  emit("toggleMenu");
};
</script>

<style scoped>
.nav__ul {
  position: fixed;
  display: flex;
  height: 100%;
  right: 0;
  z-index: 9;
  /* width: 30vw; move to css */

  flex-direction: column;
  justify-content: center;
  gap: 5%;

  margin: 0;
  padding: 0;
  text-align: center;
  /* transition: transform 0.2s  move to css;
  transform: translateX(110vw);  move to css*/
}

.nav__ul li {
  display: block;
  list-style: none;
  cursor: pointer;
  line-height: 1.6;
  font-size: 1.5rem;
  gap: 20px;
}

.nav__background {
  position: fixed;
  right: 0;
  height: 100%;
  z-index: 8;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  /* transition: transform 0.2s move to css;
  transform: translateX(110vw); move to css*/
}

.active {
  transform: translateX(0px);
}
.nav__li--last {
  padding: 50px;
}
</style>
