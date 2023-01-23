<template>
    <nav class="navigator__wrap">
        <h3 @click="clickReserve">예약하기</h3>
    </nav>
</template>

<script lang="ts">
export default {
    setup() {
        const clickReserve = () => {
            alert('reserve');

            return 'a';
        };

        return {
            clickReserve,
        };
    },
};
</script>

<style>
.navigator__wrap {
    position: fixed;
}
</style>
