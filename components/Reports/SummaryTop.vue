<template>
  <div class="w-full ">
    <div class="rounded-3xl w-full bg-white h-auto md:p-2 ">
      <div
        class="overflow-x-auto overflow-hidden flex flex-col items-center justify-between md:flex-row rounded-3xl gap-2 bg-white h-auto p-2 md:m-2"
        style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
        <div class="flex justify-between gap-2 mt-2 md:mt-0">
          <div class="p-2 w-full md:flex md:items-center md:gap-2">
            <h1 class="font-bold text-center ">From </h1>
            <div class="w-[9rem] px-2 pr-1 rounded-full border-2 border-[#F4F4F4]">
              <date-picker class="w-[8rem] my-1" v-model="selectedDate" format="YYYY-MM-DD" type="date"
                placeholder=""></date-picker>
            </div>
          </div>
          <div class="p-2 w-full md:flex md:items-center md:gap-2">
            <h1 class="font-bold text-center">To </h1>
            <div class="w-[9rem] px-2 pr-1 rounded-full border-2 border-[#F4F4F4]">
              <date-picker class="w-[8rem] my-1" v-model="selectedDateEnd" format="YYYY-MM-DD" type="date"
                placeholder=""></date-picker>
            </div>
          </div>
        </div>
        <select
          class="p-2 px-4 w-[10rem] rounded-lg border-2 border-[#F4F4F4] text-center focus:border-green-500 block outline-none"
          v-model="selected">
          <option v-for="p in periods" :key="p" :value="p">
            {{ p }} </option>
        </select>
        <span class="font-bold mt-2 md:ml-3 md:mr-2 whitespace-nowrap">Customer Types</span>
        <select class="p-2 pl-2 w-[10rem] rounded-lg border-2 border-[#F4F4F4]  focus:border-green-500 block outline-none"
          v-model="selected2">
          <option v-for="c in customerType" :key="c" :value="c"> {{ c }}</option>
        </select>
        <div
          class=" p-2 my-2 md:mr-2 w-[10rem] rounded-lg bg-[#235a61] text-white text-center font-semibold cursor-pointer ">
          Generate
        </div>
        <div class="flex justify-between gap-8 md:gap-2 mb-4 md:mb-0 ">
          <span class="w-8 rounded-lg bg-white " style="  box-shadow: 1px 2px 2px 2px #e2e1e1f4;">
            <img :src="download" class="m-2">
          </span>
          <span class="w-8 rounded-lg bg-white " style="  box-shadow: 1px 2px 2px 2px #e2e1e1f4;">
            <img :src="printer" class="m-2">
          </span>
        </div>
      </div>
      <reports-SummaryTable />
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
      title: "Reports",
      selectedDate: new Date(),
      selectedDateEnd: new Date(),
      selected: 'Daily',
      periods: ["Daily", "Weekly", "Monthly"],
      selected2: 'All',
      customerType: ["All", "New Customer", "Discount Customers"],
      download: require('../../static/icons/download.svg'),
      printer: require('../../static/icons/printer.svg')
    }
  },
}
</script>
<style lang="scss" scoped></style>
