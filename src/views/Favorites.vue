<template>
  <PartialList
    v-if="favorites.length"
    :images="favorites"
    :favorites="favorites"
  />
  <p v-else class="pa-3 ma-0">Список избранного пуст, на <RouterLink to="/">главную</RouterLink></p>
</template>

<script>
import PartialList from '@/components/partials/List'

import { mapState, mapMutations } from 'vuex'
import ls from '@/helpers/ls'

export default {
  name: 'view-favorites',
  components: {
    PartialList
  },
  computed: {
    ...mapState([
      'favorites'
    ])
  },
  methods: {
    ...mapMutations([
      'SET_FAVORITES'
    ])
  },
  mounted () {
    this.SET_FAVORITES(ls.get('favorites') || [])
  }
}
</script>
