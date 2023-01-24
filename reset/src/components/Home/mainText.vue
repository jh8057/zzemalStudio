<template>
    <div class="mainText">
        <h2 class="mainText__title">방 민 규 스 튜 디 오</h2>
        <p>하단 footer : 주소 / 이름 /</p>
    </div>
</template>

<script lang="ts">
export default {};
</script>

<style>
.mainText {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    z-index: 99;
}
.mainText__title {
    margin: auto;
    text-align: center;
    justify-items: center;
    align-items: center;
}
</style>
