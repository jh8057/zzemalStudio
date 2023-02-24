<template>
  <div class="content__wrap">
    <header>
      <div class="header__wrap">
        <router-link to="/"
          ><img src="@/assets/darlyIcon.png" class="darlyIcon"
        /></router-link>
        <hamburgur-icon
          class="hamburgurIcon"
          :showMenu="showMenu"
          @toggle-menu="toggleMenu"
        />
      </div>
    </header>
    <nav>
      <menu-layer
        v-show="showMenu"
        :showMenu="showMenu"
        @toggle-menu="toggleMenu"
      />
    </nav>
    <div class="topBlock"></div>
    <RouterView />
    <footer-bottom />
    <ThreeJs />
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import HamburgurIcon from "@/components/Navigator/HamburgurIcon.vue";
import MenuLayer from "@/components/Navigator/MenuLayer.vue";
import ThreeJs from "@/components/ThreeJs/three.vue";
import FooterBottom from "@/components/Footer/Footer.vue";
const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
  if (showMenu.value == true && window.innerWidth < 500) {
    let body = document.querySelector("body") as HTMLElement;
    body.classList.add("bodyNoScroll");
  } else {
    let body = document.querySelector("body") as HTMLElement;
    body.classList.remove("bodyNoScroll");
  }
};
</script>
<style scoped>
.content__wrap {
  height: 100%;
  width: 100%;
}
header {
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100vw;
}
.header__wrap {
  display: flex;

  height: 100%;
  position: relative;
  justify-content: space-between;
  text-align: center;
  margin: var(--head-margin);
}
.topBlock {
  height: calc(var(--head-height) + var(--head-margin));
}

.darlyIcon {
  width: 100px;
  height: var(--head-height);
}
.hamburgurIcon {
  height: var(--head-height);
  vertical-align: middle;
}

/* header {
  line-height: 1.5;
  max-height: 100vh;
}


/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
} */
/*
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
