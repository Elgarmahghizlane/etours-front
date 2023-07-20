<template>
  <div class="w-full">
    <div class="px-4 mx-2 bg-[#235a61] rounded-xl z-10">
      <h1 class="font-bold text-[29px] mx-6 text-white text-center" style="font-family: 'Dancing Script', cursive;">
        {{ name }}
      </h1>
    </div>
    <div class="flex flex-col gap-6 mx-2 " style="margin-top:2rem ;">
      <div class=" bg-gradient-to-r from-[#F7FBF3] rounded-xl flex justify-between items-center h-[9rem] cursor-pointer "
        style="box-shadow: 2px 2px 3px 2px rgb(172, 172, 172); " @click="(picked = d) && (showDate = !showDate)" v-for="(d, index) in data"
        :key="index">
        <div class="flex flex-col justify-between gap-4">
          <div class="font-light text-[#235a61] text-[16px] px-4 pb-1" style="">
            {{ d.span }}</div>
        </div>
        <div class="custom-radio rounded-r-xl h-full flex items-center w-[3.5rem]"
          :class="{ 'custom-radio': true, 'bg-[#235a61]': picked === d, 'bg-white': picked !== d }">
          <img :src="right" class="w-12" v-if="picked === d" />
        </div>
      </div>
    </div>
    <div v-if="showDate" class="flex justify-between items-center mt-6 mx-6 " >
      <div class="rounded-xl bg-[#F7FBF3] p-4 font-light text-[#235a61] text-[16px]" style="box-shadow: 2px 2px 3px 2px rgb(172, 172, 172);" v-for="(t,i) in times" :key="i"> {{t}}</div>
      </div>
      <div class="float-left bg-[#D6EDE6] rounded-lg border border-[#235a61] mt-4 px-4 py-2 uppercase text-[#235a61] font-light cursor-pointer" @click="goBack"
        style="margin-bottom: 2rem;">
        Back
      </div>
      <nuxt-link to="/experience/capacitytype">
      <div class="float-right bg-[#235a61] border border-[#235a61] rounded-lg mt-4 px-4 py-2 uppercase text-white font-light cursor-pointer"
        style="margin-bottom: 2rem;">
        Continue
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'How close to the departure can travellers book?',
      toggleImage: require('../../static/icons/chevron-right-white.svg'),
      right: require('../../static/icons/chevron-right-white.svg'),
      data: [
        {
          span: 'Bookings is open until the start time of the experience'
        },
        {
          span: 'Set custom cutto',
        }
      ],
      picked: '',
      times:[
        'weeks','days','hours','minutes'
      ],
      showDate: false
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
    }
  }
}
</script>
<style lang="scss" scoped></style>
