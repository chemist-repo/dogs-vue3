<template>
  <button
    @click="$emit('click', $event)"
    class="ui-button"
  >
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: 'UiButton'
}
</script>
