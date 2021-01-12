<template>
  <div class="__app__">
    <PartialHeader />
    <RouterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PartialHeader from '@/components/partials/Header.vue'

export default defineComponent({
  name: 'app',
  components: {
    PartialHeader
  }
})
</script>
