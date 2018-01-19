<template>
  <div>
    <AppSidebar />
    <div class="wrapper"
         :class="{ 'md:ml-80': open }">
      <AppNavbar />
      <div class="w-full max-w-lg">
        <div class="md:ml-4">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { AppSidebar, AppNavbar } from '@layout/'

export default {
  name: 'Base',
  components: {
    AppSidebar,
    AppNavbar
  },
  computed: {
    ...mapGetters({
      open: 'sidebar/open'
    })
  }
}
</script>

<style scoped>
.wrapper {
  transition: .3s cubic-bezier(.4,0,.2,1);
  will-change: margin;
}
</style>
