<template>
  <div class="w-full ">
    <!-- search nav -->
    <div
      class="lg:overflow-auto overflow-hidden w-full mb-4 flex flex-col gap-2 md:flex-row md:flex-wrap lg:flex-nowrap justify-between items-center ">
      <!-- left -->
      <div class="flex lg:gap-[0.8rem] gap-4 w-full flex-col md:flex-row md:flex-wrap lg:flex-nowrap ">
        <!-- Search by keywords -->
        <div class="flex justify-between w-full rounded-full border border-black bg-white">
          <input
            class="w-full outline-none xl:w-auto lg:w-36 rounded-full bg-transparent placeholder-black placeholder-opacity-50 px-2 py-1 text-xs lg:text-sm placeholder:text-xs"
            placeholder="Search Keywords" type="text" v-model="filtered" />
          <span class=" flex items-center pr-2 opacity-50 w-6 ">
            <img :src="search" class="w-full" alt="">
          </span>
        </div>
        <!-- Search by types -->
        <div class="font-sans w-full md:w-full xl:w-auto ">
          <select id="customer"
            class="w-full xl:w-auto lg:w-36 rounded-full border border-black px-1 py-1 text-xs lg:text-sm placeholder:text-xs"
            v-model="selected">
            <option disabled value="">
              All Customer Types
            </option>
            <option v-for="p in options" :key="p" class="">
              {{ p }}
            </option>
          </select>
        </div>
        <!-- Selling date -->
        <div class="flex gap-8 lg:gap-2 items-center font-sans sm:w-full md:w-full xl:w-auto ">
          <span class="whitespace-nowrap text-sm ">{{ sell }}</span>
          <input
            class="w-full md:w-full xl:w-28 lg:w-20 rounded-full border border-black placeholder-gray px-2 py-1 text-xs lg:text-sm lg:placeholder:text-center"
            type="number" placeholder="02-30-2023" v-model="dateFilter" />
        </div>
      </div>
      <!-- right -->
      <div class="flex justify-between items-center space-x-2 lg:gap-2 w-full">
        <!-- Result -->
        <div class="flex items-center gap-2 w-full">
          <span class="whitespace-nowrap text-sm">{{ result }}</span>
          <select id="results"
            class="w-full xl:w-auto lg:w-[4.6rem] rounded-full border border-black ml-1 px-4 py-1 text-xs lg:text-sm placeholder:text-center"
            v-model="perPage">
            <option v-for="r in results" :key="r" :value="r">
              {{ r }}
            </option>
          </select>
        </div>
        <!-- icon -->
        <div class="flex justify-between xl:gap-4 gap-2 ">
          <div class="bg-white rounded-full h-8 w-8 flex items-center justify-center cursor-pointer">
            <img :src="trash" class="w-[18px] h-[18px]" alt="" />
          </div>
          <div class="bg-white rounded-full h-8 w-8 cursor-pointer flex justify-center items-center"
            @click="showModal = true">
            <img :src="plus" class="w-[20px] h-[20px]" alt="" />
          </div>
        </div>
        <!-- Modal -->
        <form @submit="postData" method="post">
          <div class="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-50 lg:py-8 "
            v-if="showModal">
            <div
              class="bg-[#F4F4F4] rounded-2xl lg:rounded-xl border border-black lg:w-1/3 md:w-2/3 lg:m-40 overflow-y-auto lg:h-[90vh] h-[80vh] mx-2 mt-[5rem] px-4 ">
              <div class="flex justify-between items-center my-2 ">
                <h2 class="text-lg font-bold ">Customer Information</h2>
                <span class="bg-white rounded-full w-6 cursor-pointer" @click="showModal = false">
                  <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </span>
              </div>
              <!-- name -->
              <div class="flex md:flex-nowrap flex-wrap md:gap-4 items-center">
                <span class="md:w-[50%]">Name</span>
                <input v-model="form.name" type="name" id="name"
                  class=" text-gray-900 font-light text-sm rounded-full w-full p-2 my-2  " placeholder="Name">
              </div>
              <!-- vip -->
              <div class="flex md:flex-nowrap flex-wrap md:gap-4 items-center whitespace-nowrap">
                <span class="md:w-[50%]">Customer Type</span>
                <input v-model="form.customertype" type="vip" id="vip"
                  class=" text-gray-900 font-light text-sm rounded-full w-full p-2 my-2 " placeholder="VIP">
              </div>
              <!-- email -->
              <div class="flex md:flex-nowrap flex-wrap md:gap-4 items-center">
                <span class="w-[50%]">Email</span>
                <input v-model="form.email" type="email" id="email"
                  class=" text-gray-900 font-light text-sm rounded-full w-full p-2 my-2 " placeholder="Email">
              </div>
              <!-- phone -->
              <div class="flex md:flex-nowrap flex-wrap md:gap-4 items-center">
                <span class="w-[50%]">Phone</span>
                <div class="flex justify-between w-full gap-0 items-center">
                  <div class="flex flex-wrap w-full">
                    <div v-for="(phone, index) in form.phoneNumbers" :key="index" class="w-full">
                      <input v-model="phone.number" :name="'phone-' + index" type="phoneNumber" id="phoneNumber"
                        class="bg-white rounded-full text-gray-900 font-light text-sm w-4/5 p-2 my-2"
                        placeholder="+2126 000 999 889" />
                    </div>
                  </div>
                  <span v-if="showAddPhoneNumberButton" class="w-8 bg-white rounded-full p-1" @click="addPhoneNumber()">
                    <img :src="plus" class="w-full " alt="" />
                  </span>
                  <span v-else class="w-8 bg-white rounded-full p-1"
                    @click="removePhoneNumber(form.phoneNumbers.length - 1); showAddPhoneNumberButton = true">
                    <img :src="minus" class="w-full" alt="" />
                  </span>
                </div>
              </div>
              <!-- fax -->
              <div class="flex md:flex-nowrap flex-wrap md:gap-4 items-center">
                <span class="w-[50%]">Fax</span>
                <input v-model="form.fax" type="fax" id="fax"
                  class=" text-gray-900 font-light text-sm rounded-full w-full p-2 my-2  "
                  placeholder="+2125 280 999 889">
              </div>
              <!-- address -->
              <div class="flex md:flex-nowrap flex-wrap md:gap-4 items-center">
                <span class="w-[50%]">Address</span>
                <div class="flex justify-between w-full items-center">
                  <div v-for="(a, index) in form.address" :key="index" class="flex-wrap w-full">
                    <input v-model="a.adress" :name="'a-' + index" type="address" id="address"
                      class=" bg-white rounded-full text-gray-900 font-light text-sm w-4/5 p-2 my-2 "
                      placeholder="Address ">
                  </div>
                  <span v-if="showAddressrButton" class="w-8 bg-white rounded-full p-1" @click="addAddress()">
                    <img :src="plus" class="w-full " alt="" />
                  </span>
                  <span v-else class="w-8 bg-white rounded-full p-1"
                    @click="removeAddress()(form.address.length - 1); showAddAddressButton = true">
                    <img :src="minus" class="w-full" alt="" />
                  </span>
                </div>
              </div>
              <!-- city -->
              <div class="flex md:flex-nowrap flex-wrap md:gap-4 items-center">
                <span class="w-[50%]">City</span>
                <input v-model="form.city" type="city" id="city"
                  class=" text-gray-900 font-light text-sm rounded-full w-full p-2 my-2 " placeholder="City">
              </div>
              <!-- state -->
              <div class="flex md:flex-nowrap flex-wrap md:gap-4 items-center">
                <span class="w-[50%]">State/Province</span>
                <input v-model="form.state" type="state" id="state"
                  class=" text-gray-900 font-light text-sm bg-white rounded-full w-full p-2 my-2 "
                  placeholder="State/Province">
              </div>
              <!-- Country -->
              <div class="flex md:flex-nowrap flex-wrap md:gap-4 items-center">
                <span class="w-[50%]">Country</span>
                <input v-model="form.country" type="country" id="country"
                  class=" text-gray-900 font-light text-sm rounded-full w-full p-2 my-2 " placeholder=" Country">
              </div>
              <!-- code postal -->
              <div class="flex md:flex-nowrap flex-wrap md:gap-4 items-center whitespace-nowrap">
                <span class="w-[50%]">Postal Code</span>
                <input v-model="form.code" type="code" id="code"
                  class=" text-gray-900 font-light text-sm rounded-full w-full p-2 my-2 " placeholder="Code">
              </div>
              <!-- card -->
              <div class="flex md:flex-nowrap flex-wrap md:gap-4 items-center whitespace-nowrap ">
                <span class="w-[50%]">Card Details</span>
                <input v-model="form.details" type="details" id="details"
                  class=" font-light text-sm rounded-full w-full p-2 my-2 bg-[#235a61] placeholder-white focus:placeholder-gray-400 focus:bg-white cursor-pointer"
                  placeholder="Add Card Details">
              </div>
              <!-- Passport -->
              <div class="flex md:flex-nowrap flex-wrap md:gap-4 items-center whitespace-nowrap">
                <span class="w-[50%]">Passport/Id No°</span>
                <input v-model="form.passport" type="passport" id="passport"
                  class=" text-gray-900 font-light text-sm rounded-full w-full p-2 my-2 " placeholder="Passport/Id No°">
              </div>
              <!-- driver -->
              <div class="flex md:flex-nowrap flex-wrap md:gap-4 items-center whitespace-nowrap">
                <span class="w-[50%]">Driver's License</span>
                <input v-model="form.driver" type="driver" id="driver"
                  class=" text-gray-900 font-light text-sm rounded-full w-full p-2 my-2 " placeholder="Driver's License">
              </div>
              <!-- new customer -->
              <div class="flex md:flex-nowrap flex-wrap md:gap-4 items-center whitespace-nowrap">
                <span class="w-[50%]">New Customer Field</span>
                <input v-model="form.newcustomer" type="customer" id="customer"
                  class=" text-gray-900 font-light text-sm rounded-full w-full p-2 my-2 "
                  placeholder="New Customer Field">
              </div>
              <!-- notes -->
              <div class="flex md:flex-nowrap flex-wrap md:gap-4 items-center md:items-start">
                <span class="w-[50%] md:pt-6">Notes</span>
                <textarea v-model="form.notes" type="notes" id="notes"
                  class=" text-gray-900 font-light text-sm rounded-xl w-full p-2 my-2 h-24" placeholder="Notes">
                      </textarea>
              </div>
              <!-- button -->
              <div class="flex justify-between md:justify-end gap-8 my-4">
                <button class="bg-[#235a61] text-white font-bold py-2 px-16 rounded-full" type="submit">Create</button>
                <button class="bg-white text-black font-bold py-2 px-6 rounded-full "
                  @click="showModal = false">Close</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- table -->
    <div class="table__scroll rounded-xl overflow-auto w-full h-auto text-base">
      <table class="text-left bg-white w-full rounded-xl overflow-auto  pt-1 ">
        <thead class="font-sans font-bold px-2">
          <tr class="text-sm whitespace-nowrap capitalize border-b border-black mb-4">
            <th scope="col" class=" px-6 py-3 ">
              ID
            </th>
            <th scope="col" class="px-6 py-3 ">
              name
            </th>
            <th scope="col" class="px-6 py-3 ">
              phone
            </th>
            <th scope="col" class="px-6 py-3 ">
              status
            </th>
            <th scope="col" class="px-6 py-3 text-[#235A61]">
              last check-out
            </th>
            <th scope="col" class="px-6 py-3 text-[#235A61]">
              charge total
            </th>
            <th scope="col" class="px-6 py-3 text-[#235A61]">
              payment total
            </th>
            <th scope="col" class="px-6 py-3 text-[#235A61]">
              balance
            </th>
          </tr>
        </thead>
        <tbody class="px-2 capitalize">
          <tr v-for="item in displayedItems " :key="item"
            class="bg-white border-b border-black whitespace-nowrap text-sm">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
              {{ item.id }}
            </th>
            <td class="px-6 py-4 text-[#235A61] font-semibold ">
              {{ item.name }}
            </td>
            <td class="px-6 py-4 ">
              {{ item.phone }}
            </td>
            <td class="px-6 py-4">
              {{ item.status }}
            </td>
            <td class="px-6 py-4">
              {{ item.lastCheck }}
            </td>
            <td class="px-6 py-4">
              {{ item.charge }}
            </td>
            <td class="px-6 py-4">
              {{ item.total }}
            </td>
            <td class="flex items-center px-6 py-4">
              {{ item.balance }}
              <span class="rounded-full w-6 ml-16 bg-[#F4F4F4]">
                <img :src="dropdown" class="w-full" alt=""></span>
            </td>
          </tr>
        </tbody>
        <tfoot class="text-sm bg-[#e7e7e7] ">
          <tr class="">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="text-start font-bold px-6 py-4">
              Total:
            </td>
            <td class="px-6 py-2 ">
              234567890
            </td>
            <td class="px-6 py-2">
              876542354
            </td>
            <td class="px-6 py-2">
              -1234567.89
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- pagination -->
    <div class="flex flex-wrap-reverse md:flex-nowrap md:justify-between justify-center items-center my-4">
      <h1 class="rounded-full bg-white py-2 px-4 mb-2 text-[#235A61] font-sans font-bold text-base cursor-pointer"
        @click="download">
        Donwload CSV Export
      </h1>
      <accounting-pagination :items="tableData" :per-page="perPage" @page-changed="currentPage = $event" class="mb-2 " />
    </div>
  </div>
