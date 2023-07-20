<template>
  <div class="w-full h-[calc(100vh-90px)] md:mr-4 lg:ml-2 lg:mr-4 px-2 md:px-0">
    <experience-Title />
  </div>
</template>
<script>
export default {
  layout: 'Experience',
  data() {
    return {
      title: 'New Experience',
      showComponentType: false,
    }
  },
}
</script>
