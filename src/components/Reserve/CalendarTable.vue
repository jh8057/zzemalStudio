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

const googleCalendarApiKey = import.meta.env.VITE_CALENDAR_KEY;
const calendarOptions: any = {
  plugins: [dayGridPlugin, interactionPlugin, googleCalendarPlugin],
  initialView: "dayGridMonth",
  googleCalendarApiKey,
  events: {
    googleCalendarId: "sadam19940226@gmail.com",
  },
  eventDisplay: "block",
  eventTextColor: "#F2921D",
};
</script>

<style>
.calendarSection {
  width: 90%;
  min-height: 500px;
  margin: auto;
}
</style>
