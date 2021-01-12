import UiButton from './Button.vue'
import UiSelect from './Select.vue'
import UiPicture from './Picture.vue'
import UiGallery from './Gallery.vue'
import UiIcon from './Icon.vue'

export default {
  install (Vue: any) {
    Vue.component('UiButton', UiButton)
    Vue.component('UiSelect', UiSelect)
    Vue.component('UiPicture', UiPicture)
    Vue.component('UiGallery', UiGallery)
    Vue.component('UiIcon', UiIcon)
  }
}
