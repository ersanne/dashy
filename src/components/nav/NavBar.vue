<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-app-bar-title>Dashy</v-app-bar-title>
      <v-spacer></v-spacer>
      <AccountMenu></AccountMenu>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Dashy
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group
            v-model="group"
            :active-class="$vuetify.theme.dark ? 'light-blue--text' : 'deep-purple--text'"
        >
          <v-list-item
              v-for="(item, i) in $store.state.navLinks"
              :key="i"
              :to="item.route"
          >
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{item.name}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import AccountMenu from "@/components/nav/NavMenu";
export default {
  name: "NavBar",
  components: {AccountMenu},
  data: () => ({
    drawer: false,
    group: null,
  }),
}
</script>

<style scoped>

</style>
