<template>
  <PartialList
    @scroll="scroll"
    :images="breedDogsList"
    :favorites="favorites"
  />
</template>

<script>
import PartialList from '@/components/partials/List.vue'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'view-breed',
  components: {
    PartialList
  },
  watch: {
    async '$route.params.breed' (breed) {
      await this.getBreedRandomDogsList(breed)
    }
  },
  computed: {
    ...mapState([
      'breedDogsList',
      'favorites',
      'isBreedDogsAction'
    ])
  },
  methods: {
    ...mapActions([
      'getBreedRandomDogsList',
      'getMoreBreedRandomDogsList'
    ]),
    async scroll () {
      const offsetRatioForEvent = 0.95
      const currentScrollTop = (window.scrollY || document.documentElement.scrollTop) + window.innerHeight
      const startHeightForEvent = document.documentElement.offsetHeight * offsetRatioForEvent

      if (currentScrollTop >= startHeightForEvent && !this.isBreedDogsAction) {
        await this.getMoreBreedRandomDogsList(this.$route.params.breed)
      }
    }
  },
  async mounted () {
    await this.getBreedRandomDogsList(this.$route.params.breed)
  }
}
</script>
