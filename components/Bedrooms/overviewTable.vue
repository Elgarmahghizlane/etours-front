<template>
  <div class="overflow-x-auto w-full max-h-[calc(100vh-(150px))]">
    <table class="w-full ">
      <!-- thead -->
      <thead class="sticky top-0 ">
        <tr class="bg-white">
          <th class="px-8 py-6 border-r border-gray-300 text-sm font-semibold  ">
            <div class="table-room">
              Room
            </div>
          </th>
          <th class="px-8 py-6 text-sm  font-semibold relative">
            <div class=" table-type text-center">
              Type
            </div>
          </th>
          <template class="">
            <th class=" border-l border-gray-300 px-2 " v-for="day in days" :key="day">
              <div class="table-cell-width">
                <div class="h-[70%] flex justify-center items-center">
                  <span class="text-center py-1 text-sm font-semibold">
                    {{ day.substring(8, 10) }} <br>
                    {{ day.substring(0, 3) }}
                  </span>
                </div>
                <div class="flex justify-between gap-2 text-xs font-light text-gray-400">
                  <span>Status</span>
                  <span>Available</span>
                  <span>Total</span>
                </div>
              </div>
            </th>
          </template>
        </tr>
      </thead>
      <!-- tbody -->
      <tbody class="overflow-y-auto h-[calc(100vh-(150px))] ">
        <tr v-for="(e, index) in dataTable" :key="index" class="font-semibold px-2"
          :class="index % 2 === 0 ? 'bg-[#F4F4F4]' : 'bg-white'">
          <td class="px-8 border-r border-gray-300 text-center text-sm font-semibold data-table">
            {{ e.room }}
          </td>
          <td class="px-8 text-center whitespace-nowrap text-sm font-semibold data-table">
            {{ e.type }}
          </td>
          <template>
            <td class="border-l border-gray-300 px-2 font-semibold data-table" v-for="day in days" :key="day">
              <div class="flex justify-between items-center text-xs font-semibold ">
                <span v-if="e.Status === true" class="rounded-full bg-green-400 p-1 text-center text-green-400">.</span>
                <span v-if="e.Status === false" class="rounded-full bg-red-400 p-1 text-center text-red-400">.</span>
                <span>{{ e.Available }}</span>
                <span>{{ e.total }}</span>
              </div>
            </td>
          </template>
        </tr>
      </tbody>
      <tfoot class="overflow-y-auto sticky bottom-0 bg-[#F4F4F4] w-full">
        <tr>
          <td colspan="2" class="text-center px-4 py-2 text-sm font-semibold">Total availability</td>
          <template>
            <td class="border-l border-gray-300 px-2" v-for="day in days" :key="day">
              <div class="flex justify-between gap-2 text-xs ">
                <span></span>
                <span class="text-xs">5</span>
                <span>5</span>
              </div>
            </td>
          </template>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    selectedDate: {
      type: Date,
      required: true,
    },
  },
  data() {
    return {
      tableKeys: [
        'Room', 'type'
      ],
      dataTable: [
        { room: "13", type: "Single", Status: true, Available: 1, total: 1 },
        { room: "25", type: "Double", Status: false, Available: 0, total: 0 },
        { room: "2", type: "Triple", Status: true, Available: 1, total: 1 },
        { room: "25", type: "Avec vue sur mer", Status: false, Available: 0, total: 0 },
        { room: "2", type: "Presedentiel", Status: true, Available: 0, total: 0 },
        { room: "13", type: "Suite", Status: true, Available: 1, total: 1 },
      ],
      left: require('../../static/icons/chevron-left.svg'),
      right: require('../../static/icons/chevron-right.svg'),
    }
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
    }
  }
}
</script>
<style  scoped>
.table-cell-width {
  width: 9rem !important;
}

.table-room {
  width: 6rem !important;
  text-align: center;
}

.data-table {
  height: 12px !important;
  padding-bottom: 0%;
  padding-top: 0%;
}
</style>
