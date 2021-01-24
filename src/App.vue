<template>
  <v-app>
    <NavBar v-if="showNav"></NavBar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/nav/NavBar";

export default {
  name: 'App',

  components: {
    NavBar,
  },
  data: () => ({
    //
  }),
  computed: {
    showNav: function () {
      return this.$route.name !== 'Login' && this.$route.name !== 'Registration';
    }
  },
};
</script>
