<template>
  <v-container class="fill-height">
    <v-row class="justify-center align-center">
      <v-col cols="4">
        <LoginForm></LoginForm>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from "@/components/auth/LoginForm";
export default {
  name: "Login",
  components: {LoginForm}
}
</script>

<style scoped>

</style>
