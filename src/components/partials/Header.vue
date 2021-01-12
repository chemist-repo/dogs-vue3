<template>
  <header class="header">
    <RouterLink to="/" class="logo">
      <img :src="logo" alt="dogs-vue" class="logo-img">
    </RouterLink>
    <button @click="onToggleActive" class="menu">
      <UiIcon v-if="!active" name="menu" />
      <UiIcon v-else name="close" />
    </button>
    <nav
      :class="[
        'nav',
        {
          active
        }
      ]"
    >
      <RouterLink :to="{ name: 'Home' }" class="ui-button">Случайные собачки</RouterLink>
      <UiSelect
        @update:current="onSelectBreed"
        :options="allBreedsList"
        :current="breed"
      >
        <template v-slot:arrow>
          <UiIcon name="arrow-down" />
        </template>
      </UiSelect>
      <RouterLink :to="{ name: 'Favorites' }" class="ui-button">Избранное</RouterLink>
    </nav>
  </header>
</template>

<script lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { PUBLIC_PATH } from '@/constants'

export default {
  name: 'PartialHeader',
  setup () {
    const router = useRouter()
    const route = useRoute()
    const store = useStore()

    const active = ref(false)
    const logo = `${PUBLIC_PATH}/img/logo.png`

    const breed = computed(() => route.params.breed)
    const allBreedsList = computed(() => store.state.allBreedsList)

    onMounted(async () => {
      await store.dispatch('getAllBreedsList')
    })
    return {
      active,
      logo,
      breed,
      allBreedsList,
      onToggleActive () {
        active.value = !active.value
      },
      onSelectBreed (breed: string) {
        router.push({
          name: 'Breed',
          params: {
            breed
          }
        })
      }
    }
  }
}
</script>
