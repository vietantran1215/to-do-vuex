<template>
  <div id="app">
    <div v-for="todo in todos" :key="todo.id">
      {{ todo.name }} - {{ todo.status }}
      <button @click="() => handleUpdateStatus(todo, 'complete')">
        Complete
      </button>
      <button @click="() => handleUpdateStatus(todo, 'cancel')">Cancel</button>
    </div>
  </div>
</template>

<script lang="js">
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      todos: 'getToDos'
    })
  },
  methods: {
    ...mapActions({
      updateToDo: 'updateToDo'
    }),
    handleUpdateStatus(todo, status) {
      const todoToUpdate = { ...todo, status };
      this.updateToDo(todoToUpdate);
    },
  }
}
</script>

<style lang="scss"></style>
