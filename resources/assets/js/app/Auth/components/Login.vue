<template>
  <div>
    <h2>Login</h2>

    <form @submit.prevent="submit" class="w-full max-w-xs">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Email
          </label>
        </div>
        <div class="md:w-2/3">
          <input v-model="email" class="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-green rounded w-full py-2 px-4 text-grey-darker" type="email" value="Jane Doe" required="true" name="email">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
            Password
          </label>
        </div>
        <div class="md:w-2/3">
          <input v-model="password" class="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-green rounded w-full py-2 px-4 text-grey-darker" id="inline-username" type="password" placeholder="******************" required="true" name="password">
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button class="shadow bg-green hover:bg-green-light text-white font-bold py-2 px-4 rounded" type="button">
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
      this.login({
        payload: {
          email: this.email,
          password: this.password
        },
        context: this
      }).then(() => {
        localforage.getItem('intended').then(name => {
          if (isEmpty(name)) {
            this.$router.replace({ name: 'home' })
            return
          }
          this.$router.replace({ name })
        })
      })
    }
  }
}
</script>
