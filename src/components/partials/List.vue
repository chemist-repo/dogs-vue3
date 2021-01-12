<template>
  <div
    v-scroll="{
      handler: e => { $emit('scroll', e) }
    }"
    class="container-fluid py-3"
  >
    <UiGallery>
      <PartialCard
        v-for="(src, i) in images"
        @clickCard="setFavorite"
        :key="`dog-${i}`"
        :src="src"
        :active="favorites.includes(src)"
      />
    </UiGallery>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PartialCard from './Card.vue'
import { setFavorite } from '@/helpers/favorites'

export default defineComponent({
  name: 'PartialList',
  components: {
    PartialCard
  },
  props: {
    images: {
      type: Array,
      default: () => []
    },
    favorites: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    return {
      setFavorite
    }
  }
})
</script>
