<template>
  <div class="rounded-lg h-[calc(100vh-90px)] md:overflow-y-scroll lg:w-full md:w-full">
    <div
      class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-[1rem] md:gap-[0.7rem] gap-4 mx-4 lg:ml-2 lg:mr-4  md:ml-2 md:mr-4 md:mb-0 mb-4">
      <div v-for="(item,i) in items" :key="i" class="flex flex-col justify-between rounded-xl p-6 bg-white h-[190px]  ">
        <img :src="item.icon" class="lg:w-10 lg:p-2 md:w-10 md:p-2 w-8 p-2 rounded-lg bg-[#D6EDE6]" alt="">
        <h1 class="my-4 font-bold font-sans text-base">{{ item.title }}</h1>
        <span href="#" class="mt-2 cursor-pointer text-[#235a61] text-sm font-bold">
          {{ item.link }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: 'Pmarchas Hotels', link: 'Open Property', icon: require('../../static/icons/properties.svg') },
        { title: 'Pmarchas Hotels', link: 'Open Property', icon: require('../../static/icons/properties.svg') },
        { title: 'Pmarchas Hotels', link: 'Open Property', icon: require('../../static/icons/properties.svg') },
        { title: 'Pmarchas Hotels', link: 'Open Property', icon: require('../../static/icons/properties.svg') },
        { title: 'Pmarchas Hotels', link: 'Open Property', icon: require('../../static/icons/properties.svg') },
        { title: 'Pmarchas Hotels', link: 'Open Property', icon: require('../../static/icons/properties.svg') },
        { title: 'Pmarchas Hotels', link: 'Open Property', icon: require('../../static/icons/properties.svg') },
        { title: 'Pmarchas Hotels', link: 'Open Property', icon: require('../../static/icons/properties.svg') },
        { title: 'Pmarchas Hotels', link: 'Open Property', icon: require('../../static/icons/properties.svg') },
        { title: 'Pmarchas Hotels', link: 'Open Property', icon: require('../../static/icons/properties.svg') },
        { title: 'Pmarchas Hotels', link: 'Open Property', icon: require('../../static/icons/properties.svg') },
        { title: 'Pmarchas Hotels', link: 'Open Property', icon: require('../../static/icons/properties.svg') },
        { title: 'Pmarchas Hotels', link: 'Open Property', icon: require('../../static/icons/properties.svg') },
        { title: 'Pmarchas Hotels', link: 'Open Property', icon: require('../../static/icons/properties.svg') },
        { title: 'Pmarchas Hotels', link: 'Open Property', icon: require('../../static/icons/properties.svg') },
        { title: 'Pmarchas Hotels', link: 'Open Property', icon: require('../../static/icons/properties.svg') },
        { title: 'Pmarchas Hotels', link: 'Open Property', icon: require('../../static/icons/properties.svg') },
        { title: 'Pmarchas Hotels', link: 'Open Property', icon: require('../../static/icons/properties.svg') },
        { title: 'Pmarchas Hotels', link: 'Open Property', icon: require('../../static/icons/properties.svg') },
        { title: 'Pmarchas Hotels', link: 'Open Property', icon: require('../../static/icons/properties.svg') }
      ],
    }
  },
  meta: {
    title: 'My properties',
  },
}
</script>
