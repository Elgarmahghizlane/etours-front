<template>
  <div class="flex mx-auto overflow-x-hidden ">
    <div class="w-full relative overflow-y-hidden">
      <img :src="bannerMobile" alt="" class="w-full h-full object-cover">
      <div class="absolute inset-0 flex flex-col w-1/2 mx-4 md:mx-8 md:px-8 md:gap-3 md:mt-20 lg:mt-24 h-full">
        <h1 class="font-bold font-sans lg:text-5xl md:text-3xl text-xl">{{ title }}</h1>
        <p class="text-sm md:text-lg lg:text-2xl lg:my-4 md:my-1 my-1">{{ text }}</p>
        <div
          class="bg-[#235a61] rounded-full flex justify-center items-center lg:py-4 text-white text-center lg:text-lg w-40 h-8">
          Book a Demo
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FirstBanner',
  data() {
    return {
      bannerMobile: require('../../static/img/bannerMobile.png'),
      title: 'Increase your bookings with our PMS',
      text: 'The all-in-one platform built to help your tour & activity business stay organized and get more bookings online.'
    }
  }
}
</script>
