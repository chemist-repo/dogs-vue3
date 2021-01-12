<template>
  <PartialList
    @scroll="scroll"
    :images="randomDogsList"
    :favorites="favorites"
    class="view-home"
  />
</template>

<script>
import PartialList from '@/components/partials/List.vue'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'view-home',
  components: {
    PartialList
  },
  computed: {
    ...mapState([
      'randomDogsList',
      'favorites',
      'isRandomDogsAction'
    ])
  },
  methods: {
    ...mapActions([
      'getRandomDogsList',
      'getMoreRandomDogsList'
    ]),
    async scroll () {
      const offsetRatioForEvent = 0.95
      const currentScrollTop = (window.scrollY || document.documentElement.scrollTop) + window.innerHeight
      const startHeightForEvent = document.documentElement.offsetHeight * offsetRatioForEvent

      if (currentScrollTop >= startHeightForEvent && !this.isRandomDogsAction) {
        await this.getMoreRandomDogsList()
      }
    }
  },
  async mounted () {
    await this.getRandomDogsList()
  }
}
</script>