</template>
<script>
import Papa from 'papaparse'
export default {
  data() {
    return {
      title: 'Accounting',
      selected: '',
      options: ['Cancelled', 'Vip', 'Blacklist'],
      sell: 'Selling Date',
      result: 'Display Results',
      results: [7, 14, 21],
      trash: require('../../static/icons/trash.svg'),
      search: require('../../static/icons/search.svg'),
      plus: require('../../static/icons/plus.svg'),
      minus: require('../../static/icons/minus.svg'),
      showModal: false,
      form: {
        name: '',
        customertype: '',
        email: '',
        phoneNumbers: [{ number: '' }],
        fax: '',
        address: [{ adress: '' }],
        city: '',
        state: '',
        country: '',
        code: '',
        card: '',
        passport: '',
        driver: '',
        newcustomer: '',
        notes: ''
      },
      showAddPhoneNumberButton: true,
      showAddAddressButton: true,
      tableData: [{
        id: '325634',
        name: 'Peter',
        phone: '+212 600 000 000',
        status: 'Cancelled',
        lastCheck: '2023-03-01',
        charge: '268.80',
        total: '0.00',
        balance: '268.80'
      },
      {
        id: '325634',
        name: 'Smith',
        phone: '+212 600 000 000',
        status: 'Blacklist',
        lastCheck: '2023-03-01',
        charge: '268.80',
        total: '0.00',
        balance: '268.80'
      },
      {
        id: '325634',
        name: 'Rami',
        phone: '+212 600 000 000',
        status: 'Cancelled',
        lastCheck: '2023-03-01',
        charge: '268.80',
        total: '0.00',
        balance: '268.80'
      },
      {
        id: '325634',
        name: 'Sam',
        phone: '+212 600 000 000',
        status: 'Cancelled',
        lastCheck: '2023-03-01',
        charge: '268.80',
        total: '0.00',
        balance: '268.80'
      },
      {
        id: '325634',
        name: 'laila',
        phone: '+212 600 000 000',
        status: 'vip',
        lastCheck: '2023-03-01',
        charge: '268.80',
        total: '0.00',
        balance: '268.80'
      },
      {
        id: '325634',
        name: 'Sophia',
        phone: '+212 600 000 000',
        status: 'Cancelled',
        lastCheck: '2023-03-01',
        charge: '268.80',
        total: '0.00',
        balance: '268.80'
      },
      {
        id: '325634',
        name: 'Adam',
        phone: '+212 600 000 000',
        status: 'Cancelled',
        lastCheck: '2023-03-01',
        charge: '268.80',
        total: '0.00',
        balance: '268.80'
      },
      {
        id: '325634',
        name: 'James',
        phone: '+212 600 000 000',
        status: 'Blacklist',
        lastCheck: '2023-03-01',
        charge: '268.80',
        total: '0.00',
        balance: '268.80'
      },
      {
        id: '325634',
        name: 'Jose',
        phone: '+212 600 000 000',
        status: 'Cancelled',
        lastCheck: '2023-03-01',
        charge: '268.80',
        total: '0.00',
        balance: '268.80'
      },
      {
        id: '325634',
        name: 'Marta',
        phone: '+212 600 000 000',
        status: 'Cancelled',
        lastCheck: '2023-03-01',
        charge: '268.80',
        total: '0.00',
        balance: '268.80'
      },
      {
        id: '325634',
        name: 'Jhon',
        phone: '+212 600 000 000',
        status: 'Cancelled',
        lastCheck: '2023-03-01',
        charge: '268.80',
        total: '0.00',
        balance: '268.80'
      },
      {
        id: '325634',
        name: 'Davis',
        phone: '+212 600 000 000',
        status: 'vip',
        lastCheck: '2023-03-01',
        charge: '268.80',
        total: '0.00',
        balance: '268.80'
      },
      {
        id: '325634',
        name: 'Peter',
        phone: '+212 600 000 000',
        status: 'Cancelled',
        lastCheck: '2023-03-01',
        charge: '268.80',
        total: '0.00',
        balance: '268.80'
      },
      {
        id: '325634',
        name: 'Kimberly',
        phone: '+212 600 000 000',
        status: 'Cancelled',
        lastCheck: '2023-03-01',
        charge: '268.80',
        total: '0.00',
        balance: '268.80'
      },
      {
        id: '325634',
        name: 'Adam',
        phone: '+212 600 000 000',
        status: 'Cancelled',
        lastCheck: '2023-03-01',
        charge: '268.80',
        total: '0.00',
        balance: '268.80'
      },
      {
        id: '325634',
        name: 'James',
        phone: '+212 600 000 000',
        status: 'Cancelled',
        lastCheck: '2023-03-01',
        charge: '268.80',
        total: '0.00',
        balance: '268.80'
      },
      {
        id: '325634',
        name: 'Jose',
        phone: '+212 600 000 000',
        status: 'Cancelled',
        lastCheck: '2023-03-01',
        charge: '268.80',
        total: '0.00',
        balance: '268.80'
      },
      {
        id: '325634',
        name: 'Isabel',
        phone: '+212 600 000 000',
        status: 'Cancelled',
        lastCheck: '2023-03-01',
        charge: '268.80',
        total: '0.00',
        balance: '268.80'
      },
      {
        id: '325634',
        name: 'Peter',
        phone: '+212 600 000 000',
        status: 'vip',
        lastCheck: '2023-03-01',
        charge: '268.80',
        total: '0.00',
        balance: '268.80'
      }
      ],
      filtered: '',
      dateFilter: '',
      left: require('../../static/icons/chevron-left.svg'),
      right: require('../../static/icons/chevron-right.svg'),
      dropdown: require('../../static/icons/dropdown.svg'),
      perPage: 7,
      currentPage: 1,
      tableKeys: [
        'name',
        'phone',
        'status',
        'lastCheck'
      ]
    }
  },
  methods: {
    postData(e) {
      console.warn(this.form)
      e.preventDefault()
    },
    addPhoneNumber() {
      this.form.phoneNumbers.push({ number: '' })
      this.showAddPhoneNumberButton = false
    },
    removePhoneNumber(index) {
      if (this.form.phoneNumbers.length > 1) {
        this.form.phoneNumbers.splice(index, 1)
      }
    },
    addAddress() {
      this.form.address.push({ adress: '' })
      this.showAddAddressButton = false
    },
    removeAddress(index) {
      if (this.form.address.length > 1) {
        this.form.address.splice(index, 1)
      }
    },
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems
    },
    download() {
      const filename = 'costumer.csv'
      const text = Papa.unparse(this.tableData)
      const element = document.createElement('a')
      element.setAttribute('href', 'data:text/csvcharset=utf-8,' + encodeURIComponent(text))
      element.setAttribute('download', filename)
      element.style.display = 'none'
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
    }
  },
  computed: {
    filteredSearch() {
      return this.tableData.filter((item) => {
        return this.tableKeys.some(k => item[k].toLowerCase().match(this.filtered.toLowerCase() || this.selected.toLowerCase() || this.dateFilter.toLowerCase()))
      })
    },
    displayedItems() {
      const start = (this.currentPage - 1) * this.perPage
      const end = start + this.perPage
      return this.filteredSearch.slice(start, end)
    }
  }
}
</script>
<style>
.table__scroll::-webkit-scrollbar {
  display: none;
}
</style>
