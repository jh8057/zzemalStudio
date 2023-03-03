<template>
  <section>
    <h2>예약 신청서</h2>
    <ul>
      <li>성함</li>
      <input v-model="foo" />
      <li>연락처</li>
      <li>예약 일자 및 시간</li>
      <li>이용 인원</li>
      <li>사용 목적</li>
      <li>기타 요청 사항</li>
      {{
        foo
      }}
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useReserve } from "./composable/useReserve";
const { foo } = useReserve();
</script>

<style>
/*  */
</style>
