<template>
  <section class="calendarSection">
    <FullCalendar :options="calendarOptions" />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

let height = 600;
if (window.innerWidth < 500) {
  height = 390;
}

const calendarOptions: any = {
  plugins: [dayGridPlugin, interactionPlugin, googleCalendarPlugin],
  initialView: "dayGridMonth",
  eventDisplay: "block",
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
</style>
