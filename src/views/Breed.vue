<template>
  <PartialList
    @scroll="scroll"
    :images="breedDogsList"
    :favorites="favorites"
  />
</template>

<script lang="ts">
import { computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import PartialList from '@/components/partials/List.vue'

export default {
  name: 'view-breed',
  components: {
    PartialList
  },
  setup () {
    const route = useRoute()
    const store = useStore()

    const breedDogsList = computed(() => store.state.breedDogsList)
    const favorites = computed(() => store.state.favorites)
    const isBreedDogsAction = store.state.isBreedDogsAction

    const scroll = async () => {
      const offsetRatioForEvent = 0.95
      const currentScrollTop = (window.scrollY || document.documentElement.scrollTop) + window.innerHeight
      const startHeightForEvent = document.documentElement.offsetHeight * offsetRatioForEvent

      if (currentScrollTop >= startHeightForEvent && !isBreedDogsAction) {
        await store.dispatch('getMoreBreedRandomDogsList')
      }
    }

    watch(
      () => route.params.breed,
      async (breed) => store.dispatch('getBreedRandomDogsList', breed)
    )
    onMounted(() => store.dispatch('getBreedRandomDogsList', route.params.breed))

    return {
      breedDogsList,
      favorites,
      scroll
    }
  }
}
</script>
