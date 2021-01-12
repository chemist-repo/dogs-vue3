import { Directive } from 'vue'

const OutsideDirective: Directive = {
  beforeMount (el, binding) {
    const bubble = binding.modifiers.bubble
    const handler = (e: Event) => {
      if (bubble || (!el.contains(e.target) && el !== e.target)) {
        binding.value(e)
      }
    }
    el.__vueClickOutside__ = handler
  
    // Debounce click
    setTimeout(() => {
      window.addEventListener('click', handler)
    }, 0)
  },
  unmounted (el) {
    window.removeEventListener('click', el.__vueClickOutside__)
    el.__vueClickOutside__ = null
  }
}


export default OutsideDirective
