<template>
  <div class="w-full">
    <div class="relative rounded-xl pb-2">
      <div class="absolute inset-0 bg-[url('static/img/ship.png')] bg-cover rounded-xl bg-opacity-25"></div>
      <h1
        class="bg-opacity-80 font-bold text-[30px] text-white bg-[#235a61] rounded-xl px-4 py-2 text-center relative z-5 "
        style="font-family: 'Dancing Script', cursive;">
        {{name}}
      </h1>
      <div class="px-4 py-2 m-4 bg-white rounded-xl relative z-5">
        <textarea rows="4" v-model="experience"
          class="block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:ring-0 outline-none"
          placeholder="Example: The ultimate tour..." required></textarea>
      </div>
    </div>
    <span v-if="showErrorMessage" class="text-red-500 font-bold text-xs m-1">
      ! You can't leave this field blank
    </span>
    <nuxt-link to="/experience/plan">
      <div class="float-right bg-[#235a61] border border-[#235a61]rounded-lg mt-4 px-4 py-2 uppercase text-white font-light cursor-pointer"
        style="margin-bottom: 2rem;">
        Continue
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'Name your experience',
      experience: '',
      showErrorMessage:false
    }
  },
  methods: {
    handleContinueClicked() {
      if (this.experience !== '') {
        // Emit the continueClicked event
        this.$emit('continueClicked');
      } else {
        // Show an error message or perform any other action
        this.showErrorMessage=true
        // console.log("You must fill in the experience field.");
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Jost&display=swap');
</style>
