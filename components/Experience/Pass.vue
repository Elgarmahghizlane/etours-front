<template>
  <div class="w-full">
    <div class="px-4 mx-2 bg-[#235a61] rounded-xl z-10">
      <h1 class="font-bold text-[29px] mx-6 text-white text-center " style="font-family: 'Dancing Script', cursive;">
        {{ name }}
      </h1>
    </div>
    <div class="flex justify-between items-center my-4 mx-4">
      <h1 class="font-semibold text-[#235a61]">
        Pass expiry
      </h1>
      <div class="">
        <img class="w-10" :src="info" alt="">
      </div>
    </div>
    <div class="flex flex-col gap-6 mx-2 ">
      <div class="pass bg-gradient-to-r from-[#F7FBF3] rounded-xl flex justify-between items-center h-[9rem] cursor-pointer "
        style="box-shadow: 2px 2px 3px 2px rgb(172, 172, 172); " @click="picked = d" v-for="(d, index) in data"
        :key="index" >
        <div class="flex flex-col justify-between w-[89%]">
          <div class="w-[5rem] font-bold font-sans text-[21px] text-black pl-8 p-1 pt-2 text-center mb-4 "
            style="line-height: 1;">
            {{ d.h1 }}
          </div>
          <div class="font-light text-[#235a61] text-[16px] px-4 pb-1" v-if="!(picked === d && d.h1 === 'On date') && !(picked === d && d.h1 === 'Expires')">
            {{ d.span }}</div>
          <div v-if="picked === d && d.h1 === 'On date'" class="rounded-xl mx-4 bg-white">
            <date-picker v-model="selectedDate" class="w-full" format="YYYY-MM-DD" type="date"
              placeholder="Enter expiry date"></date-picker>
          </div>
          <div v-if="picked === d && d.h1 === 'Expires'" class="text-[16px] text-[#235a61] ml-8">
            Expires in
            <span class="font-bold text-[#235a61] bg-white rounded-full p-2 px-3 mx-4 shadow-md" @click="decrement">-</span>
            <span class="font-bold">{{count}}</span>
            <span class="font-bold text-[#235a61] bg-white rounded-full p-2 px-3 mx-4 shadow-md" @click="increment">+</span>
            days
          </div>
        </div>
        <div class="custom-radio rounded-r-xl h-full flex justify-center items-center w-[11%]"
          :class="{ 'custom-radio': true, 'bg-[#235a61]': picked === d, 'bg-white': picked !== d }">
          <img :src="right" class="w-12" v-if="picked === d" />
        </div>
      </div>
    </div>
    <div class="float-left bg-[#D6EDE6] rounded-lg border border-[#235a61] mt-4 px-4 py-2 uppercase text-[#235a61] font-light cursor-pointer" @click="goBack"
        style="margin-bottom: 2rem;">
        Back
      </div>
      <div class="float-right bg-[#235a61] border border-[#235a61]  rounded-lg mt-4 px-4 py-2 uppercase text-white font-light cursor-pointer"
        style="margin-bottom: 2rem;">
        <nuxt-link to="/experience/booking"> Continue</nuxt-link>
      </div>
  </div>
</template>
<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
  components:{ DatePicker },
  data() {
    return {
      name: 'Pass settings',
      right: require('../../static/icons/chevron-right-white.svg'),
      info:require('../../static/icons/info.svg'),
      data: [
        {
          h1: 'Never expires',
          span: 'Expires on decided date'
        },
        {
          h1: 'On date',
          span: 'Expires on decided date'
        },
        {
          h1: 'Expires',
          span: 'After a defined number of days'
        }
      ],
      picked: '',
      // showDate: false,
      selectedDate: '',
      count:0
    }
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    },
    goBack() {
      this.$router.go(-1); // Go back to the previous page
    }
  }
}
</script>

<style lang="scss" scoped></style>
