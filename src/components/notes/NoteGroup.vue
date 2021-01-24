<template>
  <v-container>
    <v-card>
      <v-layout class="align-center justify-center row fill-height">
        <h2>This is a note group</h2>
      </v-layout>
      <draggable tag="v-layout" class="ma-2 row wrap" v-model="draggableCards">
        <template v-for="(note,i) in notes">
          <NoteItem :key="i" :data="note" class="ma-3"/>
        </template>
      </draggable>
    </v-card>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";
import NoteItem from "@/components/notes/NoteItem";

export default {
  name: "NotePage",
  components: {
    draggable,
    NoteItem
  },
  data: () => ({
    notes: ['L', 'M', 'A', 'O']
  }),
}
</script>

<style scoped>

</style>
