<template>
  <div class="__app__">
    <PartialHeader />
    <RouterView />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { getFavorites } from '@/helpers/favorites'
import PartialHeader from '@/components/partials/Header.vue'

export default defineComponent({
  name: 'app',
  components: {
    PartialHeader
  },
  setup () {
    onMounted(getFavorites)
    return {}
  }
})
</script>
