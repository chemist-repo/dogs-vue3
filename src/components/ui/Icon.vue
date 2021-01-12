<template>
  <svg :class="className" xmlns="http://www.w3.org/2000/svg">
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink"/>
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

interface IPropsUiIcon {
  name: string,
  title: string
}

export default defineComponent({
  name: 'UiIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  setup (props: IPropsUiIcon) {
    const className = computed(() => `ui-icon ui-icon--${props.name}`)
    const iconPath = computed(() => {
      let icon = require(`@/assets/icons/${props.name}.svg`)
      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default
      }

      return icon.url
    })

    return {
      ...props,
      className,
      iconPath
    }
  }
})
</script>
