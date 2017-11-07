<template>
  <div class="form-todo">
    <form
      @submit.prevent="addTask (taskTitle)">
      <div class="input-group input-inline">
        <input v-model="taskTitle" class="form-input" type="text" placeholder="Editar tarea">
        <button 
            type="submit"
            class="btn btn-primary input-group-btn">
            Agregar
        </button>
      </div>
    </form>
    <br>
  </div>
</template>
<script>
export default {
  name: 'Form',
  data () {
    return {
      taskTitle: ''
    }
  },
  methods: {
    addTask (taskTitle) {
      const task = this.$firebase.firestore().collection('tasks').doc()

      task.set({
        title: taskTitle,
        completed: false,
        createdAt: new Date().getTime()
      }).then(() => {
        this.taskTitle = ''
      })
    }
  }
}
</script>

