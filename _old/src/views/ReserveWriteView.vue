<template>
  <div class="reserveWrite__wrap">
    <calendar-table></calendar-table>
    <reserve-form></reserve-form>
  </div>
</template>

<script setup lang="ts">
import CalendarTable from "@/components/Reserve/CalendarTable.vue";
import ReserveForm from "@/components/Reserve/ReserveForm.vue";
</script>

<style>
.reserveWrite__wrap {
  margin: auto;
}

@media (max-width: 640px) {
  .reserveWrite__wrap {
    width: 100%;
  }
}

@media (min-width: 640px) {
  .reserveWrite__wrap {
    width: 60%;
  }
}
</style>
