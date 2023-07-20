<template>
  <div class="w-full">
    <div class="px-4 mx-2 bg-[#235a61] rounded-xl z-10">
      <h1 class="font-bold text-[29px] mx-6 text-white text-center " style="font-family: 'Dancing Script', cursive;">
        {{ name }}
      </h1>
    </div>
    <div class="px-3 my-4 flex justify-end">
      <img class="w-10" :src="info" alt="">
    </div>
    <div class="px-[3rem]">
      <div class="flex justify-between items-center font-bold text-base pb-[1rem]">
        <h1 class="" :class="{ 'text-[#235a61]': !showDiv, 'text-gray-400': showDiv }">
          All The Times
        </h1>
        <h1 class="" :class="{ 'text-[#235a61]': showDiv, 'text-gray-400': !showDiv }">
          Specific times
        </h1>
      </div>
      <div
        :class="['h-16', 'flex', 'items-center', 'rounded-xl', 'p-[2px]', { 'bg-[#F7FBF3]': showDiv, 'bg-white': !showDiv }]"
        @click="toggleDiv">
        <!-- Switch -->
        <div class="w-14 h-full rounded-xl" :class="{ 'ml-auto bg-[#235a61]': showDiv, 'bg-[#A2A2A2]': !showDiv }">
          <img :src="toggleImage" class="m-3" alt="">
        </div>
      </div>
    </div>
    <div class="bg-white mx-2">
      <VueTimepicker v-model="selectedTime" :class="{
        'bg-red-500': true,
        'border': true,
        'border-gray-300': true,
        'rounded': true,
        'p-2': true
      }" format="HH:mm"></VueTimepicker>
    </div>
    <div class="time-picker">
    <div class="hours">
      <button @click="decrementHours" class="decrement w-8 h-8 border border-gray-300 rounded-full flex justify-center items-center cursor-pointer">-</button>
      <span class="text-lg font-semibold">{{ hours }}</span>
      <button @click="incrementHours" class="increment w-8 h-8 border border-gray-300 rounded-full flex justify-center items-center cursor-pointer">+</button>
    </div>
    <div class="minutes">
      <button @click="decrementMinutes" class="decrement w-8 h-8 border border-gray-300 rounded-full flex justify-center items-center cursor-pointer">-</button>
      <span class="text-lg font-semibold">{{ minutes }}</span>
      <button @click="incrementMinutes" class="increment w-8 h-8 border border-gray-300 rounded-full flex justify-center items-center cursor-pointer">+</button>
    </div>
  </div>
    <div v-if="showDiv" class="mt-4 p-4 ">
      <h1 class="mx-4 font-bold text-gray-400 mt-4">Choose operating hours</h1>
      <div class="flex flex-col gap-6 mx-2 " style="margin-top:2rem ;">
        <div class="bg-white rounded-xl flex items-center h-16 cursor-pointer" @click="picked = day"
          v-for="(day, i) in week" :key="i">
          <div class="w-[86%] font-bold font-sans text-[21px] p-1 text-center text-[#235a61] capitalize "
            style=" line-height: 1;">
            {{ day }}
          </div>
          <div class="w-[14%] custom-radio rounded-r-xl h-full flex items-center "
            :class="{ 'custom-radio': true, 'bg-[#235a61]': picked === day, 'bg-[#A2A2A2]': picked !== day }">
            <img :src="right" class="w-12" v-if="picked === day" />
          </div>
        </div>
      </div>
      <div class="flex items-center gap-4 px-4 mt-4" @click="toggleSeason" v-if="!showSeason">
        <span class="rounded-xl border-2 border-[#235a61] text-[#235a61] text-[29px] font-bold px-4 py-1">
          +
        </span>
        <span class="font-bold font-sans text-[19px] p-1 text-center text-[#235a61] capitalize ">
          Add sesional operating hours
        </span>
      </div>
      <div v-if="showSeason" class="mt-8 border-t border-gray-400">
        <div class="px-3 my-4 flex justify-end ">
          <img class="w-10" :src="info" alt="">
        </div>
        <div class="bg-[#F7FBF3] text-[#235a61] text-[21px] font-bold text-center rounded-xl p-4 mb-8">
          Seasional operating hours
        </div>
        <div class="flex flex-col gap-4 mx-4">
          <div v-for="(s, i) in Seasional" :key="i" class="flex justify-between p-4 bg-white rounded-xl">
            <span class="text-gray-400">{{ s }}</span>
            <span>
              <img :src="calendar" alt="">
            </span>
          </div>
        </div>
        <div class="flex flex-col gap-6 mx-2 " style="margin-top:2rem ;">
          <div class="bg-white rounded-xl flex items-center h-16 cursor-pointer" @click="pick = day"
            v-for="(day, i) in week" :key="i">
            <div class="w-[86%] font-bold font-sans text-[21px] p-1 text-center text-[#235a61] capitalize "
              style=" line-height: 1;">
              {{ day }}
            </div>
            <div class="w-[14%] custom-radio rounded-r-xl h-full flex items-center "
              :class="{ 'custom-radio': true, 'bg-[#235a61]': pick === day, 'bg-[#A2A2A2]': pick !== day }">
              <img :src="right" class="w-12" v-if="pick === day" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="float-right bg-[#235a61] rounded-xl mt-12 mb-12 px-4 py-2 uppercase text-white font-light">
      Continue
    </div>
  </div>
</template>
<script>
import VueTimepicker from 'vue2-timepicker';
import 'vue2-timepicker/dist/VueTimepicker.css';
export default {
  components: {
    VueTimepicker
  },
  data() {
    return {
      name: 'Your experience is available?',
      toggleImage: require('../../static/icons/chevron-right-white.svg'),
      left: require('../../static/icons/chevron-left-white.svg'),
      info: require('../../static/icons/info.svg'),
      showDiv: false,
      showSeason: false,
      week: [
        'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
      ],
      picked: '',
      Seasional: {
        start: 'Start of the season',
        end: 'End of the season'
      },
      pick: '',
      calendar: require('../../static/icons/calendar.svg'),
      selectedTime:null,
      hours: 0,
      minutes: 0
    }
  },
  methods: {
    toggleDiv() {
      this.showDiv = !this.showDiv;
      if (this.toggleImage === require('../../static/icons/chevron-right-white.svg')) {
        this.toggleImage = require('../../static/icons/chevron-left-white.svg');
      } else {
        this.toggleImage = require('../../static/icons/chevron-right-white.svg');
      }
    },
    toggleSeason() {
      this.showSeason = !this.showSeason;
    },
    incrementHours() {
      this.hours++;
    },
    decrementHours() {
      if (this.hours > 0) {
        this.hours--;
      }
    },
    incrementMinutes() {
      if (this.minutes < 59) {
        this.minutes++;
      } else {
        this.minutes = 0;
        this.incrementHours();
      }
    },
    decrementMinutes() {
      if (this.minutes > 0) {
        this.minutes--;
      } else {
        if (this.hours > 0) {
          this.minutes = 59;
          this.hours--;
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.time-picker {
  display: flex;
  align-items: center;
}

.hours .minutes {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

button {
  width: 2rem;
  height: 2rem;
}
.increment .decrement {
  font-size: 1rem;
}
</style>
