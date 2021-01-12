<template>
  <div
    @click="$emit('clickCard', src)"
    class="card"
  >
    <UiPicture
      :src="src"
    />
    <i class="card-icon">
      <UiIcon v-if="active" name="heart-solid" />
      <UiIcon v-else name="heart" />
    </i>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PartialCard',
  props: {
    src: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    }
  }
})
</script>
