<template>
  <div class="w-full ">
    <!-- title mobile -->
    <div class="sm:hidden mt-2 mb-8 text-[#235a61] font-bold font-sans text-lg whitespace-nowrap">
      {{ title }}
    </div>
    <!-- search nav -->
    <div
      class="lg:overflow-auto overflow-hidden w-full mb-4 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between items-center gap-2 lg:gap-4 ">
      <!-- left -->
      <div
        class="flex justify-between lg:justify-start gap-2 flex-wrap md:flex-nowrap md:gap-2 lg:gap-2 items-center w-full">
        <!-- icon -->
        <div class="flex justify-between gap-4 lg:gap-2 ">
          <div class="bg-white rounded-full h-8 w-8 flex items-center justify-center cursor-pointer">
            <img :src="calendar" class="w-[18px] h-[18px]" alt="" />
          </div>
          <div class="bg-white rounded-full h-8 w-8 cursor-pointer flex justify-center items-center">
            <img :src="circle" class="w-[20px] h-[20px]" alt="" />
          </div>
          <div class="bg-white rounded-full h-8 w-8 cursor-pointer flex justify-center items-center">
            <img :src="circle" class="w-[20px] h-[20px]" alt="" />
          </div>
        </div>
        <!-- date -->
        <div class="font-sans flex justify-between items-center rounded-full bg-white w-[11rem] md:w-auto ">
          <span class="w-8 h-8 flex justify-center items-center cursor-pointer">
            <img :src="left" class="w-[14px]" alt="" @click="previousDate">
          </span>
          <span class="lg:px-2 md:px-0 whitespace-nowrap cursor-pointer" @click="currentDate">
            | Today |
          </span>
          <span class="w-8 h-8 flex justify-center items-center cursor-pointer">
            <img :src="right" class="w-[14px]" alt="" @click="nextDate">
          </span>
        </div>
        <!-- start date -->
        <div class="flex justify-between items-center bg-white rounded-full px-2 w-full lg:w-auto">
          <h1 class="font-bold text-sm whitespace-nowrap">
            Start Date :
          </h1>
          <date-picker class="rounded-full w-full mx-4 " v-model="selectedDate" format="YYYY-MM-DD" type="date"
            placeholder=""></date-picker>
        </div>
      </div>
      <!-- right -->
      <div class="flex justify-between gap-4 lg:gap-2 items-center w-full">
        <!-- Search -->
        <div class="flex justify-between w-full rounded-full py-1 bg-white">
          <input
            class="w-full outline-none xl:w-auto lg:w-36 rounded-full bg-transparent placeholder-black placeholder-opacity-50 px-4 text-sm lg:text-sm placeholder:text-sm"
            placeholder="Search Keywords" type="text" v-model="filtered" />
          <span class="flex items-center pr-2 opacity-50 w-8 ">
            <img :src="search" class="w-full" alt="">
          </span>
        </div>
        <!-- Icons -->
        <div class="flex justify-between gap-4 lg:gap-2">
          <!-- Sort -->
          <div class="bg-white rounded-full h-8 w-8 flex items-center justify-center cursor-pointer">
            <img :src="funnel" class="w-[18px] h-[18px]" alt="" />
          </div>
          <!-- Add -->
          <div class="bg-white rounded-full h-8 w-8 cursor-pointer flex justify-center items-center">
            <img :src="plus" class="w-[20px] h-[20px]" @click="showModal = true" alt="" />
          </div>
        </div>
        <form>
          <div class="fixed inset-0 z-50 bg-opacity-50 bg-gray-50 h-screen flex items-center justify-center m-2"
            v-if="showModal">
            <div class=" bg-[#F4F4F4] rounded-xl border border-black md:w-[50%] w-full  ">
              <div class="flex justify-end m-1">
                <button @click="showModal = !showModal" type="button"
                  class="text-gray-400 hover:bg-[#D6ECE6] hover:text-gray-900 text-sm p-1.5 items-center rounded-full ">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
              <div class="flex flex-col mx-4">
                <div class="grid grid-cols-2 gap-8 ">
                  <div class="">
                    <label for="Room" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Room </label>
                    <input type="text" id="room" v-model="form.room"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none ">
                  </div>
                  <div>
                    <label for="Type" class="block mb-2 text-sm font-bold text-gray-900"> Type</label>
                    <input type="roomType" id="roomType" v-model="form.type"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none "
                      required>
                  </div>
                  <div>
                    <label for="Start" class="block mb-2 text-sm font-bold text-gray-900 w-full ">Start Date
                    </label>
                    <date-picker class="w-full" v-model="form.startDate" :disabled-date="disabledDate" @change="send"
                      format="YYYY-MM-DD" type="date"></date-picker>
                  </div>
                  <div>
                    <label for="End" class="block mb-2 text-sm font-bold text-gray-900 w-full">End Date
                    </label>
                    <date-picker class="w-full" v-model="form.endDate" :disabled-date="disabledDate" format="YYYY-MM-DD"
                      type="date" placeholder="" />
                  </div>
                </div>
                <button type="submit"
                  class="text-white bg-[#235a61] font-bold rounded-lg text-sm px-5 py-2.5 text-center my-6 mx-auto"
                  @click="postData">Add</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- Table -->
    <div class="overflow-x-auto w-full max-h-[calc(100vh-(150px))] border border-black rounded-xl block">
      <table class="table w-full text-center text-sm ">
        <thead class="border-b border-black sticky top-0 bg-white">
          <tr>
            <th class="px-12 py-6 border-r border-black w-1/5">Room</th>
            <th class="px-12 py-6 w-1/5">Type</th>
            <th v-for="day in days" :key="day"
                class="headCell border-l border-black px-2 "
              >{{ day.substring(8, 10) +
              '\n' + day.substring(0, 3) }}</th>
          </tr>
        </thead>
        <tbody class="overflow-y-auto h-[calc(100vh-(150px))">
          <tr v-for="row in filteredSearch" :key="row" class="border-t border-black bg-white ">
            <td class="border-r border-black text-center ">
              {{ row.room }}
            </td>
            <td class="">{{ row.type }}</td>
            <td v-for="(day,index) in days" :key="index" class="border-l border-black  h-8 "
              :class="{ 'bg-[#D6ECE6]': isBooked(row, day) }">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
