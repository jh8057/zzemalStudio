<template>
    <main>
        <three-comp />
        <main-text />
    </main>
    <navigator-comp />
</template>

<script lang="ts">
import threeComp from '@/components/three.vue';
import MainText from '@/components/Home/mainText.vue';
import navigatorComp from '@/components/navigator.vue';
export default {
    components: {
        threeComp,
        MainText,
        navigatorComp,
    },
};
</script>

<style></style>
