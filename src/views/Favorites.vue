<template>
  <PartialList
    v-if="favorites.length"
    :images="favorites"
    :favorites="favorites"
  />
  <p v-else class="pa-3 ma-0">Список избранного пуст, на <RouterLink to="/">главную</RouterLink></p>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import PartialList from '@/components/partials/List.vue'

export default {
  name: 'view-favorites',
  components: {
    PartialList
  },
  setup () {
    const store = useStore()
    const favorites = computed(() => store.state.favorites)
    return {
      favorites
    }
  }
}
</script>
