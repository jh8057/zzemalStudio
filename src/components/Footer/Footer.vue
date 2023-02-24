<template>
  <div class="footer__wrap">
    <div class="footer__list">
      <h4>스튜디오 달리</h4>
      <ul>
        <li>24시간 예약가능</li>
        <li>상담 및 문의 시간 10:00 ~ 19:00</li>
      </ul>
    </div>
    <div class="footer__list">
      <h4>주소</h4>
      <ul>
        <li>서울시 강서구 양천구 184-8 지하 1층 B101호</li>
      </ul>
    </div>
    <div class="footer__list">
      <h4>문의</h4>
      <ul>
        <li>0507-1335-9835</li>
        <li>인스타/카카오채널</li>
      </ul>
    </div>
    <div class="footer__list">
      <h4>계좌안내</h4>
      <ul>
        <li>예금주 : 방민규</li>
        <li>우리은행 1002-229-545508</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.footer__wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 120px;
  margin-bottom: 30px;
}

.footer__list {
  display: flex;
  flex-direction: column;
}

.footer__list h4 {
  margin: 0px;
}
</style>
