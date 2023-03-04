<template>
  <section class="reserveForm__wrap">
    <h2>예약 신청</h2>
    <div class="reserveForm__layer">
      <ul class="reserveForm__list">
        <label for="userName">성함 *</label>
        <input name="userName" placeholder="홍길동" v-model="userName" />
        <label for="phone">연락처 *</label>
        <input name="phone" placeholder="01098761234" v-model="phone" />
        <label for="time">예약 일자 및 시간 *</label>
        <input name="time" placeholder="3월 3일 3시-5시" v-model="time" />
        <label for="peopleNum">이용 인원 *</label>
        <input name="peopleNum" placeholder="3명" v-model="peopleNum" />
        <label for="purpose">사용 목적</label>
        <input name="purpose" placeholder="제품 촬영" v-model="purpose" />
        <label for="etc">기타 요청 사항</label>
        <input name="etc" v-model="etc" />
        <div class="reserveFrom__buttonWrap">
          <button @click="sendEmail">예약 신청</button>
        </div>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useReserve } from "./composable/useReserve";
import axios from "axios";
import Swal from "sweetalert2";
const { userName, phone, time, peopleNum, purpose, etc } = useReserve();

const sendEmail = async () => {
  //이름
  if (!userName.value) {
    errorAlert("이름을 입력해주세요.");
    return;
  }

  //전화번호
  if (!phone.value) {
    errorAlert("전화번호를 입력해주세요.");
    return;
  } else {
    let target: any = phone.value;
    target = target.replace(/\-/, "");

    let checkNum = /\D/.test(target);
    if (checkNum) {
      errorAlert("전화번호는 숫자로만 입력해주세요.");
      return;
    }
    phone.value = target;
  }

  //시간
  if (!time.value) {
    errorAlert("예약시간을 입력해주세요.");
    return;
  }

  //시간
  if (!peopleNum.value) {
    errorAlert("이용인원을 입력해주세요.");
    return;
  }

  Swal.showLoading();
  //메일보내기
  const params = {
    userName: userName.value,
    phone: phone.value,
    time: time.value,
    peopleNum: peopleNum.value,
    purpose: purpose.value,
    etc: etc.value,
  };
  let result = await axios.get(
    "https://uyfw49m706.execute-api.ap-northeast-2.amazonaws.com/sendDarlyReserve",
    { params }
  );
  if (result) {
    Swal.fire({
      icon: "success",
      title: "예약 신청이 완료되었습니다.",
      text: "확인 후 예약 완료시 달력에 추가됩니다.",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "예약 신청 중 오류가 발생했습니다.",
      text: "다시 한 번 시도해주세요.",
    });
  }
  // console.log(result);
};

const errorAlert = (msg: string) => {
  Swal.fire({
    icon: "error",
    text: msg,
  });
};
</script>

<style>
.reserveForm__wrap {
  width: 90%;
  margin: auto;
}
.reserveForm__layer {
  position: flex;
  justify-content: center;
  border: 1px solid;
  background-color: var(--white-soft);
  border-radius: 4px;
  box-shadow: 5px 5px 15px rgb(54, 54, 54);
}
.reserveForm__list {
  display: flex;
  color: black;
  font-size: 14px;
  font-weight: 600;
  padding: 20px;
  margin: auto;
  gap: 10px;
  flex-direction: column;
}

.reserveForm__list input {
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  width: 100%;
  min-height: 44px;
  border: 1px solid black;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
}
.reserveFrom__buttonWrap {
  width: 100%;
  text-align: center;
}
.reserveForm__list button {
  margin: 30px;
  background-color: var(--blue-light);
  color: var(--white-soft);
  width: 200px;
  border-radius: 4px;
  padding: 11px;
  border: none;
  font-size: 16px;
  font-weight: bold;
}
</style>
