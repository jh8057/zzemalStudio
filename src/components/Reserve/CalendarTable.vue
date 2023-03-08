<template>
  <section class="calendarSection">
    <FullCalendar :options="calendarOptions" />
    <div v-show="showInfo" class="info__detail" :style="infoStyle">
      {{ infoData.innerText }}
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

const infoData = reactive({
  title: "",
  clientX: 0,
  clientY: 0,
  innerText: "",
});
const showInfo = ref(false);

const infoStyle = computed(() => {
  return {
    top: infoData.clientY + "px",
    left: infoData.clientX + "px",
  };
});

let height = 600;
if (window.innerWidth < 500) {
  height = 390;
}

const calendarOptions: any = {
  plugins: [dayGridPlugin, interactionPlugin, googleCalendarPlugin],
  initialView: "dayGridMonth",
  eventDisplay: "list-item",
  titleFormat: (date: any) => {
    const year = date.date.year;
    const month = date.date.month + 1;

    return year + "년 " + month + "월";
  },
  headerToolbar: {
    right: "prev,next",
  },
  height,
  eventClick: (e: any) => {
    e.jsEvent.preventDefault();
  },
  eventMouseEnter: (e: any) => {
    showInfo.value = true;
    infoData.title = e.event._def.title;
    infoData.innerText = e.el.innerText;
    infoData.clientX = e.jsEvent.clientX;
    infoData.clientY = e.jsEvent.clientY;
  },
  eventMouseLeave: (e: any) => {
    showInfo.value = false;
  },
  eventTimeFormat: {
    hour: "numeric",
    minute: "2-digit",
    meridiem: false,
  },
  displayEventEnd: true,
};
</script>

<style>
.calendarSection {
  width: 90%;
  margin: auto;
}
.fc-day-sun a {
  color: rgb(255, 71, 71);
  text-decoration: none;
}
/* 토요일 날짜 파란색 */
.fc-day-sat a {
  color: var(--blue-light);
  text-decoration: none;
}

.fc-day-mon a,
.fc-day-tue a,
.fc-day-wed a,
.fc-day-thu a,
.fc-day-fri a {
  color: black;
}
.fc-button {
  background-color: red;
}
.fc-dayGridMonth-view,
.fc-dayGridWeek-view {
  background-color: var(--white-soft);
}

.info__detail {
  position: fixed;
  color: var(--white-soft);
  background: var(--blue-light);
  padding: 5px;
  border-radius: 4px;
  z-index: 99;
}

.fc-daygrid-event-harness {
  overflow: hidden;
}
</style>
