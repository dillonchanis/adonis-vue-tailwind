<template>
  <div class="max-w-sm mx-auto bg-white rounded overflow-hidden shadow-light">
    <div class="relative gradient-top px-6 py-4">
      <div class="text-grey-darker font-bold text-xl mb-6 mt-2">
        Login
      </div>
      <form class="w-full max-w-md" @submit.prevent="submit">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label class="is-label"
                  for="email">
              Email
            </label>
            <input v-model="email"
                  class="is-input mb-3"
                  :class="{ 'border border-red': errors.field === 'email' }"
                  type="email"
                  placeholder="name@example.com"
                  required
                  name="email">

            <p v-if="errors.field === 'email'"
             class="text-red text-xs italic">{{ errors.message }}</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label class="is-label"
                  for="password">
              Password
            </label>
            <input v-model="password"
                  class="is-input mb-3"
                  :class="{ 'border border-red': errors.field === 'password' }"
                  type="password"
                  required
                  name="password">

            <p v-if="errors.field === 'password'"
             class="text-red text-xs italic">{{ errors.message }}</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full px-3">
            <button class="btn-primary hover:bg-teal-light mr-4" type="submit">
              Sign In
            </button>

            <router-link class="no-underline text-grey hover:text-grey-dark" :to="{ name: 'register' }">
              Register
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',

  data () {
    return {
      email: '',
      password: '',
      errors: {}
    }
  },

  methods: {
    ...mapActions({
      login: 'auth/login'
    }),

    async submit () {
      const { email, password } = this

      await this.login({ payload: { email, password }, context: this })
      this.$router.replace({ path: '/' })
    }
  }
}
</script>

<style scoped>
.gradient-top::before {
  content: '';
  width: 100%;
  height: .5rem;
  top: 0;
  left: 0;
  background: -moz-linear-gradient(left, #04B3BA 0%, #0ABEA2 100%);
  background: -webkit-linear-gradient(left, #04B3BA 0%,#0ABEA2 100%);
  background: linear-gradient(to right, #04B3BA 0%,#0ABEA2 100%);
  display: block;
  position: absolute;
}
</style>
