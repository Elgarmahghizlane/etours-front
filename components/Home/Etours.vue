<template>
  <div class=" md:pb-[14rem] pb-[3.5rem] bg-white">
    <div class="lg:pl-28 md:pl-24 text-center md:text-left">
      <span class="font-bold text-base text-[#235a61]">WHY US!</span>
      <h1 class="font-bold font-sans lg:text-4xl md:text-3xl text-xl ">Why choose e-Tours ?</h1>
    </div>
    <div class="flex justify-around flex-col md:flex-row mt-4 md:mt-12 mx-4 md:mx-[7rem] gap-10 md:gap-8">
      <div v-for='( advantage, index) in advantages' :key="index" class="text-center">
        <img class="mx-auto w-28 md:w-32" :src="advantage.icons" alt="" />
        <h1 class="font-bold mt-1 mb-4 text-xl font-sans">{{advantage.title}}</h1>
        <p class="text-lg">
          {{ advantage.paragraph }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import plus from '../../static/img/plus.png'
import time from '../../static/img/time.png'
import share from '../../static/img/share.png'
export default {
  name: 'EtoursBanner',
  data () {
    return {
      advantages: [
        { icons: plus, title: 'Get more bookings', paragraph: 'Sell on as many channels as you want, reaching customers from all  around the world to book their tours and activities with you.' },
        { icons: time, title: 'Save time', paragraph: 'Increase your efficiency and manage your business operations all in one place so you can save time and delight your customers.' },
        { icons: share, title: 'Grow your business', paragraph: 'Explore opportunities for you to grow your distribution, increase your productivity, and build new revenue streams for your business.' }
      ]
    }
  }
}
</script>
