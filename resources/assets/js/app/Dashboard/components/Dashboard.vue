<template>
  <div v-if="user.authenticated">
    <h1>Home</h1>

    <div>
      {{ user.data.username }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      user: {}
    }
  },

  computed: {
    ...mapGetters({
      getUser: 'auth/user'
    })
  },

  mounted () {
    this.user = this.getUser
  }
}
</script>
