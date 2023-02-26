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

const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: "dayGridMonth",
};
</script>

<style>
.calendarSection {
  width: 50%;
  margin: auto;
}
</style>
