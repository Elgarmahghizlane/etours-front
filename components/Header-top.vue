<template>
  <div class="relative md:bg-[#F4F4F4] bg-white ">
    <!-- desktop & tablet -->
    <div class="px-3">
      <div class="w-full flex md:gap-24 gap-20 justify-between items-center h-[90px] ">
        <!-- logo -->
        <div class="md:w-24 w-16 shrink-0 ">
          <img :src="logo" alt="" class="w-full">
        </div>
        <!-- right menu -->
        <div class="flex bg justify-between items-center md:w-full">
          <!-- title -->
          <h1 class="hidden md:block text-[#235a61] font-bold font-sans capitalize ">
            {{ $nuxt.$route.path.split('/', 3)[1] !== "bedrooms" ? $nuxt.$route.path.split('/', 3)[2] : $nuxt.$route.name
            }}
          </h1>
          <!-- right items -->
          <div class="flex gap-4  ">
            <!-- my appli -->
            <div class="flex items-center cursor-pointer relative" @click="applisDropdown = !applisDropdown">
              <div class="rounded-full bg-[#D6EDE6] w-10 p-2">
                <img :src="application" class="w-full" alt="">
              </div>
              <h1 class="hidden md:block ml-2 font-semibold font-sans">{{ applis }}</h1>
              <div class="hidden md:block  ml-1 w-8">
                <img :src="dropdown" class="w-full " alt="">
              </div>
              <div v-if="applisDropdown"
                class="absolute right-0 top-[2.1rem] z-50 mt-2 md:w-full w-32 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 ">
                <nuxt-link :to="i.url" v-for="(i, e) in interfaces" :key="e"
                  class="flex flex-col justify-center items-center py-1 text-sm text-gray-400 hover:bg-[#D6EDE6] hover:text-[#7E9D9F] hover:rounded-md w-full text-center"
                  :class="{ 'bg-[#D6EDE6] text-[#235a61] rounded-md ': $route.path === i.url }">
                  {{ i.name }}
                </nuxt-link>
              </div>
            </div>
            <!-- notification -->
            <div class="w-10 p-2 rounded-full bg-[#D6EDE6] cursor-pointer">
              <img :src="notification" class="w-full " alt="">
            </div>
            <!-- profile -->
            <div class="flex items-center rounded-full md:bg-[#235a61] w-max cursor-pointer">
              <!-- mobile -->
              <div class="w-8 m-1 block md:hidden" @click="isMenuOpen = !isMenuOpen">
                <img :src="profile" class="w-full" alt="">
              </div>
              <!-- md -->
              <div class="w-8 m-1 hidden md:block " >
                <img :src="profile" class="w-full" alt="">
              </div>
              <h1 class="hidden md:block  text-base font-bold text-white ml-2 relative" @click="profileDropdown = !profileDropdown" >
                {{ name }}
              </h1>
              <div class="w-8 hidden md:block  ">
                <img :src="dropwhite" class="w-full" alt="">
              </div>
              <div v-if="profileDropdown"
                class="absolute right-0 z-50 top-[3.7rem] mt-2 mr-4 w-36 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5" >
                <div
                  class="flex flex-col justify-center items-center  "
                  >
                  <span class="py-1 text-sm text-gray-400 hover:bg-[#D6EDE6] hover:text-[#7E9D9F] hover:rounded-md w-full text-center">Settings</span>
                  <span class="py-1 text-sm text-gray-400 hover:bg-[#D6EDE6] hover:text-[#7E9D9F] hover:rounded-md text-center w-full">Logout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute w-full left-0 z-50">
      <template v-if="showHotelMenu">
        <Sidemenu class="md:hidden" :isOpen="isMenuOpen" @close="isMenuOpen = false" />
      </template>
      <template v-else>
        <ExperienceSideMenu class="md:hidden" :open="isMenuOpen" @close="isMenuOpen = false" />
      </template>
    </div>
  </div>
</template>
<script>
import Sidemenu from './Sidemenu.vue'
import ExperienceSideMenu from './ExperienceSideMenu.vue'
export default {
  components: { Sidemenu, ExperienceSideMenu },
  props: {
    showHotelMenu: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      title: 'My properties',
      name: 'karim',
      applis: 'My Applis',
      logo: require('../static/icons/logo.svg'),
      application: require('../static/icons/application.svg'),
      notification: require('../static/icons/notification.svg'),
      dropdown: require('../static/icons/dropdown.svg'),
      dropwhite: require('../static/icons/dropdown-white.svg'),
      profile: require('../static/img/profile.png'),
      close: require('../static/icons/close.svg'),
      menu: false,
      interfaces: [
        {
          name: 'Hotel',
          url: '/properties/properties',

        },
        {
          name: 'Experience',
          url: '/experience/experience',

        },
      ],
      applisDropdown: false,
      isMenuOpen: false,
      profileDropdown:false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      console.log('hey')
    }
  }
}
</script>
