<template>
  <section class="three__canvas">
    <div class="experience">
      <canvas class="experience-canvas"></canvas>
    </div>
  </section>
</template>

<script lang="ts">
import Experience from "@/plugin/three";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      load: false,
    };
  },
  mounted() {
    const experience = new Experience(
      document.querySelector(".experience-canvas")
    );
  },
  methods: {
    changeLightColor(color: number = 0x8fc9a3) {
      if (this.load) return;
      this.load = true;
      let canvasWrapper = document.querySelector(".experience");
      let canvas = document.querySelector(".experience-canvas");
      canvasWrapper?.classList.add("fadeOutAndIn");
      setTimeout(() => {
        const experience = new Experience(canvas, color);
      }, 250);
      setTimeout(() => {
        canvasWrapper?.classList.remove("fadeOutAndIn");
        this.load = false;
      }, 500);
    },
  },
});
</script>

<style>
.three__canvas {
  position: fixed;
  top: 0;
  left: 0;
  min-height: -webkit-fill-available;
  z-index: -99;
}

.fadeOutAndIn {
  -webkit-animation: fadeOutAndIn 2s linear alternate;
  -moz-animation: fadeOutAndIn 2s linear alternate;
  -ms-animation: fadeOutAndIn 2s linear alternate;
  -o-animation: fadeOutAndIn 2s linear alternate;
  animation: fadeOutAndIn 2s linear alternate;
}
@keyframes fadeOutAndIn {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  0% {
    opacity: 1;
  }
}
@-webkit-keyframes fadeOutAndIn {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  0% {
    opacity: 1;
  }
}
@-moz-keyframes fadeOutAndIn {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  0% {
    opacity: 1;
  }
}
@-ms-keyframes fadeOutAndIn {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  0% {
    opacity: 1;
  }
}
@-o-keyframes fadeOutAndIn {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  0% {
    opacity: 1;
  }
}
</style>
