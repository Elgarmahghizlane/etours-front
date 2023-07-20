<template>
  <div class="bg-[#F4F4F4] w-full h-full overflow-hidden">
    <header-top :showHotelMenu="false"/>
    <div class="w-full flex flex-col md:flex-row items-start overflow-y-auto">
      <ExperienceSideMenu />
        <div class="block md:hidden text-[#235a61] font-bold font-sans text-[1.5rem] capitalize mb-5 mx-4 py-2 bg-[#F4F4F4] ">
          {{ $nuxt.$route.path.split('/', 3)[1] !== "bedrooms" ? $nuxt.$route.path.split('/', 3)[2] : $nuxt.$route.name }}
        </div>
        <nuxt />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>
