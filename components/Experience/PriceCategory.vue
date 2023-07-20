<template>
  <div class="w-full">
    <div class="flex flex-col gap-4 md:gap-1 md:flex-row md:justify-between items-center mb-4">
      <div class="px-4 mx-2 md:mx-0 bg-[#235a61] rounded-xl z-10 w-full md:w-[60%] ">
        <h1 class="font-bold text-[29px] mx-6 text-white text-center " style="font-family: 'Dancing Script', cursive;">
          {{ name }}
        </h1>
      </div>
      <div class="flex self-end bg-[#D6EDE6] rounded-full p-1 ">
        <img class=" w-8" :src="info" alt="">
      </div>
    </div>
    <div class="flex flex-wrap gap-4 md:gap-2 justify-around mx-2">
       <div class="category rounded-2xl shadow-md bg-white w-40 h-[177px]" v-for="(c, i) in categories " :key="i">
        <h1 class=" float-right bg-gray-400 m-2 px-4 py-1 rounded-b-lg rounded-r-lg text-xs"
          :class="{ 'bg-gray-400': c.default, 'bg-green-400': !c.default }" @click="toggleDefault(c)">
          {{ c.default ? 'Default' : 'Set as Default' }}
        </h1>
        <h1>
          <img :src="c.bg" alt="">
        </h1>
        <h1 class="bg-[#235a61] rounded-b-2xl text-white p-2 text-light text-center text-base">
          {{ c.cat }}
        </h1>
      </div>
    </div>
    <div class="flex items-center gap-4 px-4 mt-4" @click="addMoreCategory">
      <span class="rounded-xl border-2 border-[#235a61] text-[#235a61] text-[24px] font-bold px-3 py-[2px]">
        +
      </span>
      <span class="font-bold font-sans text-[19px] p-1 text-center text-[#235a61] capitalize">
        Add more pricing category
      </span>
    </div>
    <div class="flex justify-around mx-2 my-8" v-if="addMore">
      <div class="more rounded-2xl shadow-md bg-white w-40 " v-for="(m, i) in moreCategory " :key="i"  @click="addCategory(m,i)">
        <h1 class="float-right bg-gray-300 mx-1 mt-1 px-1 rounded-md text-[#235a61] font-bold">
          +
        </h1>
        <h1 class="">
          <img class="rounded-t-2xl " :src="m.bg" alt="">
        </h1>
        <h1 class="bg-[#235a61] rounded-b-2xl text-white p-2 text-light text-center text-base">
          {{ m.cat }}
        </h1>
      </div>
    </div>
    <div
      class="float-left bg-[#D6EDE6] rounded-lg border border-[#235a61] mt-4 px-4 py-2 uppercase text-[#235a61] font-light cursor-pointer"
      @click="goBack" style="margin-bottom: 2rem;">
      Back
    </div>
    <div
      class="float-right bg-[#235a61] border border-[#235a61]  rounded-lg mt-4 px-4 py-2 uppercase text-white font-light cursor-pointer"
      style="margin-bottom: 2rem;">
      <nuxt-link to="/experience/booking"> Continue</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'Pricing Category',
      right: require('../../static/icons/chevron-right-white.svg'),
      info: require('../../static/icons/info.svg'),
      categories: [
        {
          cat: 'Adult',
          default: true,
          bg: require('../../static/img/price/1.png')
        },
        {
          cat: 'Children',
          default: false,
          bg: require('../../static/img/price/2.png')
        },
      ],
      moreCategory: [
        {
          cat: 'Senior',
          bg: require('../../static/img/price/3.png')
        },
        {
          cat: 'infant',
          bg: require('../../static/img/price/4.png')
        },
      ],
      addMore: false
    }
  },
  methods: {
    toggleDefault(category) {
      this.categories.forEach(c => {
        c.default = (c === category);
      });
    },
    goBack() {
      this.$router.go(-1);
    },
    addMoreCategory() {
      this.addMore = true;
    },
    addCategory(category, index) {
      this.categories.push(category);
      this.moreCategory.splice(index, 1); 
      this.addMore = false;
    },
  }
}
</script>

<style lang="scss" scoped>
.category .more {
  flex: 1;
}</style>
