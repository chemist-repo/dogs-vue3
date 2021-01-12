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
import { mapMutations } from 'vuex'
import PartialCard from './Card.vue'

import ls from '@/helpers/ls'

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
  methods: {
    ...mapMutations([
      'SET_FAVORITES'
    ]),
    setFavorite (url: string) {
      const favorites = ls.get('favorites') || []
      let $favorites = []

      if (favorites.includes(url)) {
        $favorites = favorites.filter((favorite: string) => favorite !== url)
      } else {
        $favorites = [...favorites, url]
      }

      this.SET_FAVORITES($favorites)
      ls.set('favorites', $favorites)
    }
  }
})
</script>
