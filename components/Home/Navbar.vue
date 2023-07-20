<template>
  <div class="max-w-6xl mx-auto rounded-full bg-white">
    <div class="flex justify-between mx-4 font-bold h-14">
      <!-- <button
        class="bg-[#235a61] rounded-full flex items-center justify-center my-2 text-white text-center w-[100px] md:w-40 "
      ></button> -->
      <div class="md:w-24 md:h-16 py-2">
          <img :src="logo" alt="" class="w-full h-full">
      </div>
      <div class="md:flex flex-nowrap items-center mx-auto hidden ">
        <span class="lg:text-sm md:text-xs sm:text-xs ">
          <a
            v-for="item in menuItems"
            :key="item.id"
            class="inline-block py-1 px-2"
            href="#"
            >{{ item.page }}</a
          >
        </span>
      </div>
      <button
        class="bg-[#235a61] rounded-full md:flex items-center justify-center my-2 text-white text-center w-40 hidden "
      >
        {{ button }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      menuItems: [
        { id: 1, page: 'Features', url: '#' },
        { id: 2, page: 'Pricing', url: '#' },
        { id: 3, page: 'Partners', url: '#' },
        { id: 4, page: 'Blog', url: '#' },
        { id: 5, page: 'Contact', url: '#' }
      ],
      button: 'Book a Demo',
      logo: require('../../static/icons/logo.svg')
    }
  }
}
</script>
