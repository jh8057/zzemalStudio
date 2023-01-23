<template>
    <main class="Three">
        <three-comp />
        <main-text />
    </main>
</template>

<script lang="ts">
import threeComp from '@/components/three.vue';
import MainText from '@/components/Home/mainText.vue';
export default {
    components: {
        threeComp,
        MainText,
    },
};
</script>

<style></style>
