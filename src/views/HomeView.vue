<template>
    <navigator-comp @test="test" />
    <main>
        <three-comp ref="threeComp" />
        <main-text />
    </main>
</template>

<script lang="ts">
import threeComp from '@/components/three.vue';
import MainText from '@/components/Home/mainText.vue';
import navigatorComp from '@/components/navigator.vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        threeComp,
        MainText,
        navigatorComp,
    },
    methods: {
        test(color: number) {
            let threeComp = this.$refs.threeComp as any;
            threeComp.changeLightColor(color);
        },
    },
});
</script>

<style></style>
