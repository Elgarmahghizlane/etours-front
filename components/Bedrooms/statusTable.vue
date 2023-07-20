<template>
  <div>
    <div class="table__scroll rounded-xl overflow-auto w-full h-auto text-base">
      <table class="text-left bg-white w-full rounded-xl  pt-1 ">
        <thead class="font-sans font-bold px-2 ">
          <tr class="text-sm whitespace-nowrap capitalize border-b border-black mb-4">
            <th scope="col" class=" px-4 py-3 text-center ">
              Room
            </th>
            <th scope="col" class="px-4 py-3 text-center ">
              Room Type
            </th>
            <th scope="col" class="px-4 py-3 text-center">
              Kunde
            </th>
            <th scope="col" class=" text-center px-4 ">
              <span class="mx-auto px-4 py-3 my-1 bg-[#F4F4F4] rounded-lg text-[#235a61] cursor-pointer">
                Clean all rooms
              </span>
            </th>
            <th scope="col" class="px-4 py-3 text-center">
              Room notes
            </th>
            <th scope="col" class="px-4 py-3 text-center">
              Check-in instructions
            </th>
            <th scope="col" class="px-4 py-3 text-center">
              Score
            </th>
            <th scope="col" class="px-4 py-3 text-center">
              Ratings
            </th>
            <th scope="col" class="px-4 py-3 text-center" @click="addRow">
              <img class="ml-1 w-6" :src="plus" alt="">
            </th>
          </tr>
        </thead>
        <tbody class="px-2 capitalize">
          <tr v-for="item in tableData " :key="item"
            class="bg-white border-b border-black whitespace-nowrap text-sm font-semibold">
            <td scope="row" class="px-4 py-1 text-gray-900 whitespace-nowrap  ">
              <input type="text" class="w-full text-center outline-[#235a61] outline-1" :readonly="!item.isEditMode"
                :value="item.room">
            </td>
            <td class="px-4 py-1  ">
              <input type="text" class="w-full text-center outline-[#235a61] outline-1" :readonly="!item.isEditMode"
                :value="item.roomType">
            </td>
            <td class="px-4 py-1 ">
              <input type="text" class="w-full text-center outline-[#235a61] outline-1" :readonly="!item.isEditMode"
                :value="item.kunde">
            </td>
            <td class="text-center px-4">
              <select
                class="bg-[#F4F4F4] border border-gray-400 rounded-lg pl-4 py-[2px] w-full font-light focus:border-[#235a61] outline-none "
                :disabled="!item.isEditMode">
                <option v-for='c in item.clean' :key="c" :value="c.value">
                  {{ c.text }}
                </option>
              </select>
            </td>
            <td class="px-4 py-1 text-center" @click="openModal(item)" :class="{ 'cursor-pointer': !item.isEditMode }">
              <span class="w-full text-center cursor-pointer">
                {{ item.notes }} </span>
            </td>
            <td class="px-4 py-1">
            </td>
            <td class="px-4 py-1">
              <div class="bg-[#235a61] flex justify-between items-center rounded-md py-1">
                <span class="text-white ml-2">
                  {{ item.score }}
                </span>
                <span class="mr-1">
                  <img :src="incr" class="w-4 pr-1" alt="" @click="increment(item)"
                    :class="{ 'cursor-not-allowed	': !item.isEditMode }">
                  <img :src="decr" class="w-4 pr-1 " alt="" @click="decrement(item)"
                    :class="{ 'cursor-not-allowed	': !item.isEditMode }">
                </span>
              </div>
            </td>
            <td class="px-4">
              <star-rating v-model="item.ratings" :rating="item.ratings" :border-width="2" border-color="black"
                :rounded-corners="true" :show-rating="false" :read-only="!item.isEditMode"></star-rating>
            </td>
            <td class="flex flex-col items-center px-4 py-1 ">
              <span class="w-8 cursor-pointer hover:bg-[#D6EDE6] p-2 rounded-full"
                :class="{ 'bg-[#D6EDE6] ': item.isEditMode }" @click="toggleEditMode(item)">
                <img class="w-full" :src="item.isEditMode ? keep : edit" alt="">
              </span>
              <span class="w-8 p-2 cursor-pointer hover:bg-[#D6EDE6] rounded-full" @click="removeRow(item)">
                <img :src="trash" alt="">
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <span>

      </span>
    </div>
    <!-- modal -->
    <div class="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-50 lg:py-8 " v-if="showModal">
      <div class=" px-4 lg:m-40 lg:w-2/5 md:w-2/3 bg-[#235a61] rounded-xl">
        <h1 class="text-white font-bold pt-2 pb-1">Edit Room Notes</h1>
        <textarea class="bg-white block min-h-[auto] w-full rounded-xl px-3 py-[0.32rem] outline-none " rows="4"
          v-model="activeItem.notes"></textarea>
        <div class="flex justify-end  gap-2 my-2 font-bold">
          <button class="w-36 bg-green-300 rounded-full text-center p-2 px-2" type="submit" @click="save"> Save
          </button>
          <button class="w-18 rounded-full text-center px-4 cursor-pointer py-2 bg-[#F4F4F4]" @click="closeModal">
            Cancel
          </button>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Bedrooms',
      tableData: [
        {
          room: '51',
          roomType: 'Core',
          kunde: 'Test',
          clean: [{ text: 'Clean', value: 'Clean' }, { text: 'Dirty', value: 'Dirty' }],
          notes: 'rana',
          score: 0,
          ratings: 3,
          isEditMode: false,
        },
        {
          room: '51',
          roomType: 'Core',
          kunde: 'Test',
          clean: [{ text: 'Clean', value: 'Clean' }, { text: 'Dirty', value: 'Dirty' }],
          notes: 'Israe',
          score: 0,
          ratings: 0,
          isEditMode: false,
        },
        {
          room: '51',
          roomType: 'Core',
          kunde: 'Test',
          clean: [{ text: 'Clean', value: 'Clean' }, { text: 'Dirty', value: 'Dirty' }],
          notes: 'Luca',
          score: 0,
          ratings: 0,
          isEditMode: false,
        },
        {
          room: '51',
          roomType: 'Core',
          kunde: 'Test',
          clean: [{ text: 'Clean', value: 'Clean' }, { text: 'Dirty', value: 'Dirty' }],
          notes: 'Bean',
          score: 0,
          ratings: 0,
          isEditMode: false,
        },
        {
          room: '51',
          roomType: 'Core',
          kunde: 'Test',
          clean: [{ text: 'Clean', value: 'Clean' }, { text: 'Dirty', value: 'Dirty' }],
          notes: 'Bean',
          score: 0,
          ratings: 0,
          isEditMode: false,
        },
        {
          room: '51',
          roomType: 'Core',
          kunde: 'Test',
          clean: [{ text: 'Clean', value: 'Clean' }, { text: 'Dirty', value: 'Dirty' }],
          notes: 'Bean',
          score: 0,
          ratings: 0,
          isEditMode: false,
        },
        {
          room: '51',
          roomType: 'Core',
          kunde: 'Test',
          clean: [{ text: 'Clean', value: 'Clean' }, { text: 'Dirty', value: 'Dirty' }],
          notes: 'Bean',
          score: 0,
          ratings: 0,
          isEditMode: false,
        },
        {
          room: '51',
          roomType: 'Core',
          kunde: 'Test',
          clean: [{ text: 'Clean', value: 'Clean' }, { text: 'Dirty', value: 'Dirty' }],
          notes: 'Bean',
          score: 0,
          ratings: 0,
          isEditMode: false,
        },
        {
          room: '51',
          roomType: 'Core',
          kunde: 'Test',
          clean: [{ text: 'Clean', value: 'Clean' }, { text: 'Dirty', value: 'Dirty' }],
          notes: 'Bean',
          score: 0,
          ratings: 0,
          isEditMode: false,
        },
        {
          room: '51',
          roomType: 'Core',
          kunde: 'Test',
          clean: [{ text: 'Clean', value: 'Clean' }, { text: 'Dirty', value: 'Dirty' }],
          notes: 'Bean',
          score: 0,
          ratings: 0,
          isEditMode: false,
        },
      ],
      dropdown: require('../../static/icons/dropdown.svg'),
      decr: require('../../static/icons/decrement.svg'),
      incr: require('../../static/icons/increment.svg'),
      edit: require('../../static/icons/edit.svg'),
      trash: require('../../static/icons/trash.svg'),
      keep: require('../../static/icons/save.svg'),
      plus: require('../../static/icons/plus+.svg'),
      showModal: false,
      activeItem: null,
    }
  },
  methods: {
    increment(item) {
      if (item.isEditMode) {
        if (item.score >= 0) {
          item.score++;
        }
      }

    },
    decrement(item) {
      if (item.isEditMode) {
        if (item.score >= 1) {
          item.score--;
        }
      }
    },
    openModal(item) {
      if (item.isEditMode) {
        this.activeItem = item;
        this.showModal = true;
      }
    },
    closeModal() {
      this.showModal = false;
    },
    save() {
      this.showModal = false;
    },
    toggleEditMode(item) {
      item.isEditMode = !item.isEditMode;
    },
    removeRow(item) {
      const index = this.tableData.indexOf(item)
      if (index !== -1) {
        this.tableData.splice(index, 1)
      }
    },
    addRow() {
      const newRow = {
        room: '',
        roomType: '',
        kunde: '',
        clean: [{ text: 'Clean', value: 'Clean' }, { text: 'Dirty', value: 'Dirty' }],
        notes: '',
        score: 0,
        ratings: 0,
        isEditMode: true,
      }
      this.tableData.unshift(newRow)
    }
  },
}
</script>

<style >
.vue-star-rating-star {
  width: 1rem;
}

.vue-star-rating-pointer {
  margin-right: 1px;
}
</style>
