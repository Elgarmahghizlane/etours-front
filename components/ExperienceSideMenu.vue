<template>
  <div class="h-[calc(100vh-90px)] " :class="open === true ? '' : 'hidden md:block'">
    <div class="sidebar w-full text-center h-full">
      <div
        class="flex flex-col h-full overflow-y-hiddenoverflow-x-hidden lg:mx-2 md:mx-2 lg:rounded-xl md:rounded-xl bg-white  lg:px-3 md:px-3">
        <!-- profile mobile -->
        <div class="flex justify-start items-center ml-4 my-2 sm:hidden cursor-pointer">
          <div class="w-10 mr-4">
            <img :src="profiledrop" class="w-full " alt="">
          </div>
          <div class="text-[#235a61] font-bold font-sans whitespace-nowrap ">
            {{ namedrop }}
          </div>
        </div>
        <div class="sm:hidden border-t border-current my-2 mx-3">
        </div>
        <div class="flex-grow space-y-2 font-semibold font-sans text-base lg:mt-2 md:mt-2 ">
          <div class="flex flex-col justify-start lg:mx-0 lg:px-0 md:mx-0 md:px-0 px-2 ">
            <div v-for="(menu, index) in menus" :key="index" @click="showDrop(menu)">
              <div @click="!menu.dropdown && closeMenu()" class="link">
                <nuxt-link :to="menu.dropdown ? '' : menu.url"
                  class="flex justify-between gap-2 items-center p-2 mx-auto text-gray-900 rounded-full hover:bg-[#D6EDE6] hover:text-[#235a61] lg:h-[2.3rem] md:h-[2.1rem] sm:h-[2.1rem]"
                  :class="{ 'bg-[#D6EDE6] text-[#235a61] ': $route.path === menu.url }">
                  <div class="flex ">
                    <img class="w-6" :src="menu.icon" alt="">
                    <span class="ml-3">{{ menu.name }}</span>
                  </div>
                  <div class="flex justify-end">
                    <img v-if="menu.dropdown" :src="dropdown" class="w-6 " alt="">
                  </div>
                </nuxt-link>
                <div
                  v-if="(menu.name === 'Experience' && isDropdownBed) || (menu.name === 'Sales tools' && isDropdownRep)"
                  class="bg-white flex flex-col justify-end items-end">
                  <div v-if="menu.dropdown" @click="closeMenu" class="dropdownList flex flex-col ">
                    <nuxt-link :to="el.url" v-for="(el, i) in menu.dropdown" :key="i"
                      class="item w-32 px-2 py-1 text-sm text-start text-gray-400 rounded-full hover:bg-[#D6EDE6] hover:text-[#7E9D9F]"
                      :class="{ 'bg-[#D6EDE6] text-[#235a61] ': $route.path === el.url }">
                      {{ el.name }}
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-t border-current mb-2 mx-3">
        </div>
        <div class="mt-auto mb-2 space-y-2 font-semibold font-sans text-base">
          <div v-for="(setting, index) in settings" :key="index" class="lg:mx-0 lg:px-0 md:mx-0 md:px-0 mx-4 px-2">
            <div href="#"
              class="flex items-center p-2 mx-auto text-gray-900 rounded-full  hover:bg-[#D6EDE6] hover:text-[#235a61] lg:w-[200px] md:w-[180px] lg:h-[2.3rem] md:h-[2.1rem] sm:h-[2.1rem] ">
              <img class="w-6 hover:fill-[#235a61]" :src=setting.icon alt="">
              <span class="ml-3">{{ setting.name }}</span>
              <img class="w-6" :src="dropdown" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['open'],
  data() {
    return {
      profiledrop: require('../static/img/profile.png'),
      namedrop: 'Karim',
      menus: [{
        name: 'Bookings',
        url: '/#', icon: require('../static/icons/properties.svg')
      },
      {
        name: 'Experience',
        url: '/#',
        icon: require('../static/icons/bedrooms.svg'),
        dropdown: [
          {
            name: 'Experiences overview',
            url: '/experience/experience'
          },
          {
            name: 'Gift Cards',
            url: '/experience/experience/#'
          },
          {
            name: 'Price catalogs',
            url: '/experience/experience/#'
          },
          {
            name: 'Price schedules',
            url: '/experience/experience/#'
          },
        ]
      },
      {
        name: 'Sales tools',
        url: '/experience/experience/#',
        icon: require('../static/icons/bedrooms.svg'),
      },
      {
        name: 'Reports',
        url: '/experience/experience/#', icon: require('../static/icons/reports.svg'),
      },
      {
        name: 'Operations',
        url: '/reservation/reservations', icon: require('../static/icons/reservations.svg')
      },
      {
        name: 'Reports',
        url: '/experience/experience/#',
        icon: require('../static/icons/hotel-links.svg')
      },
      {
        name: 'AppStore',
        url: '/experience/experience/#',
        icon: require('../static/icons/extensions.svg')
      }
      ],
      settings: [
        { name: 'Settings', url: '#', icon: require('../static/icons/settings.svg') },
        { name: 'Log Out', url: '#', icon: require('../static/icons/logout.svg') }
      ],
      nav: require('../static/img/menu.png'),
      dropdown: require('../static/icons/dropdown.svg'),
      isDropdownRep: false,
      isDropdownBed: false
    }
  },
  methods: {
    closeMenu() {
      this.$emit('close');
    },
    showDrop(menu) {
      if (menu.name === 'Experience') {
        this.isDropdownBed = !this.isDropdownBed
      } else if (menu.name === 'Sales tools') {
      }
    }
  }
}
</script>
