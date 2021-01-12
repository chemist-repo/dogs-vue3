import { Directive } from 'vue'
import { isObject, isFunction } from '@/helpers/typeChecker'
import { debounce } from 'ts-debounce'

const ScrollDirective: Directive = {
  /**
   * @param {{
   *  handler: function,
   *  time: Number,
   *  option: Object
   *  isThisElementScroll: Boolean
   * }} binding.value
   * @return {void}
   */
  mounted (el, binding) {
    if (!isObject(binding.value)) {
      const warn = `[Vue-scroll:] value is not a object, but has to be`
      console.warn(warn)
    } else {
      if (!isFunction(binding.value.handler)) {
        const warn = `[Vue-scroll:] 'value.handler' params handler is not a function or undefined, but has to be`
        console.warn(warn)
      } else {
        const callback = debounce(
          binding.value.handler,
          binding.value.time || 100,
          binding.value.option || {}
        )
  
        const { isThisElementScroll } = binding.value
  
        const options = { passive: true }
  
        if (isThisElementScroll) {
          el.addEventListener('scroll', callback, options)
        } else {
          window.addEventListener('scroll', callback, options)
        }
  
        el._onScroll = {
          callback,
          options,
          isThisElementScroll
        }
  
        if (!binding.modifiers || !binding.modifiers.quiet) {
          callback()
        }
      }
    }
  },
  /**
   * @param el
   * @return {void}
  */
  unmounted (el) {
    if (!el._onScroll) return

    const { callback, options, isThisElementScroll } = el._onScroll

    if (isThisElementScroll) {
      el.removeEventListener('scroll', callback, options)
    } else {
      window.removeEventListener('scroll', callback, options)
    }

    delete el._onScroll
  }
}

export default ScrollDirective
