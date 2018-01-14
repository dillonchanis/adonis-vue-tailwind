<template>
  <div>
    <h2 class="text-grey-darker mb-6">Login</h2>

    <form class="w-full max-w-md" @submit.prevent="submit">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                 for="email">
            Email
          </label>
          <input v-model="email"
                 class="appearance-none block w-full bg-grey-lighter text-grey-darker border-2 border-grey-lighter hover:border-blue rounded py-2 px-4 mb-3"
                 type="email"
                 required="true"
                 placeholder="name@example.com"
                 name="email">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                 for="password">
            Password
          </label>
          <input v-model="password"
                 class="appearance-none block w-full bg-grey-lighter text-grey-darker border-2 border-grey-lighter hover:border-blue rounded py-2 px-4 mb-3"
                 type="password"
                 required="true"
                 name="password">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <button class="shadow bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 rounded" type="submit">
            Sign In
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import localforage from 'localforage'
import { mapActions } from 'vuex'
import { isEmpty } from 'lodash'

export default {
  name: 'login',

  data () {
    return {
      email: null,
      password: null
    }
  },

  methods: {
    ...mapActions({
      login: 'auth/login'
    }),

    submit () {
      const { email, password } = this

      this.login({
        payload: {
          email,
          password
        },
        context: this
      }).then(() => {
        this.$router.replace({ path: '/' })
      })
    }
  }
}
</script>
