<template>
  <div>
    <!-- title mobile -->
    <!-- <div class="flex sm:hidden mt-2 mb-4 font-bold font-sans text-lg ">
      <div class="text-[#235a61] whitespace-nowrap">
        {{ title }}
      </div>
      <div class="text-[#AFCAC7] ">
        - {{ selectedLink.name }}</div>
    </div> -->
    <div class="flex justify-between gap-4 md:gap-2 items-center overflow-x-auto w-full ">
      <!-- navLink -->
      <div class="justify-start relative inline-flex ">
        <!-- Desktop -->
        <div v-for="nav in navbar" :key="nav.url"
          class="hidden bg-[#F4F4F4] py-2 md:px-4 pr-1 pl-2 lg:px-6 md:block items-center gap-2 rounded-t-lg text-gray-500  font-bold whitespace-nowrap cursor-pointer "
          :class="{ 'bg-white text-[#235a61]': $route.path === nav.url || ($route.path === '/bedrooms/inventory/Overview' && nav.name === 'Overview') }">
          <NuxtLink :to="nav.url">{{ nav.name }}</NuxtLink>
          <span class="w-4 hidden cursor-pointer px-auto hover:bg-[#D6EDE6] text-center items-center rounded-full">
            <img :src="right" class="w-full" alt="" @click="showdropdown = !showdropdown">
          </span>
        </div>
        <!-- Mobile -->
        <div
          class="sm:hidden py-2 md:px-4 pr-1 pl-2 lg:px-6 flex justify-between items-center gap-4 rounded-t-lg font-bold whitespace-nowrap cursor-pointer bg-white text-[#235a61] w-[9rem]"
          :class="{ 'w-auto': selectedLink.name === 'Online Booking Engine' }" @click="showdropdown = !showdropdown">
          <NuxtLink :to="selectedLink.url">{{ selectedLink.name }}</NuxtLink>
          <span class="w-4 sm:hidden cursor-pointer px-auto  flex text-center items-center rounded-full">
            <img :src="right" class="w-full" alt="">
          </span>
        </div>
      </div>
      <!-- Date  -->
      <!-- previous -->
      <div class="font-sans flex justify-between items-center rounded-full bg-white w-[11rem] md:w-auto h-full ">
        <span class="w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-[#D6EDE6] rounded-full">
          <img :src="left" class="w-[14px]" alt="" @click="previousDate">
        </span>
        <span class="lg:px-2 md:px-0 whitespace-nowrap font-bold text-gray-500 cursor-pointer" @click="currentDate">
          | Today |
        </span>
        <span class="w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-[#D6EDE6] rounded-full">
          <img :src="right" class="w-[14px]" alt="" @click="nextDate">
        </span>
      </div>
      <!-- Date picker -->
      <div class="flex justify-between items-center bg-white rounded-full lg:ml-36 px-2 w-auto">
        <h1 class="font-bold text-gray-500 whitespace-nowrap">
          Start Date :
        </h1>
        <date-picker v-model="selectedDate" format="YYYY-MM-DD" type="date" placeholder=""></date-picker>
      </div>
    </div>
    <div v-if="showdropdown"
      class="popup absolute z-50 flex flex-col py-2 md:px-4 pr-1 pl-2 lg:px-6 items-center bg-white rounded-lg text-gray-500 font-bold whitespace-nowrap left-[10rem]"
      style="top: 9rem;" :class="{ 'left-[14.2rem]': selectedLink.name === 'Online Booking Engine' }">
      <div class="py-2 px-4 w-full hover:bg-[#D6EDE6] hover:rounded-full text-center text-sm"
        v-for="nav in filteredNavbar" :key="nav.url">
        <NuxtLink :to="nav.url" @click="selectLink(nav)">{{ nav.name }}</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
export default {
  components: { DatePicker },
  data() {
    return {
      title: 'Bedrooms',
      navbar: [
        { name: 'Overview', url: '/Bedrooms/Inventory/Overview' },
        { name: 'Channel', url: '/Bedrooms/Inventory/Channel' },
        { name: 'HoteLink', url: '/Bedrooms/Inventory/HoteLink' },
        { name: 'Online Booking Engine', url: '/Bedrooms/Inventory/OnlineBookingEngine' },
      ],
      left: require('../../static/icons/chevron-left.svg'),
      right: require('../../static/icons/chevron-right.svg'),
      selectedDate: new Date(),
      showdropdown: false
    }
  },
  methods: {
    emitSelectedDate() {
      this.$emit('selected-date', this.selectedDate);
    },
    previousDate() {
      const date = new Date(this.selectedDate);
      date.setDate(date.getDate() - 1);
      this.selectedDate = date;
    },
    currentDate() {
      const date = new Date();
      date.setDate(date.getDate());
      this.selectedDate = date
    },
    nextDate() {
      const date = new Date(this.selectedDate);
      date.setDate(date.getDate() + 1);
      this.selectedDate = date;
    },
    selectLink(link) {
      const previousLink = this.selectedLink;
      this.selectedLink = link;
      const previousLinkIndex = this.navbar.indexOf(previousLink);
      this.navbar.splice(previousLinkIndex, 1);
      this.navbar.splice(previousLinkIndex, 0, previousLink);
      // this.showDropdown = false;
    },
  },
  watch: {
    selectedDate() {
      this.emitSelectedDate();
    },
  },
  computed: {
    filteredNavbar() {
      return this.navbar.filter(nav => nav !== this.selectedLink);
    },
    selectedLink() {
      return this.navbar.find(nav => nav.url === this.$route.path) || this.navbar[0];
    }
  },
}
</script>
