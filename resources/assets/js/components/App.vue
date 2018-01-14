<template>
  <div>
    <AppNavbar />
    <section class="container mx-auto">
      <div class="px-4 py-6">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import AppNavbar from './Navbar'

export default {
  components: {
    AppNavbar
  }
}
</script>
