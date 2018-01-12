<template>
  <div class="w-full max-w-xs">
    <h2>Login</h2>

    <form @submit.prevent="submit">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="email">
            Email
          </label>
        </div>
        <div class="md:w-2/3">
          <input v-model="email" class="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-green rounded w-full py-2 px-4 text-grey-darker" type="email" required="true" name="email">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="password">
            Password
          </label>
        </div>
        <div class="md:w-2/3">
          <input v-model="password" class="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-green rounded w-full py-2 px-4 text-grey-darker" type="password" placeholder="***********" required="true" name="password">
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button class="shadow bg-green hover:bg-green-light text-white font-bold py-2 px-4 rounded" type="submit">
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
        this.$router.push({ path: '/' })
      })
    }
  }
}
</script>
