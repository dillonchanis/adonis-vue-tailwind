<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="submit" class="w-full max-w-xs">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="username">
            Username
          </label>
        </div>
        <div class="md:w-2/3">
          <input v-model="username" class="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-green rounded w-full py-2 px-4 text-grey-darker" type="text" required name="username">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="email">
            Email
          </label>
        </div>
        <div class="md:w-2/3">
          <input v-model="email" class="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-green rounded w-full py-2 px-4 text-grey-darker" type="email" required name="email">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="password">
            Password
          </label>
        </div>
        <div class="md:w-2/3">
          <input v-model="password" class="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-green rounded w-full py-2 px-4 text-grey-darker" type="password" placeholder="******************" required name="password">
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button class="shadow bg-green hover:bg-green-light text-white font-bold py-2 px-4 rounded" type="submit">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'register',

  data () {
    return {
      username: null,
      email: null,
      password: null
    }
  },

  methods: {
    ...mapActions({
      register: 'auth/register'
    }),
    submit () {
      const { username, email, password } = this
      axios.post('/api/register', { username, email, password }).then(res => {
        console.log(res)
      })
      // this.register({
      //   payload: {
      //     email: this.email,
      //     password: this.password
      //   },
      //   context: this
      // }).then(() => {
      //   this.$router.replace({ name: 'dashboard' })
      // })
    }
  }
}
</script>
