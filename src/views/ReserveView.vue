<template>
  <div class="reserve__wrap">
    <nav>
      <ul class="reserve__nav">
        <li><a href="#studioRental">렌탈안내</a></li>
        <li><router-link to="/reserveWrite">예약신청</router-link></li>
      </ul>
    </nav>

    <section class="reserve__section">
      <div class="reserve__mainPic">
        <img
          src="@/assets/Reserve/reservePic.jpeg"
          class="reserve__mainPic--pic"
        />
      </div>
      <div class="reserve__section--notice">
        <h3 id="studioRental">전체 대관(심플존 + 컨셉존)</h3>
        <ul>
          <li>평일 1시간 : 25000원 <i>*3인 기준</i></li>
          <li>주말 1시간 : 30000원 <i>*3인 기준</i></li>
        </ul>

        <ul class="reserve__notice">
          <li>렌탈 스튜디오 최소 이용 시간은 2시간입니다.</li>
          <li>기준 인원 외 인원 추가시 1인 시간 당 5000원이 추가됩니다.</li>
          <li>
            스튜디오 이용 시간은 촬영 준비 및 정리 시간이 모두 포함됩니다.(앞
            타임 없을 경우 10분 전 입실 가능)
          </li>
        </ul>
      </div>

      <div class="reserve__section--notice">
        <h3>예약 안내</h3>
        <ul class="reserve__notice--num">
          <li>1. 홈페이지 예약 페이지를 통해 신청해주세요.</li>
          <li>
            2. 예약 신청 후 12시간 내로 예약금 입금이 완료 되어야 예약 확정
            됩니다.<br />
            <div style="padding-left: 20px">
              <i>*입금이 완료 되지 않았을 경우 자동으로 예약 취소됩니다.</i>
              <h4 class="reserve__smallTitle">입금 계좌</h4>
              우리은행 1002-229-545508 / 예금주 : 방민규
              <h4 class="reserve__smallTitle">예약금</h4>
              <ul class="reserve__notice">
                <li>총 금액이 10만원 이하일 경우 : 전액 선금</li>
                <li>총금액이 10만원 이상일 경우 : 예약금 10만원</li>
              </ul>
            </div>
          </li>
          <br />
          <li>
            3. 예약 날짜 변경은 이용 날짜의 7일 전까지 가능합니다.
            <ul class="reserve__notice">
              <li>8일 전 : 예약금 100% 환불</li>
              <li>7일 전 : 예약금 50% 환불 혹은 일정 변경 가능</li>
              <li>6일 전~당일 : 환불 불가, 날짜 변경 불가</li>
            </ul>
          </li>
        </ul>

        <div class="reserveButton">
          <router-link to="/reserveWrite">예약 신청</router-link>
        </div>
      </div>
      <h3>이용 안내</h3>
      <h4>이용 시 안내사항</h4>
      <ul>
        <li>
          1. 실내에서는 "실내화" 착용 부탁드립니다. 입구 오른쪽으로 신발장
          준비되어 있으며, 꺼내져있는 실내화 외에도 안에 추가적으로 준비되어
          있습니다.
        </li>
        <li>
          2. 신발을 착용한 연출이 필요 시 꼭 신발장 위에 있는 마스킹 테이프
          꼼꼼히 붙여주시거나, 물티슈로 꼼꼼히 닦아주세요. (배경지에 안지워지는
          얼룩이 나는 경우 보증금 차감 사유입니다.)
        </li>
        <li>
          3. 입구 좌측 행거에 걸린 의상들의 경우 편하게 사용해주셔도 되지만,
          손상에 주의해주세요.
        </li>
        <li>
          4. 테이블과 의자에 경우 불필요 하신 경우 접어두시면 더욱 넓게 이용이
          가능합니다.(정리 시 정위치해주세요.)
        </li>
        <li>
          5. 가구 및 화분에 이동이 필요하신 경우 파손 및 화분 쓰러짐에 한번 더
          주의 부탁드리며, 호리존 배경지를 접어 심플존으로 옮기는 것을
          권장드립니다.
        </li>
        <li>
          6. 이용 시간/이용 인원 미준수/물품 파손/이용 후 정리 안됨 등이 확인 될
          경우 보증금 차감 및 추가 비용이 청구 될 수 있습니다.
        </li>
        <li>7. 건물 내 금연입니다.</li>
      </ul>
      <h4>이용 후</h4>
      <ul>
        <li>
          1. 이용이 끝난 후, 모든 가구 및 화분, 조명들은 원래 위치에 놓아주세요.
        </li>
        <li>2. 모든 조명 소등 및 에어컨 꺼져있는지 체크 부탁드립니다.</li>
      </ul>
      <p style="font-size: large">기타 문의사항 있으시면 편하게 문의주세요.</p>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style>
/* .reserve__wrap {
  margin: 20px;
  justify-content: center;
} */
.reserve__wrap p {
  margin: 5px;
}
i {
  font-size: 0.8rem;
}

.reserve__nav {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.reserve__nav li {
  border-bottom: 2px solid var(--blue-dark);
}

/* .reserve__nav li:hover {
  border: 2px solid blue;
} */
.reserve__notice {
  padding-left: 20px;
  list-style-type: "- ";
}

.reserve__smallTitle {
  margin: 5px;
}

.reserve__section--notice {
  margin-bottom: 50px;
}

.reserve__section--notice a {
  position: relative;
  background-color: var(--blue-light);
  border-radius: 7px;
  padding: 11px;
}

.reserveButton {
  width: 100%;
  margin-top: 30px;
}
.reserve__mainPic {
  width: 100%;
}
.reserve__mainPic--pic {
  width: 100%;
  border-radius: 7px;
}
</style>
