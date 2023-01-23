<template>
    <div>
        <main class="three__canvas">
            <div class="experience">
                <canvas class="experience-canvas"></canvas>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import Experience from '@/plugin/three';

export default {
    mounted() {
        const experience = new Experience(document.querySelector('.experience-canvas'));
    },
};
</script>

<style>
.three__canvas {
    width: 100%;
}
</style>
