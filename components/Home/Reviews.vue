<template>
  <div class=" " >
    <div class="pt-[3rem] md:pt-[5rem] md:ml-24 flex flex-col">
        <h1 class="font-bold text-base uppercase text-[#235a61] text-center md:text-left">USER REVIEWS!</h1>
        <h1 class="font-bold font-sans lg:text-4xl md:text-3xl text-xl text-center md:text-left">Discover the experiences of our <br>customers and their successes.</h1>
    </div>
    <div class="relative overflow-hidden max-w-6xl md:mx-32 mx-4">
        <div :class="showMore ? 'h-full mb-12':'h-64'"
              class="grid grid-cols-3  gap-2 w-[100%] overflow-hidden mt-12 "
              >
          <div  v-for="review in reviews"
                :key="review.id"
                class=" rounded-[33px] h-fit bg-[#F4F4F4] p-6 grid-cols-3">
            <div class="flex flex-nowrap ">
              <div class="w-12 h-12">
                <img class="w-full" :src="profileImg"  alt="">
              </div>
              <div class="lg:mx-4 md:mx-2 sm:mx-2">
                <h4 class="font-bold lg:text-sm md:text-sm sm:text-xs">{{ review.name }}</h4>
                <span class="inline-flex">
                  <img v-for="index in 4" :key="index" class="w-4" :src="starActive" alt="">
                  <img class="w-4" :src="starNoactive" alt="">
              </span>
              </div>
            </div>
            <p class="font-sans font-medium lg:text-sm md:text-sm sm:text-xs m-2">{{ review.comment }} </p>
          </div>
      </div>
      <div class=" absolute text-center bottom-0 p-6  mx-auto left-0 bg-gradient-to-r  from-white/50 to-white/70  w-full ">
      <button @click="toggleShowMore" class="bg-[#235a61] w-[12rem] rounded-full text-white text-center mx-auto h-8">
          See more
      </button>
    </div>
    </div>
  </div>
</template>
<script>
import profile from '../../static/img/profile.png'
export default {
  name: 'VisitorReviews',
  data () {
    return {
      showMore: false,
      reviews: [
        { id: 1, name: 'Bitterroot River Ranch', comment: 'Lorem ipsum dolor sit!' },
        { id: 2, name: 'Bitterroot River Ranch', comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quam culpa eaque ratione consequuntur!' },
        { id: 3, name: 'Bitterroot River Ranch', comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ' },
        { id: 4, name: 'Bitterroot River Ranch', comment: 'Lorem ipsum dolor sit!Consectetur quam culpa eaque ratione consequuntur' },
        { id: 5, name: 'Bitterroot River Ranch', comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ' },
        { id: 6, name: 'Bitterroot River Ranch', comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. !' }
      ],
      profileImg: profile,
      starActive: require('../../static/icons/star-active.svg'),
      starNoactive: require('../../static/icons/star-noactive.svg')
    }
  },
  methods: {
    toggleShowMore () {
      this.showMore = !this.showMore
    }
  }
}
</script>