export default {
  data() {
    return {
      components: { DatePicker },
      title: 'Reservations',
      selectedDate: new Date(),
      showSearchInput: false,
      left: require('../../static/icons/chevron-left.svg'),
      right: require('../../static/icons/chevron-right.svg'),
      calendar: require('../../static/icons/calendar.svg'),
      search: require('../../static/icons/search.svg'),
      circle: require('../../static/icons/circle.svg'),
      funnel: require('../../static/icons/funnel.svg'),
      plus: require('../../static/icons/plus.svg'),
      showModal: false,
      form:
        { room: "", type: "", startDate: "", endDate: "" },
      filtered: '',
      tableKeys: [
        'room', 'type'
      ],
      dataTable: [
        { room: "13", type: "Single", startDate: (new Date()).toDateString(), endDate: (new Date('2023, 05,19')).toDateString() },
        { room: "25", type: "Triple", startDate: (new Date('2023, 05,17')).toDateString(), endDate: (new Date('2023, 05,29')).toDateString() },
        { room: "2", type: "Room", startDate: (new Date('2023, 05,19')).toDateString(), endDate: (new Date('2023, 05,22')).toDateString() },
        { room: "25", type: "Room", startDate: (new Date('2023, 05,17')).toDateString(), endDate: (new Date('2023, 05,29')).toDateString() },
        { room: "2", type: "Single", startDate: (new Date('2023, 05,19')).toDateString(), endDate: (new Date('2023, 05,22')).toDateString() },
      ],
    };
  },
  computed: {
    days() {
      const days = [];
      const date = new Date(this.selectedDate);
      for (let i = 0; i < 20; i++) {
        days.push(date.toDateString());
        date.setDate(date.getDate() + 1);
      }
      return days;
    },
    rows() {
      const dataTable = this.dataTable
      for (let i = 0; i < 5; i++) {
        dataTable.push({ room: "", type: "", startDate: "", endDate: "" });
      }
      return dataTable;
    },
    filteredSearch() {
      return this.rows.filter((item) => {
        return this.tableKeys.some((key) =>
          item[key].toLowerCase().match(this.filtered.toLowerCase())
        );
      });
    },
  },
  methods: {
    send() {
      this.selectedDate = this.form.startDate
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

    toggleSearchInput() {
      this.showSearchInput = !this.showSearchInput
    },
    postData(e) {
      e.preventDefault()
      const newData = {
        room: this.form.room,
        type: this.form.type,
        startDate: this.form.startDate,
        endDate: this.form.endDate
      };
      if (
        this.form.room !== "" &&
        this.form.type !== "" &&
        this.form.startDate !== "" &&
        this.form.endDate !== ""
      ) {
        const emptyRow = this.rows.findIndex(
          (row) => row.room === "" && row.type === "" && row.startDate === "" && row.endDate === ""
        );
        if (emptyRow !== -1) {
          this.rows.splice(emptyRow, 1, newData);
        } else {
          this.rows.push(newData);
        }
        this.form.room = "";
        this.form.type = "";
        this.form.startDate = "";
        this.form.endDate = "";
        this.showModal = false;
      }
    },
    isBooked(row, day) {
      const startDate = new Date(row.startDate);
      const endDate = new Date(row.endDate);
      const currentDay = new Date(day);
      if (currentDay >= startDate && currentDay <= endDate) {
        return true;
      }
      return false;
    },
    disabledDate(date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date < today;
    },

  },
}
</script>
<style >
.mx-input {
  border-radius: 0.5rem
}
</style>
