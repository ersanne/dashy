<template>
  <v-card>
    <v-card-title>Login</v-card-title>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col
              cols="12"
          >
            <v-text-field
                v-model="username"
                :rules="usernameRules"
                label="Username"
                required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              cols="12"
          >
            <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              cols="12"
          >
            <v-btn block>
              Login
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
name: "LoginForm"
}
</script>

<style scoped>

</style>
