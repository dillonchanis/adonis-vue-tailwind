<template>
  <header class="flex items-center flex-wrap bg-teal w-full h-16">
    <div class="w-full block flow-grow lg:flex lg:items-center lg:w-auto">
      <svg class="fill-current w-4 h-4 cursor-pointer mr-4 ml-4"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          @click="toggle">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
      <div>
        <router-link v-if="!user.authenticated" :to="{ name: 'login' }" class="inline-block no-underline text-sm px-4 py-2 leading-none rounded text-teal-lighter hover:text-white mt-4 lg:mt-0">
          Login
        </router-link>
        <a v-else href="#" @click.prevent="signOut" class="inline-block no-underline text-sm px-4 py-2 leading-none rounded text-teal-lighter hover:text-white mt-4 lg:mt-0">
          Logout
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'navbar',

  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },

  methods: {
    ...mapActions({
      logout: 'auth/logout',
      toggle: 'sidebar/toggle'
    }),

    async signOut () {
      await this.logout()
      this.$router.replace({ name: 'login' })
    }
  }
}
</script>
