<template>
  <picture
    :class="[
      'ui-picture',
      `ui-picture-format--${format}`
    ]"
  >
    <img
      :src="imgPath"
      :alt="alt"
      class="ui-picture--img"
    />
  </picture>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue'
import preFetchImage from '@/helpers/preFetchImage'

const REG_EXP_EXTERNAL_LINK = new RegExp('^(?:[a-z]+:)?//', 'i')

const publicPath = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_REPO_NAME : ''
const NO_IMAGE_PATH = `${publicPath}/img/no-image.jpg`

interface IPropsUiPicture {
  src: string,
  alt: string,
  format: string
}

export default defineComponent({
  name: 'UiPicture',
  props: {
    src: {
      type: String,
      default: NO_IMAGE_PATH
    },
    alt: {
      type: String,
      default: 'no-image'
    },
    format: {
      type: String,
      default: '4x3'
    }
  },
  // TO DO remove any type
  setup (props: IPropsUiPicture, vm: any) {
    const imgPath = ref(NO_IMAGE_PATH)
    watch(
      () => props.src,
      async (path) => {
        if (REG_EXP_EXTERNAL_LINK.test(path)) {
          imgPath.value = await preFetchImage(path, NO_IMAGE_PATH)
          vm.emit('onload')
        } else {
          imgPath.value = path
        }
      }
    )
    onMounted(async () => {
      if (REG_EXP_EXTERNAL_LINK.test(props.src)) {
        imgPath.value = await preFetchImage(props.src, NO_IMAGE_PATH)
      }
    })
    return {
      ...props,
      imgPath
    }
  }
})
</script>
