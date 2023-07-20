<template>
  <div class="pt-[2rem] md:pt-[5rem] bg-[#F4F4F4] overflow-hidden" style="border-radius: 100% / 10%">
  <!-- first part -->
    <div class="flex flex-col md:flex-row justify-between md:mx-24 md:gap-2 gap-8 items-center">
      <div class="text-center md:text-left">
        <h1 class="font-bold text-base uppercase text-[#235a61]">Major Channels</h1>
        <h1 class="font-bold font-sans lg:text-4xl md:text-3xl text-xl">
          We connect <br>with the best
        </h1>
      </div>
      <div class="lg:w-[400px] md:w-[140px] w-[300px]">
      <div class=" flex flex-wrap justify-center items-center">
        <div v-for="(collaborator, index) in collaborators" :key="index" class="md:w-[100px] w-[90px] pt-2">
          <img :src="collaborator.url" class="w-full object-cover" alt="" />
        </div>
      </div>
    </div>
    <div class="bg-[#235a61] rounded-full text-white text-center inline-block align-middle w-32 lg:w-40 py-1">
      See more
    </div>
  </div>
  <!-- second part -->
  <div class="pt-[3rem] md:pt-[5rem] md:ml-24 flex flex-col ">
    <h1 class="font-bold text-base text-[#235a61] text-center md:text-left"> WHAT YOU'LL GET!</h1>
    <h1 class="font-bold font-sans lg:text-4xl md:text-3xl text-xl text-center md:text-left">
      e-Tour booking software <br />to run your business
    </h1>
  </div>
  <div class="flex flex-col-reverse md:flex-row-reverse mt-2">
    <div class="flex flex-col pl-4 lg:pt-[3rem] pt-[1rem] pb-[3rem] md:pb-4 whitespace-nowrap ">
      <div v-for=" menu in menus" :key="menu" :class="{
        'bg-white': menu.isOpen,
        'rounded-lg': menu.isOpen
      }">
        <div
          class="flex justify-between items-start text-start font-sans text-black lg:text-2xl md:text-xl text-sm py-2 cursor-pointer " @click="menu.isOpen = !menu.isOpen">
          <div>
            <div class="flex font-semibold px-4 pt-2" >
              <img :src="menu.icon" class="w-10 pr-4" alt="">
              <h1>
                {{ menu.title }}
              </h1>
            </div>
            <p v-if="menu.isOpen" class="font-light text-xs ml-6 mt-2">
              {{ menu.description }} <br>
              <a href="#" class="text-[#235a61] font-extrabold">{{ menu.button }}</a>
            </p>
          </div>
          <img :src="dropdown" @click="toggleShowParagraph" class="w-10 pr-2 cursor-pointer">
        </div>
      </div>
    </div>
    <div class="md:w-3/5 w-full">
      <img :src="checkImg" alt="" />
    </div>
  </div>
  </div>
</template>
<script>
import logo01 from '../../static/img/logo/logo01.png'
import logo02 from '../../static/img/logo/logo02.png'
import logo03 from '../../static/img/logo/logo03.png'
import logo04 from '../../static/img/logo/logo04.png'
import logo05 from '../../static/img/logo/logo05.png'
import logo06 from '../../static/img/logo/logo06.png'
import logo07 from '../../static/img/logo/logo07.png'
import checkout from '../../static/img/checkout.png'
export default {
  name: 'MajorChannels',
  data() {
    return {
      menus: [
        { isOpen: false, id: 0, icon: require('../../static/icons/website.svg'), title: 'Website Builder', description: 'Accept payments securely ', button: 'Learn more' },
        { isOpen: false, id: 1, icon: require('../../static/icons/sales.svg'), title: 'Sales Reports', description: 'Accept payments securely ', button: 'Learn more' },
        { isOpen: false, id: 2, icon: require('../../static/icons/payment.svg'), title: 'Payments', description: 'Accept payments securely ', button: 'Learn more' },
        { isOpen: false, id: 3, icon: require('../../static/icons/pos.svg'), title: 'POS', description: 'Accept payments securely in multiple currencies using cash', button: 'Learn more' },
        { isOpen: false, id: 4, icon: require('../../static/icons/distributions.svg'), title: 'Distributions', description: 'Accept payments securely ', button: 'Learn more' },
        { isOpen: false, id: 5, icon: require('../../static/icons/integrations.svg'), title: 'Integrations', description: 'Accept payments securely ', button: 'Learn more' }
      ],
      dropdown: require('../../static/icons/dropdown.svg'),
      upArrow: require('../../static/icons/uparrow.svg'),
      collaborators: [
        { url: logo01 },
        { url: logo02 },
        { url: logo03 },
        { url: logo04 },
        { url: logo05 },
        { url: logo06 },
        { url: logo07 }
      ],
      checkImg: checkout
      // icons: []
    }
  },
  methods: {
    toggleShowParagraph(id) {
      console.log(id)
      this.showParagraph = !this.showParagraph
    }
  }
}
</script>
<style scoped>
@media (min-width: 640px) {
  button {
    width: 10rem;
  }
}

@media (min-width: 768px) {
  button {
    width: 10rem;
  }
}

@media (min-width: 1024px) {
  button {
    width: 12rem;
  }
}
</style>
