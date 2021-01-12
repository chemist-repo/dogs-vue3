<template>
  <div
    v-outside="onCLose"
    class="ui-select"
  >
    <a
      @click.prevent="onClickSelect"
      href="#"
      :class="[
        'ui-select-current',
        {
          active
        }
      ]"
    >
      <span class="ui-select-value">{{ current }}</span>
      <span class="ui-select-arrow">
        <slot name="arrow" />
      </span>
    </a>
    <transition name="fade">
      <div
        v-if="active"
        class="ui-select-wrap"
      >
        <a
          v-for="(option, i) in filteredOptions"
          @click.prevent="onClickOption(option)"
          :key="`option-${i}`"
          href="#"
          class="ui-select-option"
        >{{ option }}</a>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

interface IPropsUiSelect {
  current: string,
  options: unknown[]
}

export default defineComponent({
  name: 'UiSelect',
  props: {
    current: {
      type: String,
      default: 'Выберите значение'
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  // TO DO remove any type
  setup (props: IPropsUiSelect, vm: any) {
    const active = ref(false)

    const filteredOptions = computed(
      () => props.options.filter(option => option !== props.current)
    )

    const methods = {
      onClickOption (option: string) {
        active.value = false
        vm.emit('update:current', option)
        vm.emit('toggle', active.value)
      },
      onClickSelect () {
        active.value = !active.value
        vm.emit('toggle', active.value)
      },
      onCLose () {
        active.value = false
        vm.emit('toggle', active.value)
      }
    }

    return {
      ...props,
      ...methods,
      filteredOptions,
      active
    }
  }
})
</script>
