<template>
  <section class="location__wrap">
    <h1>오시는길</h1>

    <div class="location__contents">
      <div
        id="daumRoughmapContainer1677429222324"
        class="root_daum_roughmap root_daum_roughmap_landing"
        style="width: 100%; margin-bottom: 20px"
      ></div>
      <p>
        위치 : 서울 강서구 염창동 184-8 어반카운티 지하 1층 B01호 스튜디오 달리
      </p>

      <div class="location__buttonList">
        <a
          href="http://kko.to/yUv0CvuRiu"
          style="background-color: #ffe812; color: black"
          >카카오 맵 열기
        </a>
        <a
          href="http://map.naver.com/index.nhn?slng=&slat=&stext=&elng=126.873672&elat=37.55093083&etext=(무대, 호리존) 스튜디오 달리&menu=route&pathType=1"
          style="background-color: #2db400"
          >네이버 맵 열기</a
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
  const mapEl = document.querySelector(".wrap_map");
  if (!mapEl) {
    new daum.roughmap.Lander({
      timestamp: "1677429222324",
      key: "2dv2t",
      mapWidth: "640",
      mapHeight: "360",
    }).render();
  }
});
</script>
<style>
.location__wrap {
  margin: auto;
  width: 60%;
}

.location__contents {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}
.location__buttonList {
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-top: 20px;
}
.location__buttonList a {
  background-color: var(--blue-light);
  border-radius: 7px;
  padding: 11px;
}
</style>
