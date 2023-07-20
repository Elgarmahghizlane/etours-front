<template>
  <GmapMap
    :center="center"
    :zoom="14"
    map-type-id="terrain"
    class="w-full h-full"
  >
    <GmapMarker
      v-for="(m, index) in markers"
      :key="index"
      :position="m.position"
      :clickable="true"
      :draggable="true"
    />
  </GmapMap>
</template>
<script>
export default {
  // name: 'GoogleMaps',
  data () {
    return {
      center: { lat: 30.40333411370686, lng: -9.528517173103008 },
      markers: [
        { position: { lat: 30.40333411370686, lng: -9.528517173103008 } }
      ]
    }
  }
}
</script>
