<template>
  <v-card>
    <v-card-title>{{data}}</v-card-title>
    <v-card-text>
      This is the note text
    </v-card-text>
    <v-card-actions>
      <v-btn>
        Edit
      </v-btn>
      <v-btn>
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "NoteItem",
  props: {
    data: String
  }
}
</script>

<style scoped>

</style>
