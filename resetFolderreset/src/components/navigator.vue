<template>
    <nav class="navigator__wrap">
        <ul class="navigator__list">
            <li @mouseover="clickReserve(0xff8040)">예약하기</li>
            <li @mouseover="clickReserve(0x05009e)">예약하기</li>
            <li @mouseover="clickReserve(0xe0d09d)">예약하기</li>
            <li @mouseover="clickReserve(0x55009e)">예약하기</li>
            <li @mouseover="clickReserve(0x73a1b6)">예약하기</li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    methods: {
        clickReserve(color: number) {
            this.$emit('test', color);
        },
    },
});
</script>

<style>
.navigator__list {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    list-style: none;
    gap: 15px;
}
.navigator__wrap {
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 100;
    top: 35vh;
    left: 10vw;
}
</style>
