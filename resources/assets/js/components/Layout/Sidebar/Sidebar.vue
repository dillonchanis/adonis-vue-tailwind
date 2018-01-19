<template>
  <aside class="hidden z-50 fixed pin-y pin-l overflow-y-scroll md:overflow-visible scrolling-touch md:scrolling-auto bg-black w-4/5 md:w-full md:max-w-xs flex-none shadow-lg md:flex flex-col sidebar"
         :class="[ !open ? 'inactive' : null ]">
    <div class="flex-none px-8 pt-6">
      <div class="hidden md:flex md:justify-center">
        <router-link class="text-center" :to="{ name: 'dashboard' }">
          Brand
        </router-link>
      </div>
    </div>
    <div class="p-8 flex-1 overflow-y-scroll">
      <nav class="text-base overflow-y-scroll">
        <div class="mb-8">
          <p class="mb-4 text-grey-dark uppercase tracking-wide font-bold text-xs">Title</p>
          <ul class="list-reset">
            <li class="mb-3">
              <router-link :to="{ name: 'dashboard' }" class="no-underline hover:underline text-grey-lightest">Dashboard</router-link>
            </li>
            <li class="mb-3">
              <router-link :to="{ name: '' }" class="no-underline hover:underline text-grey-lightest">Example Link 1</router-link>
            </li>
            <li class="mb-3">
              <router-link :to="{ name: '' }" class="no-underline hover:underline text-grey-lightest">Example Link 2</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters({
      open: 'sidebar/open'
    })
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);
  transition: .3s cubic-bezier(.4,0,.2,1);
  will-change: transform;
  transform: translateX(0);

  &.inactive {
    transform: translateX(-100%);
  }
}

.list-none {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
