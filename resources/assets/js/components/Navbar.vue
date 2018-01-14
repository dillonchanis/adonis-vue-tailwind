<template>
  <header class="bg-blue">
    <div class="container mx-auto">
      <nav class="flex items-center justify-between flex-wrap p-4">
        <div class="flex items-center flex-no-shrink text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">Brand</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-blue-lighter hover:text-white mr-4">
              Link 1
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-blue-lighter hover:text-white mr-4">
              Link 2
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-blue-lighter hover:text-white">
              Link 3
            </a>
          </div>
          <div>
            <router-link v-if="!user.authenticated" :to="{ name: 'login' }" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">
              Login
            </router-link>
            <a v-else href="#" @click.prevent="signOut" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">
              Logout
            </a>
          </div>
        </div>
      </nav>
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
      logout: 'auth/logout'
    }),

    signOut () {
      this.logout().then(() => {
        this.$router.replace('/login')
      })
    }
  }
}
</script>
