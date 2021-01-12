<template>
  <PartialList
    @scroll="scroll"
    :images="randomDogsList"
    :favorites="favorites"
    class="view-home"
  />
</template>

<script lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import PartialList from '@/components/partials/List.vue'

export default {
  name: 'view-home',
  components: {
    PartialList
  },
  setup () {
    const store = useStore()

    const randomDogsList = computed(() => store.state.randomDogsList)
    const favorites = computed(() => store.state.favorites)
    const isRandomDogsAction = store.state.isRandomDogsAction

    const scroll = async () => {
      const offsetRatioForEvent = 0.95
      const currentScrollTop = (window.scrollY || document.documentElement.scrollTop) + window.innerHeight
      const startHeightForEvent = document.documentElement.offsetHeight * offsetRatioForEvent

      if (currentScrollTop >= startHeightForEvent && !isRandomDogsAction) {
        await store.dispatch('getMoreRandomDogsList')
      }
    }
    onMounted(() => store.dispatch('getRandomDogsList'))

    return {
      randomDogsList,
      favorites,
      scroll
    }
  }
}
</script>
