<template>
  <section class="location__wrap">
    <div class="location__contents">
      <h1>오시는길</h1>
      <div
        id="daumRoughmapContainer1677429222324"
        class="location__map root_daum_roughmap root_daum_roughmap_landing"
      ></div>
      <p>
        위치 : 서울 강서구 염창동 184-8 어반카운티 지하 1층 B01호 스튜디오 달리
        <span @click="copyLocation" class="copyText">
          복사
          <img src="@/assets/copyIcon.png" class="copyIcon" />
        </span>
      </p>

      <div class="location__buttonList">
        <a
          href="http://kko.to/yUv0CvuRiu"
          style="background-color: #ffe812; color: black"
          >카카오맵
        </a>
        <a
          href="http://map.naver.com/index.nhn?slng=&slat=&stext=&elng=126.873672&elat=37.55093083&etext=(무대, 호리존) 스튜디오 달리&menu=route&pathType=1"
          style="background-color: #2db400"
          >네이버맵</a
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Swal from "sweetalert2";

const copyLocation = () => {
  window.navigator.clipboard
    .writeText(
      "서울 강서구 염창동 184-8 어반카운티 지하 1층 B01호 스튜디오 달리"
    )
    .then(() => {
      Swal.fire({
        toast: true,
        position: "top",
        title: "복사 완료",
        icon: "success",
        showConfirmButton: false,
        timer: 1300,
      });
    });
};

onMounted(() => {
  const mainContents = document.querySelector(".mainContents") as HTMLElement;
  let mapWidth = "300";
  let mapHeight = "300";
  if (mainContents.clientWidth > 640) {
    mapWidth = "640";
    mapHeight = "360";
  }
  const mapEl = document.querySelector(".wrap_map");
  if (!mapEl) {
    new daum.roughmap.Lander({
      timestamp: "1677429222324",
      key: "2dv2t",
      mapWidth,
      mapHeight,
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
  gap: 10px;
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

.location__map {
  position: relative;
  margin-bottom: 20px;
}

.copyText {
  color: var(--gray-light);
  padding-left: 5px;
  cursor: pointer;
}
.copyIcon {
  position: relative;
  top: 1px;
  width: 13px;
  height: 14px;
}
</style>
