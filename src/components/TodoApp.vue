<template>
  <div class="Todo">
    <todo-form></todo-form>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoForm from './todo/Form'
import TodoList from './todo/List'
export default {
  name: 'Todo',
  components: {
    TodoForm,
    TodoList
  }
}
</script>

<style>
</style>
