<template>
  <ul :class="['nav__ul', { active: showMenu }]">
    <li>
      <router-link to="/" @click="toggleNav"
        ><img src="@/assets/darlyIcon.png" class="darlyIcon"
      /></router-link>
    </li>
    <li>
      <router-link to="/reserve" @click="toggleNav">예약 안내</router-link>
    </li>
    <li><router-link to="/" @click="toggleNav">예약 신청</router-link></li>
    <li><router-link to="/" @click="toggleNav">촬영 의뢰</router-link></li>
    <li><router-link to="/" @click="toggleNav">대여</router-link></li>
    <li>
      <router-link to="/location" @click="toggleNav">오시는길</router-link>
    </li>
    <li class="nav__li--last">
      <a href="https://www.instagram.com/studio.darly/">
        <img src="@/assets/instaLogo.png" class="IconSize" />
        <span> DARLY</span>
      </a>
      <br />
      <a href="javascript:void(0)"> 카카오채널(1:1문의) </a>
    </li>
  </ul>
  <div :class="['nav__background', { active: showMenu }]"></div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
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
  /* cursor: pointer; */
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
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);

  /* transition: transform 0.2s move to css;
  transform: translateX(110vw); move to css*/
}
@supports not (backdrop-filter: blur(20px)) {
  .nav__background {
    background-color: black;
  }
}
.active {
  transform: translateX(0px);
}
.nav__li--last {
  padding-top: 30px;
}
</style>
