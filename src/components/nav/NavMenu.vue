<template>
  <v-menu
      bottom
      min-width="200px"
      rounded
      offset-y
  >
    <template v-slot:activator="{ on }">
      <v-btn large icon class="mr-2" v-on="on">
        <v-avatar color="secondary">ES</v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-list-item-content class="justify-center pb-0">
        <div class="mx-auto text-center">
          <h3>{{ user.fullName }}</h3>
          <p class="caption mt-1 mb-1">
            {{ user.email }}
          </p>
          <v-divider></v-divider>
          <v-btn
            block
            text
          >
            Profile
          </v-btn>
          <v-divider></v-divider>
          <v-btn
              block
              text
          >
            Settings
          </v-btn>
          <v-divider></v-divider>
          <v-btn
              block
              text
          >
            Log out
          </v-btn>
        </div>
      </v-list-item-content>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: "AccountMenu",
  data: () => ({
    user: {
      initials: 'JD',
      fullName: 'John Doe',
      email: 'john.doe@doe.com',
    }
  }),
}
</script>

<style scoped>

</style>
