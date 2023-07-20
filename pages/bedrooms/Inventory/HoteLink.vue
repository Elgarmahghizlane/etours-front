<template>
  <div class="w-full md:overflow-auto  h-[calc(100vh-90px)] md:mr-4 lg:ml-2 lg:mr-4 px-2 md:px-0">
    <bedrooms-navigator @selected-date="updateSelectedDate" />
    <bedrooms-channelTable :selected-date="selectedDate" />
  </div>
</template>
<script>
export default {
  layout: 'Hotel',
  data() {
    return {
      selectedDate: new Date(),
    };
  },
  methods: {
    updateSelectedDate(date) {
      this.selectedDate = date;
    },
  },
}
</script>
